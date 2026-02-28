
import express from 'express'
import { addingListing } from '../controllers/listing.controller'
import isAuth from '../middleware/isAuth'

let listingRouter = express.Router()

listingRouter.post("/add",isAuth,UploadStream.fields([
    { name: 'image1' ,maxCount:1}, 
    { name: 'image2',maxCount:1 }, 
    { name: 'image3',maxCount:1 }
]), addingListing)

export default listingRouter