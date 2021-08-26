function countDown(count) {
    return new Promise((resolve, reject) => {

        let id = setInterval(function () {
            if (count<0){
            return reject(new Error("invalid"));
            }
            if(count>0){
            console.log(count--);
            }

        else
            return resolve(count);

        
        }, 1000);

       

    });





}


countDown(5)
.then((count) => {
  console.log(count);
   console.log("Done");

    

});


console.log("count down started…")