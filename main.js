import {fetchQuote} from "./quoteApiHandler.js";
import dotenv from 'dotenv';

dotenv.config();

const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
const apiToken = process.env.API_TOKEN;
const quote = fetchQuote(apiUrl, apiToken);

async function getQuote() {
    try {
        const data = await fetchQuote(apiUrl, apiToken);
        console.log(data[0].quote);
    } catch (error) {
        console.error('Error fetching the quote:', error);
    }
}

getQuote().catch(() => console.error('Error fetching the quote!'));

