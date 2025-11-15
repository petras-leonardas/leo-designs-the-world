export async function onRequest(context: any) {
  const response = await context.next();
  
  // Clone the response to modify headers
  const newResponse = new Response(response.body, response);
  
  // Get the URL path
  const url = new URL(context.request.url);
  const path = url.pathname;
  
  // Set correct MIME types based on file extension
  if (path.endsWith('.js') || path.endsWith('.mjs')) {
    newResponse.headers.set('Content-Type', 'application/javascript; charset=utf-8');
  } else if (path.endsWith('.css')) {
    newResponse.headers.set('Content-Type', 'text/css; charset=utf-8');
  }
  
  // Add security header
  newResponse.headers.set('X-Content-Type-Options', 'nosniff');
  
  return newResponse;
}
