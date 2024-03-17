interface Person {
    name: string;
}

interface Lifespan {
    birth: Date;
    death?: Date;
}

type PersonSpan = Person & Lifespan;

const choonsik: PersonSpan = {
    name: "Choonsik",
    birth: new Date(2002, 9, 26),
    // death: new Date(2100, 11 ,32)
}

console.log(choonsik);