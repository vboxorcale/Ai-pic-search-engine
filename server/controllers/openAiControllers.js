// Import the necessary OpenAI modules and set up the configuration using an API key from environment variables
const{Configuration , OpenAIApi} = require("openai");
const configuration = new Configuration({
    apiKey:process.env.OPEN_API_KEY 
    // "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"
});
const openai = new OpenAIApi(configuration)
// Define a function that generates an image using the OpenAI API
const genImage=async(req,res)=>{
    try{
    // Make a request to the OpenAI API to generate an image based on a prompt
        const response = await openai.createImage({
            prompt: "create a bus image",
        });
    // Extract the image result from the API response and send it back to the client
     const image_result = response.data.data
     res.status(200).json({
        success:true,
        data:image_result
        
  });
 // Log any errors that occur while making the API request
}catch(error){
        console.log(error)
    }
}
// Export the genImage function for use in other parts of the application
module.exports={genImage};