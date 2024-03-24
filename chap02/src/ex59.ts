interface Outer {
    inner: {
        x: number;
    }
}

const o: Readonly<Outer> = {inner: {x: 0}};
// o.inner = {x: 1};
    // 읽기 전용이기 때문에 inner 에 할당할 수 없음
o.inner.x = 1; // 정상