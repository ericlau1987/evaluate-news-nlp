const dotenv = require('dotenv');
dotenv.config();

const {
    application_key,
  } = process.env;

console.log(application_key)

  const getAPIResult = async (req, res) => {
    const { body: { url } } = req;
    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${application_key}&url=${url}&lang=en`
    const response = await fetch(apiUrl);
    const result = response.data;
    res.send(result);
  }
  
  module.exports = {
    getAPIResult
  }