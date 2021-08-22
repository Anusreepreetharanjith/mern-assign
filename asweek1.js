function showBook(books){

  //  document.getElementById("bookTitle").innerHTML=book.title;
 //   document.getElementById("bookAuthor").innerHTML=book.author;
 //   document.getElementById("bookPrice").innerHTML=book.price;
 //   const rating= book.getRating() || "n/a";
 //   document.getElementById("avgRating").innerHTML=rating;
 //   console.log('rating',rating);

  //  document.getElementById("indexNumber").innerHTML=`${index+1} of ${books.length}`
    
    let reviews = document.getElementById("reviews");
    reviews.innerHTML='';

    for(let review of books.reviews){
        reviews.innerHTML+=`
                            <tr>
                                <td>${review.description}</td>
                                <td>${review.rating}/5</td>
                            </tr>
                            `
    }
}

let index=0;

function moveFirst(){
    index=0;
    showBook(books[index]);
}

function movePrevious(){
    index--;
    if(index<=0)
        index=0;
    showBook(books[index]);
}

let nextId=books.length;

function addBook(){
    let book=new Book(`Book #${nextId}`, 'Unknown', 100);
    for(let i=1;i<=3;i++){
        book.addReview(createReview(`Review ${nextId}: ${i}`, 3.5));
    }

    books.push(book);
    nextId++;
    moveLast();
}

function removeBook(){
    for(book of books)
    if(books.length){

        books.splice(index, 1);
        if(index>=books.length)
            index=books.length-1;

        showBook(books[index]);

    }
}
