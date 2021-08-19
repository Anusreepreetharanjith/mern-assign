let books= [
	//object #1
	{
		bookname: 'Harry Potter',
		bauth:'J K Rowling',
        bprice: 500,
        brating: 8
	},

    {
		bookname: 'Lost Symbol',
		bauth:'Dan Brown',
        bprice: 900,
        brating: 9
	},

	//object #1
	{
		bookname: 'Pride and Prejudice',
		bauth:'Jane Austen',
        bprice: 600,
        brating: 7
		
	
	}


];



function searcht(books){
    let sea=[];
    for(let book of books ){
        if(book.bookname.match("Potter"))
            sea.push(book.bookname);
    }
    return sea;
}







function findl(books){
    let results=[];
    for(let book of books ){
        if(book.bauth == "Jane Austen")
            results.push(book.bookname);
    }
    return results;
}

function pricer(books){
    let ress=[];
    for(let book of books ){
        if(book.bprice > 400 && book.bprice < 570 )
            ress.push(book.bookname);
    }
    return ress;
}


function rate(books){
    let qer=[];
    for(let book of books ){
        if(book.brating >"8.5")
            qer.push(book.bookname);
    }
    return qer;
}

function avg(books){

    let total= 0;

    for(let book of books ){
        total =  total + book.bprice;
     // console.log(book.bprice);
       // a = total/3
    }
   // a = total/3
    console.log(total/books.length);
}


function avgrate(books){

    let total= 0;

    for(let book of books ){
        total =  total + book.brating;
     // console.log(book.bprice);
       // a = total/3
    }
   // a = total/3
    console.log(total/books.length);
}



//function red(books) 
//{
    //var p1;
   // for (let book of books)
    //{
  
//bookhs(p1);


function ebookname(value,books){
    let newarr = [
        
    ];
    for(let book of books){
        if (book.bookname == value)
        console.log("yes")
        {
            newarr.bookname = value;
            newarr.bookprice = book.bprice;

        }
        return newarr;

    }
}

console.log("\n");
let newarr = ebookname("Harry Potter",books);
console.log(newarr);








console.log('Name\t     Author \tPrice \tRating');
for(let book of books){
    console.log(`${book.bookname}\t${book.bauth}\t${book.bprice}\t${book.brating}`)
}

//console.log("\n");
//console.log(books);

console.log("\n");
let sea = searcht(books);
console.log(`Book is ${sea}`);

console.log("\n");
let results = findl(books);
console.log(`Book is ${results}`);

console.log("\n");
let ress = pricer(books);
console.log(`Book is ${ress}`);

console.log("\n");
let qer = rate(books);
console.log(`Book is ${qer}`);

console.log("\n");
avg(books);
//console.log(a);

console.log("\n");
avgrate(books);

