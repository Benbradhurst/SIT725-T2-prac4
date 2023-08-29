let collection = require('../models/cat');
let postCatSuccess= false;
let getAllSuccess = false;

const postCat = (req, res) => {
    let cat = req.body;
    collection.postCat(cat, (err, result)=>{
        if (!err) {
            res.json({statusCode:201, data:result, message:'success' });
            postCatSuccess = true;
        }
    });
}


const getAllCats = (req,res) => {
    collection.getAllCats((err,result)=> {
        if (!err) {
            res.json({ statusCode: 200, data:result, message: 'get all cats successful' });
            getAllSuccess = true;
        }
    });
}

module.exports = {postCat,
    getAllCats,
    postCatRunning: function(){
        if(!postCatSuccess){
            return "failed";
        }
        else{
            return "success";
        }
    },
    getAllRunning: function(){
        if(getAllSuccess){
            return "success"
        }
        else{
            return "failed"
        }
    }
}