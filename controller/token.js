/*const axios=require ('axios');
 

const createToken= async(req,res)=>{
const consumer='Jx4OtGjIKJOfJEmNtBRRuEldgfG3HA';
const secret='VcWRq3EQHIa8GBkEa9gELlA4zL';


 const auth= new Buffer.from(`${consumer}:${secret}`).toString('base64');
 
 await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',{
              headers:{
                   authorization: `Basic ${auth}`,
               }
         }
        ) .then((data)=>{
            console.log(data.data);
        }).catch((err)=>{console.log(err);
            res.status(400).jason(err.message);
        });
        
}

module.exports={createToken};**/

require('dotenv').config();
const axios = require('axios');

const createToken = async (req, res) => {
    const consumerkey=process.env.CONSUMER_KEY;
    const consumersecret=process.env.CONSUMER_SECRET;
  // Base64 encode the consumer and secret
    const auth = Buffer.from(`${consumerkey}:${consumersecret}`).toString('base64');
    const saf='https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
  try {
    // Make the API call to generate the token
    const response = await axios.get(saf, {
      headers: {
        authorization: `Basic ${auth}`,
      },
    });
          // Log the response data
    console.log(response.data);
          // Send the token to the client (or whatever you want to send)
    res.json({ token: response.data.access_token});

  } catch (err) {
    // Handle any errors and send the error message as a JSON response
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createToken };
