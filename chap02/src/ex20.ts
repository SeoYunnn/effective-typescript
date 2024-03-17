interface Person {
    name: string;
}

const p: Person = {name: 'Choon'};

type T3 = typeof p; // 타입은 Person
const v3 = typeof p; // 값은 'object'