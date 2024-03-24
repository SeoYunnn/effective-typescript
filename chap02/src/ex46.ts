interface Person5 {
    firstName: string;
    lastName: string;
}

interface PersonWithBirthDate extends Person5 {
    birth: Date;
}