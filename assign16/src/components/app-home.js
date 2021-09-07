import React from 'react';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.handleclick = this.handleclick.bind(this);
      this.state = {
        currentImage: 0,
        
       images : [
            "/images1/coverpage.jpg",
            "https://wallpaperaccess.com/full/2878927.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mRw7wijo19JNDfWWHYvyv0ViNQ_tK26njQ&usqp=CAU",
         
          
          "https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218722219.jpg",
          "http://images6.fanpop.com/image/photos/37800000/Book-Wallpaper-reading-37810278-1280-800.jpg"
          

        ],
        quotes : [
          "“One must always be careful of books,and what is inside them, for words have the power to change us.”", 
          "A room without books is like a body without a soul.",
           "I have always imagined that Paradise will be a kind of library.",
           "There is no friend as loyal as a book.",
            "“It is what you read when you don't have to that determines what you will be when you can't help it.”"
        ]
       
      };
    }
  
   handleclick=() => {
      if (this.state.currentImage < this.state.images.length - 1){
        this.setState({
          currentImage: this.state.currentImage + 1
          
        });
      } else {
        this.setState({
          currentImage: 0
         
        });
      }
      return this.currentImage;
      
    }
  

    render() {
      return (
        <div className="bookhome">
            <h2>Home!</h2>
        <p>Welcome to the Book's web Home page.</p>
        <p>Here you will find all about books</p>
        <p className="red">{this.state.quotes[this.state.currentImage]}</p>
          <img className="bodyy"
            src={this.state.images[this.state.currentImage]}
            alt="cleaning images"
          />
          <button onClick= {this.handleclick}>Refresh</button>
        </div>
      );
    }
  }
  


const __App = () => {

  


    return <div className='body'>
        <h2>Home!</h2>
        <p>Welcome to the Book's web Home page.</p>
        <p>Here you will find all about books</p>
        <img className='coverimage' src='/images/coverpage.jpg' alt="Book's Home" />
        <img src="https://www.w3schools.com/images/lamp.jpg" alt="Lamp" />
       
    </div>

};

export default App;