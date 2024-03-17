let userInput: unknown;
let userName: string;

userInput = 3;
// userName = userInput; // 오류 발생: 'unknown' 타입은 'string' 타입에 할당할 수 없음

if (typeof userInput === 'string') {
    userName = userInput; // 이제 TypeScript는 'userInput'이 'string' 타입임을 알고 있음
}