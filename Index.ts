// 1. variable declaration ---------------------------------------//
const greetings: string = "hay mahadeb";
const myName = "mahadeb";

// 2. function --------------------------------------------------//
function myfunc(num1: number, num2: number): number {
  return num1 + num2;
}

// case 1
function myfunc2(pere1: number) {
  if (pere1 < 5) {
    return true;
  }
  return "please enter a number, greater then 5";
}

// case 2
const myfunc3 = (pere1: string): string => {
  return "";
};

// case 3
const heros = ["Hulk", "Spider man", "Iron man", "Ant man"];

heros.map((item): string => {
  return `my heros ${item}`;
});

// case 4
function consoleError(errMsg: string): void {
  console.log(errMsg);
}

// case 5
function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

// 3. Type aliases -------------------------------------------------//
type User = {
  name: string;
  address: string;
  age: number;
  isVoter: boolean;
};

function myfunc4(user: User): User {
  return { name: "", address: "", age: 12, isVoter: false };
}

myfunc4({ name: "", address: "", age: 18, isVoter: true });

// 4. readonly type and Optional ------------------------------------//
type User2 = {
  readonly _id: number; // you conn't update this value
  name: string;
  email: string;
  isActive?: boolean; // this field is optional
};

let myUser: User2 = {
  _id: 125,
  name: "Ram",
  email: "r@gmail.com",
};

// 5. combind type --------------------------------------------------//
type cardNumber = {
  cardNumber: number;
};

type cardHolder = {
  cardHolder: string;
};

type cardDetails = cardNumber &
  cardHolder & {
    cvv: number;
  };

// 6. Array --------------------------------------------------//
const myHeros: string[] = [];
const superPower: number[] = [];
const happiness: Array<number> = [];

type User3 = {
  readonly _id: string;
  name: string;
  isActive?: boolean;
};
const allUsers: User3[] = [];

const MLModels: number[][] = [[12, 52, 44], []]; // Array of number array

// union type in array
let myArray: string[] | number[] = [2, 5, 8];
const myArray2: (string | number)[] = [5, 8, "5", 2, "88"];

// 6. Union type ---------------------------------------------//
let score: string | number = 55;
score = "44";

let employee: User2 | User3 = {
  _id: 251,
  name: "Mahadeb",
  email: "m@gmail.com",
};

// 7. Literal type ------------------------------------------//
let pi: 3.14 = 3.14;
// pi = 3.145 ---> this is wrong

let thePerson: "Ram" | "Sham" | "Jadu";
thePerson = "Ram";

// 8. Tuple ------------------------------------------------//
let firstTuple: [number, string, boolean] = [22, "Mahadeb", true];
// firstTuple = [24, "Krishna", true, 52] ----> This is wrong

type UserTuple = [number, string];
let newUser: UserTuple = [52, "Yo"];
newUser.push("hi"); // ------->  this is a glitch

// 9. Enums (enumerated types) -----------------------------//

// case 1
enum NextSeries {
  AntMan,
  BlackPanther,
  Loki,
  KangDynasty,
}

const mySeries = NextSeries.AntMan;

// case 2
enum NextMeal {
  Breakfast = 8, // --------> By default it gets the value 0, but you can change it and the rest of the value will follow up.
  Lunch = "hiii", // --------> Or you can also add string value to this.
  Dinner = 5,
}

const MyMeal = NextMeal.Lunch;

// case 3
const enum NextBook { // ---------> This will not generate so many of JavaScript
  DoEpicShit = "Ankur Warikoo",
  GetEpicShitDone = "Ankur Warikoo",
  AtomicHabits = "James Clear",
}

const MyBook = NextBook.DoEpicShit;

// 10. Interface -----------------------------//
