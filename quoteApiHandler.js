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
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching the quote:', error);
        throw error;
    }
}

export { fetchQuote };