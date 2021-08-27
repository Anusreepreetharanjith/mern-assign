//const { expect } = require("@jest/globals");
const {findPrimesEvent} = require('../src/libs/primes');

describe('findPrimesEvent tests',()=>{

    xit('should return 4 primes between 2 and 10',()=>{
        expect(findPrimesSync(2,10).length).toBe(4);
    });


    it('should return 25 primes under 100',()=>{

        let r=findPrimesEvent(0,100);
        r.on('done',(data)=> {
            try{
                console.log(data);
                expect(data).toBe(25);
                console.log('callback is called');
                done();
            }
            catch(error) {
                done(error);
            }
        });

    });

    xit('should throw Error for invalid range',()=>{

        let success=true;
        try{
            findPrimesEvent(10,1); //should throw error
            //if you reach here then test has failed
            console.log('test should have failed');
            success=false;
           
        }catch(e){
            //if you reach here the test has passed.
            expect(e.message).toMatch(/Invalid Range:*/);
        }

        if(!success)
            expect(true).toBe(false);

    });

    xit('should throw Error for invalid range',()=>{

        //expect(()=>findPrimesSync(10,1)).toThrow();

        expect(()=>findPrimesSync(10,1)).toThrow(/Invalid Range/);

    });

});


