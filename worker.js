addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Get the client's IP address from the request
  const ip = request.headers.get('CF-Connecting-IP') || 'IP not found';

  // Return the IP address in the response
  return new Response(`Your IP address is: ${ip} \n`, {
    headers: { 'Content-Type': 'text/plain' },
  })
}
