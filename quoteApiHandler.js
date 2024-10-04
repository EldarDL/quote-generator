import fetch from 'node-fetch';

async function fetchQuote(apiUrl, apiToken) {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'X-Api-Key': apiToken
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching the quote:', error);
    }
}

export { fetchQuote };