"use server"



export async function registerClient(clientName: any, clientEmail: any) {
  const response = await fetch("https://simple-books-api.glitch.me/api-clients",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "clientName": clientName,
      "clientEmail": clientEmail,
   })
  })

  if(response.status === 409){
    return ("Client already exists with this email")
  }

  if(!response.ok){
    return ("Failed to register client")
  }

  const data = await response.json()
  return data.accessToken
}