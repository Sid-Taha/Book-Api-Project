"use server"

 
export async function fetchBooks() {
  const books = await fetch("https://simple-books-api.glitch.me/books");

  if(!books.ok){
    return "Books not found";
  }

  return books.json();
}