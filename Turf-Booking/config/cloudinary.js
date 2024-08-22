import cloudinary from 'cloudinary';
import "dotenv/config";


// cloudinary.v2.config({ 
//   cloud_name:process.env.CloudName, 
//   api_key:process.env.APIKey, 
//   api_secret:process.env.APISecret
// });


export const cloudinaryInstance = cloudinary.v2;
