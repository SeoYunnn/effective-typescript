/* String
function isGreeting(phrase: String) {
    return [
        "hello",
        "good day"
    ].includes(phrase);
    // String 형식의 인수는 string 형식의 매개변수에 할당 불가
    // string 은 기본 개체이지만, String 은 래퍼 객체
    // 가능한 경우 string 을 사용
}
*/

function isGreeting(phrase: string) {
    return [
        "hello",
        "good day"
    ].includes(phrase);
}