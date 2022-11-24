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
var MLModels = [[12, 52, 44], []]; // Array of number array
// union type in array
var myArray = [2, 5, 8];
var myArray2 = [5, 8, "5", 2, "88"];
// 6. Union type ---------------------------------------------//
var score = 55;
score = "44";
var employee = {
    _id: 251,
    name: "Mahadeb",
    email: "m@gmail.com"
};
// 7. Literal type ------------------------------------------//
var pi = 3.14;
// pi = 3.145 ---> this is wrong
var thePerson;
thePerson = "Ram";
// 8. Tuple ------------------------------------------------//
var firstTuple = [22, "Mahadeb", true];
var newUser = [52, "Yo"];
newUser.push("hi"); // ------->  this is a glitch
// 9. Enums (enumerated types) -----------------------------//
// case 1
var NextSeries;
(function (NextSeries) {
    NextSeries[NextSeries["AntMan"] = 0] = "AntMan";
    NextSeries[NextSeries["BlackPanther"] = 1] = "BlackPanther";
    NextSeries[NextSeries["Loki"] = 2] = "Loki";
    NextSeries[NextSeries["KangDynasty"] = 3] = "KangDynasty";
})(NextSeries || (NextSeries = {}));
var mySeries = NextSeries.AntMan;
// case 2
var NextMeal;
(function (NextMeal) {
    NextMeal[NextMeal["Breakfast"] = 8] = "Breakfast";
    NextMeal["Lunch"] = "hiii";
    NextMeal[NextMeal["Dinner"] = 5] = "Dinner";
})(NextMeal || (NextMeal = {}));
var MyMeal = NextMeal.Lunch;
var MyBook = "Ankur Warikoo" /* NextBook.DoEpicShit */;
var myInterface = {
    _id: 1215,
    name: "Ram",
    role: "admin",
    email: "ram@ayodha.com",
    voterId: "UNU12545",
    googleId: "fg25",
    firstFunction: function () {
        return "Sri Ram";
    },
    secondFunction: function () {
        return "Hare Krishna";
    },
    thirdFunction: function (myArug) {
        return myArug.length;
    }
};
