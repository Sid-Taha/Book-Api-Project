"use client"
import { Card } from '@/components/ui/card';
import { deleteOrder, getOrders } from '@/services/orders'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Trash2 } from 'lucide-react';

function showOrders() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("accessToken")
   
  useEffect(()=>{
    const fetchData = async () => {
      const orders = await getOrders(token);

      if (orders !== "Failed to get orders"){ 
        setOrders(orders)
      }else{
        alert(orders)
      }
    }

    fetchData()
  },[])
  


  const deleteFunc = async (orderId: any) =>{
    const data = await deleteOrder(token, orderId)

    if (data !== "Failed to delete order"){
      alert("Order deleted successfully");
      window.location.reload();
    }
    else{
      alert("Failed to delete order")
    }
  }



  
  return (
    <>
      <div>
        <h1 className="text-center text-4xl font-bold mb-8 text-white">Here's Your Orders</h1>

        <div className='grid grid-cols-3 gap-10'>
          {orders.map((book: any, index: any)=>{
            return (
              <Card key={index} className='flex gap-10 overflow-hidden'>
                <Image src={`/book${book.bookId}.png`} alt='Book image' width={100} height={100}/>

                <div className='flex flex-col gap-4 mt-4'>
                  <h2 className='text-[14px]'>Order Id: {book.id}</h2>
                  <p className='font-bold'>Book Id: {book.bookId}</p>
                  <p>Customer Name: {book.customerName}</p>
                
                  <div className='w-full flex justify-end items-center'>
                    <Trash2 cursor={"pointer"} onClick={()=>{deleteFunc(book.id)}}/>
                  </div>
                </div>

                
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default showOrders