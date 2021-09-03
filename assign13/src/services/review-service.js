const { Review } = require('../models/review');
const { ServiceError } = require('../utils/service-error');
require('dotenv').config();


const addReview = async ({ body }) => {

    try {
        console.log('body',body);
        
        let newReview = new Review({ ...body});
        let result=await  newReview.save();
        console.log('review added');
        return result;
    } catch (error) {
        console.log('error',error);
        throw new ServiceError(400, 'Validation Error', error);
    }
}

const getAllReviews=async (isbn)=>{
    return await Review.find();
}



module.exports={
    addReview,    
    getAllReviews
};