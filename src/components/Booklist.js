import React, {Component} from 'react';
import Book from './Book';
import booksData from './data';
class Booklist extends Component{
    constructor(props){
        super(props)
    this.state ={
    books:booksData
};
    }


    render(){
       
        return(
            <div>
                <h1>Hello from Booklist</h1>
                {this.state.books.map(book =>(<Book key={book.id} info={book}/>))}
                {/* {this.state.books.map(item =>(<Book key={item.id} info={item}/>))}
            </div> */}
            </div>
        )
    }
}
export default Booklist;