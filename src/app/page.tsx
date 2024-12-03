"use client"

import BookCards from "@/components/bookCards";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-4xl font-bold mb-8 text-white">Welcome to Book Store</h1>

      <BookCards href={"/register"} func={()=>{}}/>
    </>
  );
}
