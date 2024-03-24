const checkedFetch2: typeof fetch = async (input, init) => {
    const response = await fetch(input, init);
    if(!response.ok) {
        throw new Error("Request Failed: " + response.status);
    }
    return response;
}