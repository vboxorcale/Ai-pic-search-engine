const genImage=(req,res)=>{
   res.status(200).json({
    success:true,
    message:"hello from genImage controllers"
  })
}
module.exports={genImage};