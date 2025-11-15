export async function onRequest(context: any) {
  const response = await context.next();
  
  // Get the URL path
  const url = new URL(context.request.url);
  const path = url.pathname;
  
  // Create headers object
  const headers = new Headers(response.headers);
  
  // Force correct MIME types based on file extension
  if (path.endsWith('.js') || path.endsWith('.mjs')) {
    headers.delete('Content-Type'); // Delete first to ensure override
    headers.set('Content-Type', 'application/javascript; charset=utf-8');
  } else if (path.endsWith('.css')) {
    headers.delete('Content-Type');
    headers.set('Content-Type', 'text/css; charset=utf-8');
  }
  
  // Add security headers and disable cache temporarily
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  
  // Clone the response with new headers
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: headers
  });
}
