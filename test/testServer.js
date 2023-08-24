const { expect } = require("chai");
const request = require("request");
let cat;

//how to write a test
// describe('description of the suite', function(){
//     it('description of the unit test', function(done){
//         //test logic goes here
//         request(url,function(somethinghere){
            
//         });
//     })
// });

describe('is GET function working', function(){
    it('returns statusCode of 200', function(done){
        request('http://localhost:3000/api/cat', function(error, response, bodyString){
            console.log(arguments);
            let bodyObj = JSON.parse(bodyString); //convert string to object
            expect(bodyObj.statusCode).to.equal(200);
            done();
        })
    })
})
