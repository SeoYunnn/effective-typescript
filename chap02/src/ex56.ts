function printTriangles(n: number) {
    const nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(i);
        console.log(arraySum(nums));
    }
}

printTriangles(5);

function arraySum(arr: readonly number[]) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}