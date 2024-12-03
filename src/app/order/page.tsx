"use client"
import BookCards from '@/components/bookCards'
import { Button } from '@/components/ui/button'
import { placeOrders } from '@/services/orders'
import React from 'react'
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link'


function OrderPage() {

  const btnFunc = async (bookId: any) => {
    const token = localStorage.getItem("accessToken")
    const clientName = localStorage.getItem("clientName")
    
    if(!token && !clientName){
      alert("Missing token or client name");
      return;
    }

    const data = await placeOrders(token, bookId, clientName);

    if (data !== "Failed to place order"){
      alert("Order placed successfully");
    }else {
      alert(data);
    }
  }
  
  return (
    <>
      <div className='flex justify-between items-center text-white mb-[10px]'>
        <h1 className="text-center text-4xl font-bold mb-8">Confirm Your Order</h1>

        <div>
          <Link href={"/showOrders"}>  
            <Button>View Your Orders 
            <ShoppingCart />
            </Button>
          </Link>
        </div>
      </div>

      <BookCards href={"#!"} func={btnFunc}/>
    </>
  )
}

export default OrderPage