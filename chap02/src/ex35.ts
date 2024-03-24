async function checkedFetch(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    if (!response.ok) {
        // 비동기 함수 내에서는 거절된 프로미스로 변환함
        throw new Error("Request Failed: " + response.status);
    }
    return response;
}