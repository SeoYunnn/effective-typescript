type Pick2<T, K extends keyof T> = {
    [k in K]: T[k]
    // ~ "K" 타입은 "string | number | symbol" 타입에 할당할 수 없음
}