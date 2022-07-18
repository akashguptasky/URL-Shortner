const validation = require('../validation/validation')
const urlModel = require('../models/urlModel')
const shortid = require('shortid');

const shortUrl = async function(req,res)
{
    try{
    const data = req.body;
    const longUrl  = data.longUrl

    if(validation.isBodyEmpty(data)) return res.status(400).send({status:false, message:"Please provide required Data"});

    if(!validation.isValid(longUrl)) return res.status(400).send({status:false, message:"Please provide valid longUrl"}); 

    if(!validation.isValidUrl(longUrl)) res.status(400).send({status:false, message:`longUrl "${longUrl}" is not valid`});

    let urlId = shortid.generate();
    urlId = urlId.toLowerCase();
    const isUrlExist = await urlModel.findOne({longUrl:longUrl})

    const baseUrl = "http://localhost:4000"
    // yaha kya aayega status code mai 
    if(isUrlExist) return res.status(201).send({status:true, data:{urlCode:isUrlExist.urlCode, longUrl:longUrl, shortUrl:`${baseUrl}/${isUrlExist.urlCode}`}})


    let myObject = {
        urlCode:urlId,
        longUrl:longUrl,
        shortUrl:`${baseUrl}/${urlId}`
    }
    
    const createdData = await urlModel.create(myObject);
    res.status(201).send({status:true, data:myObject})
} catch(error){
    res.status(500).send({status:false, message:error.message})
}

}

module.exports ={
 shortUrl
}



