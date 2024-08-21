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
  getName?: () => void;
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
type StatusType = "pending" | "success" | "failed";
type ToggleStatus = "on" | "off";

let currStatus: StatusType = "pending";
let Toggle: ToggleStatus = "on";

//function overLoad (we want to set type for multiple types)
//write multiple function
function add(num1: number, num2: number): number;
function add(num1: string, num2: string): string;
function add(num1: any, num2: any): any {
  return num1 + num2;
}

add(2, 2);
// add([])

//generic(<>, simple avoid function overLoad )

function getAge<T>(age: T): T {
  return age;
}
getAge<string>("20");
getAge([20]);

function getDetails<T>(details: T): T {
  return details;
}
const adminData = getDetails<Details2>(adminDetails2);
const admin2Data = getDetails<Details>(adminDetails);
//in here the generic is pulling in the function invocation time

//we want to adminDetail in userDetail we can merge

//type

type AdminDetails = Details & {
  role: string;
};

//interface

interface AdminDetail extends Details {
  role: string;
}

const adminDetailRol: AdminDetails = {
  age: 5,
  name: "ajmal",
  role: "developer",
  salary: 50000,
};

//enums

//const enums

enum Status {
  PENDING,
  COMPLETED,
  FILED,
}

function getStatus(status: Status) {
  console.log(status);
}

getStatus(Status.FILED);

//as const

let ajmal = "muhammed ajmal" as const;
// ajmal='aj'

//type of instead of the enums

const statusTypes = {
  PENDING: "pending",
  COMPLETED: "completed",
  FAILED: "failed",
} as const;

function getStatusType(orderId: string, status: keyof typeof statusTypes) {
  console.log(`${orderId}, ${statusTypes[status]}`);
}

getStatusType("2222", "FAILED");

//utility Type//read only

type Users = {
  readonly name: string;
  readonly age?: number | string;
};

const userData: Users = {
  name: "ajmal",
};

// userData.age=40

//for readonly for full property
const UserData: Readonly<Users> = {
  name: "ajmal",
  age: 20,
};

//partial for union we user generic like the readOnly

// const UserData:Partial<Users>={
//   name:"ajmal",
//   age:20
// }

//Required

// const  UserData:Required<Users>={
//   name:"ajmal",
//   age:20
// }

//Pick we only we that one params

const users: Pick<Users, "name"> = {
  name: "ajmal",
};

//omit deSelect

const users1: Omit<Users, "name"> = {
  age: "ajmal",
};

//Exclude in union type

//Record to dynamic
type food = Record<string, number | string>;

const foodData: food = {
  kfc: "hi",
  pizza: 50,
};

// any//Unknown

let username: unknown = "ajmal";
const use = username as string;
use.charAt(2);

//never/void

//nothing return
function throwMessage(message: string): never {
  throw new Error("message");
}
function logMessage(message: string): void {
  // throw new Error("message");
  console.log(message);
}
