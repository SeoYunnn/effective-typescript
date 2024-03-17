const pepole = ['choonsik', 'ryan', 'muji'].map(name => ({name}));
// Person [] 이 아닌 { name: string; }[] ...

// 타입 단언
const pepole2 = ['choonsik', 'ryan', 'muji'].map(name => ({name} as Person2));
// Person []

// const pepole3 = ['choonsik', 'ryan', 'muji'].map(name => ({} as Person2));
// 런타임 에러, Person []

// 타입 선언
// 화살표 함수가 Person을 반환할 것이라고 타입 선언
const pepole4 = ['choonsik', 'ryan', 'muji'].map((name): Person2 => ({name}));
// Person []