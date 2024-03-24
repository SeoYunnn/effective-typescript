interface Room {
    numDoors: number;
    ceilingHeightFt: number;
}

const r: Room = {
    numDoors: 1,
    ceilingHeightFt: 10,
    // elephant: "present",
    // 개체 리터럴은 알려진 속성만 지정할 수 있으며
    // Room 형식에 elephant 가 없음
}