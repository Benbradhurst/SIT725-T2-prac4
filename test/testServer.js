const { expect } = require("chai");
const request = require("request");
const assert = require('chai').assert;
const sayRunning = require('../server').sayRunning;
const postCatRunning = require('../controllers/controller').postCatRunning;
const getAllRunning = require('../controllers/controller').getAllRunning;

let cat;

describe('App running', function(){
    it('app should return string "running"', function(){
        assert.equal(sayRunning(), "running");
    });
});

describe('postCat running', function(){
    it('postcat should return "success"', function(){
        assert.typeOf(postCatRunning(), )
    })
})

describe('getAllCats running', function(){
    it('getAllCats should return "success"', function(){
        assert.equal(getAllRunning(), "success");
    })
})

//how to write a test
// describe('description of the suite', function(){
//     it('description of the unit test', function(done){
//         //test logic goes here
//         request(url,function(somethinghere){
            
//         });
//     })
// });

// describe('is GET function working', function(){
//     it('returns statusCode of 200', function(done){
//         request('http://localhost:3000/api/cat', function(error, response, bodyString){
//             console.log(arguments);
//             let bodyObj = JSON.parse(bodyString); //convert string to object
//             expect(bodyObj.statusCode).to.equal(200);
//             done();
//         })
//     })
// })