// 1. variable declaration ---------------------------------------//
var greetings = "hay mahadeb";
var myName = "mahadeb";
// 2. function --------------------------------------------------//
function myfunc(num1, num2) {
    return num1 + num2;
}
// case 1
function myfunc2(pere1) {
    if (pere1 < 5) {
        return true;
    }
    return "please enter a number, greater then 5";
}
// case 2
var myfunc3 = function (pere1) {
    return "";
};
// case 3
var heros = ["Hulk", "Spider man", "Iron man", "Ant man"];
heros.map(function (item) {
    return "my heros ".concat(item);
});
// case 4
function consoleError(errMsg) {
    console.log(errMsg);
}
// case 5
function handleError(errMsg) {
    throw new Error(errMsg);
}
function myfunc4(user) {
    return { name: "", address: "", age: 12, isVoter: false };
}
myfunc4({ name: "", address: "", age: 18, isVoter: true });
var myUser = {
    _id: 125,
    name: "Ram",
    email: "r@gmail.com"
};
// 6. Array --------------------------------------------------//
var myHeros = [];
var superPower = [];
var happiness = [];
var allUsers = [];
var MLModels = [[12, 52, 44], []];
// 6. Union type ---------------------------------------------//
var score = 55;
score = "44";
var employee = {
    _id: 251,
    name: "Mahadeb",
    email: "m@gmail.com"
};
