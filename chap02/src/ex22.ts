type Person3 = {
    name: string;
    description: string;
}

const Choonsik2 = {
    name: "Choonsik",
    description: "Hi, My name is Choonsik. Nice to meet U",
};

const me: Person3["name"] = Choonsik2["name"];
// const me2: Person3.name = Choonsik2["name"]; // Error
