import React from "react";
import booklist from "../Booklist"
import Entry from "./Entry"


function App() {
    return(
        <section className="main">
        <header>
            <h1>
             Amazon Best Selling Books
            </h1>
        </header>
        <div className="content">
            {booklist.map((book) => {
                return (
                    <Entry
                        {...book} key={book.id}
                    />
                )
            })}
               
        </div>
        </section>
    )
}

export default App