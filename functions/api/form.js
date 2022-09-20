export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Max-Age': '86400',
    }
  })
}
  
export async function onRequestPost(context) {
    const { request } = context

    const { email, message } = await request.json()

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': import.meta.env.RAPID_API_KEY,
        'X-RapidAPI-Host': import.meta.env.RAPID_API_HOST
      },
      body: JSON.stringify({
        "personalizations": [{
          "to": [{
            "email": "hola@salteadorneo.dev"
          }],
          "subject": "Contacto web"
        }],
        "from": {
          "email": "hola@salteadorneo.dev"
        },
        "content": [{
          "type": "text/plain",
          "value": email + "\n" + message
        }]
      })
    };

    const response = await fetch('https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send', options)
  
    return new Response(JSON.stringify({ ...response }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
        'Access-Control-Max-Age': '86400',
        'Access-Control-Allow-Headers': '*',
      }
    });
  }