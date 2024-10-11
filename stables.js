let horseName = "PinkleDinkyFam";
console.log(horseName);

let horseAge = "80082";
console.log(horseAge);

let isHorseInside = true;
console.log(isHorseInside);

// LESSON-4 Code
console.log(typeof 80082);
const STABLE_MONTHLY_FEE = 1492;
console.log(STABLE_MONTHLY_FEE);

console.log(STABLE_MONTHLY_FEE * 3);
console.log(STABLE_MONTHLY_FEE + 100);
console.log(20/2);
console.log("Bob" + " Ross");
console.log(2 + "high") // type coercion
console.log("The fee for stable is " + STABLE_MONTHLY_FEE);
console.log(`This is ${horseName} and he is a silly lil fella. It costs ${STABLE_MONTHLY_FEE} to board him.`);

//Lab 4 work

let horseNickname = "PDF";
console.log(horseNickname);
console.log(`This is ${horseNickname} and this is his silly nickname. He likes our specific stable, which costs ${STABLE_MONTHLY_FEE}`);
console.log(`If you stay with us for three months,${((STABLE_MONTHLY_FEE * 3 *.1))} will be deducted from your total costs.`);

//Lesson 5 Code
if (isHorseInside === true) {
    console.log(horseName + "is in his stable")
} else {
    console.log(horseNickname + "is outside of his stable")
}

//Lesson 6 CODE
// Horse =["name", age, isInside, "nickname"]
let word = "Bobby"
console.log(word.charAt(0))
let horseNames = [horseName, "Bonk", "Boopity"];
let horseAges = [horseAge, 20, 6];
let horseLocations = [isHorseInside, false, true];
console.log(horseNames.length);
console.log(horseNames)
horseNames.push("Binket");
console.log(horseNames);
console.log(horseNames.length);
console.log(horseLocations[2]);
console.log("Welome to my stables! There are " + horseNames.length + " horses staying here! Their names are " + 
    horseNames[0] + "," + horseNames[1] + "," + horseNames[2] + " and " + horseNames[3] +"!!!");
//console.log(horseAges[0])
//console.log(horseLocations[2])

console.log(horseAges[2] + horseAges[1])
if (horseNames[0] === "PinkleDinkyFam") {
    console.log("hi PinkleDinkyFam");
}
if (horseNames[1] === "Bonk") {
    console.log("hi Bonk");
}
if (horseNames[2] === "Boopity") {
    console.log("hi Boopity");
}
if (horseNames[3] === "Binket") {
    console.log("hi Binket");
}

if (horseNames.length < 5) {
    console.log("These stables are the bomb");
}

if (horseLocations[0]){
    console.log(horseNames[0] + "," + horseNames[1] + "," + horseNames[2] + " and " + horseNames[3] + 
        " are chilling in our indoor cool place")
} else{
    console.log(horseNames[0] + "," + horseNames[1] + "," + horseNames[2] + " and " + horseNames[3] + 
    " are not having the best time rn so they be outside in the rain");
}