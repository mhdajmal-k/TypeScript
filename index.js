//infer types
// let userName="ajmal"
// userName="muhammed"
// let su=30_33
// su='hf'  //we get error default
//define types(explicit types)
var userName = "muhammed";
var userNameAge = 1;
var userSkill = ["html", "css"];
var pass = true;
var mark = [1, 2, 3];
var userDetails = {
    name: "muhammed ajmal",
    age: 22,
    salary: 5000,
};
// console.log(userDetails);
userDetails.age = 20;
var adminDetails = {
    age: 20,
    name: "ajmal",
    salary: 5000,
    getName: function () {
        console.log("my name is ".concat(this.name, " age ").concat(this.age));
    },
};
var adminDetails2 = {
    age: 20,
    name: "ajmal",
    salary: 5000,
    getName: function () {
        console.log("my name is ".concat(this.name, " age ").concat(this.age));
    },
};
var unionExa = {
    name: "ajmal",
    age: "55", //example multiple type
    pass: true,
    skill: ["html", "css", 5],
};
//function
//for object  //set return type
function getUserName(adminDetails) {
    return adminDetails.name;
}
var newValue = getUserName(adminDetails);
// we get methods on that type only newValue
//not object
function getName(_a) {
    var name = _a.name, age = _a.age;
    return name;
}
getName({ name: "ajmal", age: 22 });
var currStatus = "pending";
var Toggle = "on";
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
// add([])
//generic(<>, simple avoid function overLoad )
function getAge(age) {
    return age;
}
getAge("20");
getAge([20]);
function getDetails(details) {
    return details;
}
var adminData = getDetails(adminDetails2);
var admin2Data = getDetails(adminDetails);
var adminDetailRol = {
    age: 5,
    name: "ajmal",
    role: "developer",
    salary: 50000,
};
//enums
//const enums
var Status;
(function (Status) {
    Status[Status["PENDING"] = 0] = "PENDING";
    Status[Status["COMPLETED"] = 1] = "COMPLETED";
    Status[Status["FILED"] = 2] = "FILED";
})(Status || (Status = {}));
function getStatus(status) {
    console.log(status);
}
getStatus(Status.FILED);
//as const
var ajmal = "muhammed ajmal";
// ajmal='aj'
//type of instead of the enums
var statusTypes = {
    PENDING: "pending",
    COMPLETED: "completed",
    FAILED: "failed",
};
function getStatusType(orderId, status) {
    console.log("".concat(orderId, ", ").concat(statusTypes[status]));
}
getStatusType("2222", "FAILED");
