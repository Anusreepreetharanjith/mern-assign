let books= [
	//object #1
	{
        bcover :"http://thelostepic.com/wp-content/uploads/2021/04/THE-ACCURSED-GOD-Front-780x1100-1.jpg",
        bookname: 'The Accursed God',
		bauth:'Vivek Dutta Mishra',
        bprice: 500,
       // action: <
	},

    { 
        bcover : "https://kbimages1-a.akamaihd.net/1c469dcb-5d48-47cb-a61b-5298babdb0d3/1200/1200/False/harry-potter-and-the-chamber-of-secrets-6.jpg",
		bookname: 'Harry Potter',
		bauth:'J K Rowling',
        bprice: 340,
       // action: 9
	},

	//object #1
    {
        bcover : "https://images-na.ssl-images-amazon.com/images/I/61qF6xsWq3L.jpg"	,
		bookname: "The Count of Monte Cristo",
		bauth: "Alexandre Dumas",
        bprice: 600,
     //   action: 7
		
	
	}


];

let tab = document.getElementById("reviews")
for (book of books){
    tab.innerHTML +=
   `<tr>
        <td><img src = "${book.bcover}" width="70" /></td>
        <td>${book.bookname}</td>
        <td>${book.bauth}</td>
        <td>${book.bprice}</td>
        <td>
        <button id="details">Details </button>
        <button id="delete" onclick= "removeBook()">Delete</button>
        </td>
        
    </tr>`
}

//function del(btn) {
  //  document.getElementById(btn).remove()
//}

