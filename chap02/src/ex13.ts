getKey({}, "x");
getKey({}, Math.random() < 0.5 ? "a" : "b");
getKey({}, document.title);
// getKey({}, 12);
// TS2345: Argument of type number is not assignable to parameter of type string