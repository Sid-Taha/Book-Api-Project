"use server"


//--------------------------------------Place order
export async function placeOrders(token: any, bookId: any, clientName: any) {
  const response = await fetch("https://simple-books-api.glitch.me/orders",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      "bookId": bookId,
      "customerName": clientName
    })
  })

  if (response.status !== 201){
    return ("Failed to place order");
  }

  const data = await response.json();
  return data;
}




//---------------------------------------Get orders
export async function getOrders(token: any) {
  const response = await fetch("https://simple-books-api.glitch.me/orders",{
    method : "GET",
    headers: {
       "Authorization": `Bearer ${token}`
    }
  })

  if (!response.ok){
    return ("Failed to get orders");
  }

  const data = await response.json();
  return data;
}



//---------------------------------------Delete order
export async function deleteOrder(token: any, orderId: any) {
  const response = await fetch(`https://simple-books-api.glitch.me/orders/${orderId}`,{
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })

  if (!response.ok){
    return ("Failed to delete order");
  }else{
    return ("Order deleted successfully");
  }
}