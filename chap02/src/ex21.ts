class Cylinder2 {
    radius = 1;
    height = 1;
}

const v4 = typeof Cylinder2; // 값이 function
type T4 = typeof Cylinder2; // 타입이 class Cylinder, 즉 생성자 함수

declare let fn: T4;
const c = new fn(); // 타입이 Cylinder

type C = InstanceType<typeof Cylinder2>; // 타입이 Cylinder

console.log(v4); // function 출력