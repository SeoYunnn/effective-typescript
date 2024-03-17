const triple: [number, number, number] = [1, 2, 3];
// const double: [number, number] = triple;
// TS2322: Type [number, number, number] is not assignable to type [number, number]
// Source has 3 element(s) but target allows only 2

const triple2: [number, number, number] = [1, 2, 3];
const double2: [number, number] = [triple2[0], triple2[1]]; // 요소를 줄임