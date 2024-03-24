const responseP = fetch("/quote?by=Mark+Twain"); // 타입이 Promise<Response>

async function getQuote() {
    const response = await fetch("/quote?by=Mark+Twain");
    const quote = await response.json();

    return quote;
}

// {
//     "quote": "If you tell the truth, you don't have to remember anything",
//     "source": "notebook",
//     "date": "1894"
// }