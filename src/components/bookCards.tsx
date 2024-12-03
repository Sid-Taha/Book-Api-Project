"use client"
import React, { useEffect, useState } from 'react'
import { Card } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { fetchBooks } from '@/services/api';
import Link from 'next/link';

function BookCards({href, func}: any) {
  
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const books = await fetchBooks();
      setBooks(books)
    }

    fetchData()
  },[])

  return (
    <>
      <div className='grid grid-cols-3 gap-10'>
        {books.map((book: any, index: any)=>{ return (
          
          <Card key={index} className='flex gap-6 hover:scale-[1.02] duration-200 overflow-hidden'>
            <Image src={`/book${book.id}.png`} alt='Book image' width={100} height={100}></Image>

            <div className='relative w-full flex flex-col gap-4 text-start'>
              <h2 className='text-[24px] font-bold'>{book.name}</h2>
              <p>{book.type}</p>
              <p className={book.available ? 'text-green-500' : 'text-red-500'}>
                {book.available ? 'Available' : 'Not Available'}
              </p>

              <div className='absolute bottom-0 right-0 p-2'>
                
                <Link href={href}>
                  <Button className='bg-blue-600 hover:bg-blue-700 text-white'
                    onClick={()=>{func(book.id)}}
                  >
                    Place an Order
                  </Button>
                </Link>

              </div>
            </div>
          </Card>

        )})}
      </div>
    </>
  )
}

export default BookCards