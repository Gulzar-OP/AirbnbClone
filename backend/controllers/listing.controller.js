import Listing from "../model/listing.model.js"
import User from "../model/user.model.js"

export const addingListing = async(req,res)=>{
    try{
        let host = req.userId
        let {title, description, rent, city, landMark, category} = req.body
        let image1 = await uploadOnCloudinary(res.files.image1[0].path)
        let image2 = await uploadOnCloudinary(res.files.image2[0].path)
        let image3 = await uploadOnCloudinary(res.files.image3[0].path)

        let listing = await Listing.create({
            title,
            description,
            rent,
            city,
            landMark,
            category,
            image1,
            image2,
            image3,
            host
        })
        
        let user = await User.findByIdAndUpdate(host, {$push: {listings: listing._id}}, {new: true})
        if(!user){
            res.status(404).json({message:"User Not Found"})
        }
        res.status(201).json(listing)
    }catch(e){
        // console.log(e);
        res.status(500).json({message:"Adding Listing Failed"})
    }
}