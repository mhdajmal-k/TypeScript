//infer types

// let userName="ajmal"
// userName="muhammed"

// let su=30_33

// su='hf'  //we get error default

//define types(explicit types)

let userName: string = "muhammed";
let userNameAge: number = 1;
let userSkill: string[] = ["html", "css"];
let pass: boolean = true;
let mark: number[] = [1, 2, 3];

let userDetails: { name: string; age: number; salary: number } = {
  name: "muhammed ajmal",
  age: 22,
  salary: 5000,
};
// console.log(userDetails);
userDetails.age = 20;

// interface  we can use preFixed types entire object like we can avoid repeating codes

interface Details {
  name: string;
  age: number;
  salary: number;
  getName: () => void;
}

let adminDetails: Details = {
  age: 20,
  name: "ajmal",
  salary: 5000,
  getName() {
    console.log(`my name is ${this.name} age ${this.age}`);
  },
};

// Type same as details

type Details2 = {
  name: string;
  age: number;
  salary: number;
  getName?: () => void;
};
let adminDetails2: Details2 = {
  age: 20,
  name: "ajmal",
  salary: 5000,
  getName() {
    console.log(`my name is ${this.name} age ${this.age}`);
  },
};

//union we want number or string we use (in js||) but in ts(|)
//option  assign it only for the option use ?
interface UnionExamples {
  name: string;
  age: number | string;
  pass: boolean;
  skill: (string | number)[];
  getName?: () => void;
}

let unionExa: UnionExamples = {
  name: "ajmal",
  age: "55", //example multiple type
  pass: true,
  skill: ["html", "css", 5],
};

//function

//for object  //set return type
function getUserName(adminDetails: Details): string {
  return adminDetails.name;
}

const newValue = getUserName(adminDetails);
// we get methods on that type only newValue

//not object

function getName({ name, age }: { name: string; age: number }) {
  return name;
}
getName({ name: "ajmal", age: 22 });

//if we return nothing we use void

//named Types (we can create our own types)
//interface we have to use object must (object)
type Status = "pending" | "success" | "failed";
type ToggleStatus = "on" | "off";

let currStatus: Status = "pending";
let Toggle: ToggleStatus = "on";
