function getKey<K extends string>(val: any, key: K) {
    return val[key];
}

const Choonsik = {
    name: "Choonsik",
    age: 23,
    city: "DaeJeon",
}

console.log(getKey(Choonsik, "name")); // Choonsik
console.log(getKey(Choonsik, "age")); // 23
console.log(getKey(Choonsik, "city")); // DaeJeon