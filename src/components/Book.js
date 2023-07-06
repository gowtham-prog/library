import React from "react";
import {useState} from 'react';


let Book = (props) => {
    const [books,setBooks] = useState(props.books);

    const togfav = (id) => {
        const updatedBooks = books.map((book) => {
          if (book.id === id) {
            book.fav = !book.fav;
          }
          return book;
        });
        setBooks(updatedBooks);
      };
      
      const togWish = (id) => {
        const updatedBooks = books.map((book) => {
          if (book.id === id) {
            book.wish = !book.wish;
          }
          return book;
        });
        setBooks(updatedBooks);
      };
      
    return (
        <div>
            <ul>
                {
                    props.books.map((book) => (
                        <div className="container mx-auto items-center bg-gray-200 rounded-xl shadow p-8 border-x-inherit pd-2">
                            <p className="text-2xl text-center text-gray-700 font-bold mb-5">
                                {book.name}
                            </p>
                            <p className="text-center text-gray-500 text-lg">
                                {book.author}
                            </p>
                            <div className=" flex mt-2 justify-center">
                                <button onClick= {() => togfav(book.id)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        {book.fav ? "Remove Favourite" : "Add Favourite" }
                                    </span>
                                </button>
                                
                                <button onClick = {() => togWish(book.id)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        {book.wish ? "Remove From Wishlist" : "Add to Wishlist"}
                                    </span>
                                </button>
                            
                            </div>
                        </div>
                    ))
                }
            </ul>
        </div>

    );
}

export default Book;