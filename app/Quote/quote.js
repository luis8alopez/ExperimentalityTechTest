const axios = require('axios');
const ImageSearchAPIClient = require('azure-cognitiveservices-imagesearch');
const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;
const Quote = require('../Quote/model');

async function getRandomQuote () {
    let getResult = await axios.get("https://andruxnet-random-famous-quotes.p.rapidapi.com/", {
        headers: {
            'content-type': "application/octet-stream",
            'X-RapidAPI-Host': "andruxnet-random-famous-quotes.p.rapidapi.com",
            'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
            "useQueryString": true
        },
        "params": {
            "cat": "famous",
            "count": "1"
        }
    });
    let randomQuote = getResult.data;
    console.log(randomQuote);
    return randomQuote[0].quote;
};

async function getImage (search) {
    let serviceKey = process.env.serviceKey;
    let credentials = new CognitiveServicesCredentials(serviceKey);
    let imageSearchApiClient = new ImageSearchAPIClient(credentials);
    let imageResults = await imageSearchApiClient.imagesOperations.search(search);
    let firstImageResult = imageResults.value[1].contentUrl;
    return firstImageResult;
};

async function saveQuote () {

    const quote = await getRandomQuote();
    const imageUrl = await getImage(quote);

    const newQuote = new Quote({
        quote: quote,
        image: imageUrl
    });
   
    return newQuote.save().then(result =>{
        return result;
    }).catch(error =>{
        console.log('I couldn\'t save to the db: ', error);
    });
};

module.exports = saveQuote;

