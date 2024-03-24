let obj2: { readonly [k: string]: number } = {};
// 또는 Readonly<{[k: string]: number}
// obj2.hi = 45;

// ... 형식의 인덱스 시그니처는 읽기만 허용됨
obj2 = {...obj2, hi: 12};
obj2 = {...obj2, bye: 34};