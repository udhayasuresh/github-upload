import React,{Component} from 'react';
import Button from './Button';
class Book extends Component{
  constructor(props){
      super(props);
     this.state={
        count: 0
    };

  }
     
    addCount = () =>{
        this.setState({
            count:this.state.count + 1
        });
    };
    lowerCount = () =>{
        this.setState({
            count:this.state.count - 1
        });
    };
    resetCount = () =>{
        this.setState({
            count: 0
        });
    }
     
    render(){
        const {img, title,author}=this.props.info;
        return(
            <div className="book">
                <img src ={img} width="150px" alt="book"/>
                {/* <h3>book: {book}</h3>
                <h3>book: {author}</h3> */}
            <div>
            <h4>Title: {title}</h4>
            <h6>BY: {author}</h6>
            <button type="button" onClick={this.addCount}>Add Count</button>
            {/* <button type="button" onClick={this.lowerCount}>Lower Count</button>
            <button type="button" onClick={this.resetCount}>Reset Button</button> */}
            <h2>Count:{this.state.count}</h2>
            <Button />
            </div>
            </div>
        )
    }
}
export default Book;