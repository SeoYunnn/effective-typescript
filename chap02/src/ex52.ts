type FirstLast = Pick2<Name, "first" | "last">; // 정상
// type FirstMiddle = Pick2<Name, "first" | "middle">;
// TS2344: Type "first" | "middle" does not satisfy the constraint keyof Name
// Type "middle" is not assignable to type keyof Name