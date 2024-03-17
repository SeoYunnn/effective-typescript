interface Person2 {
    name: string;
}

interface PersonSpan2 extends Person2 {
    birth: Date;
    death?: Date;
}


const Ryan: PersonSpan2 = {
    name: "Ryan",
    birth: new Date(2002,9,26),
}