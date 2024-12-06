//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkkkkkkkkkkkOOOOOOOOOOOOxxOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO//
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkkkkkkkkkkOkOOOOOOOOOOO0k;'lkOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO//
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkkkkkkkkkkkkOOOOOOOOOOOOO0OOx;.,ckOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO//
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxkkkkkkkkkkkkOOkOkxkOOOOOOOOOO00Ol'..,lO00OOOO00OOOOOOOOOOOOOOOOOOOOOOOOO//
//xxxxxxxxxxxxxxxxxxxxxxxxkkkkkkkkkkkkkkOOOOOOo;lkOOOOO00OO00d,....:k00000000SecretMessageHere00000000//
//xxxxxxxxxxxxxxxxxxxxxxxkkkkkkkkkkkkkOOOOOOOx:,;lxO00O000O00x;'...;x000000HiFolksItisI,Bonk0000000000//
//xxxxxPinkleDinkyFamkkkkkkkkkkkkkkkkOOOOOOOOd;'.,cdxdolodxxkx:....cO000000000000000000000000000000000//
//xxxxBinketxxxxxxxkkkkkkkkkkkkkkkkkOOOOOOOOOl'......   ..',''. ..'d0000000000000000000000000000000000//
//xxxxDingusxxxkkkkkkkkkkkkkkkkkkkkkOOOOOOOkkc.        ..',;;,,''';dO000000000000000000000000000000000//
//xxxxBonkxxxkkkkkkkkkkkkkkkkkkkkkkOOOOOOOOxo;..........';::::::::;lk000000000000000000000000000000000//
//xxxxxxxkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOOOko:'''''.''',;:::;,'..,clok000000000000000000000000000000000//
//xxxxxkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOO00Oxl;'.......',;;;;;,....,odddxO0000000000000000000000000000000//
//xxxkkkkkkkkkkkkkkkOOOOOOOOOOOOOOOOO00Oo;'...........',;;;::;;lxkkxo:lkO00000000000000000000000000000//
//xkkkkkkkkkkkkkOOOOOOOOOOOOOOOOOO0Okoc;...',,.........',,,',cdxxxxxl,,:ccok0K000K00000000000000000000//
//kkkkkkkkkkkkOOOOOOOOOOOOOOOOOO0Oxc'.......,;;,',,,'''''...';clodxko'.;:;'':d000K00000000000000000000//
//kkkkkkkkkkOOOOOOOOOOOOOOO0O00Oxc,..,,;,,,,;::cccl:;;,,.. .':loddxkx,.';::;''cxO000000000000000000000//
//kkkkkkkkOOOOOOOOOOO00000000Oxl;,,,,;codl:;codddooc;;,'...,lodoodxkk:...;clc;;:ldk00K0000000000000000//
//kkkkkkOOOOOOOOOO0000000Okxoc::::::,:ldxdodxkOkdllooc,....;clllodxkkc. ..:ooc:;:cldk00000000000000000//
//kkkkkOOOOOOO0000000000xlc;,;cll::,..'cdxkkOOxl::cool,'....,:cloxxkko,...'clllc;'';cloxkO000000000000//
//kkkOOOOOOOO0000000000d;',,,;clc,.. ...,okOkxollc:;;;'':c;'';:coxxkkxc'...';cclc;'..';::ldkO000000000//
//OOOOOOOOOOO000000000Oo;,''',cc,'.......:xOkxddl;',,,;coxxl,,,:lddxxko,....';cll::;...''',;ldxO000000//
//OOOOOOOOOO0000000000kl;,'..'::'.   ...'ckkkxxxdlc:clodxkOd;,,:lodxxkd,.....,;clc:;'.........,;clodkO//
//OOOOOOOO000000000000dc;,'',,,,........:xOkkkkkkxxdxxxxkkko;',,:ldxkOd,.....',;:cc;.....  ........',;//
//OOOOOO0000000000000Oo:,'',;:;',;,,'..;oxdxxxkOOOOkxxxxxkd;'',,:ldkOOl'......',;;;,''.... .   .......//
//OOOO0000000000000000d:;,,:ccc;:;,'.,:lcc:coxxOOkddddxxdc'....';lxk0k;.......';;,'.'''...............//
//O0000000000000000000Olcccccccc:;;',cc,,,;lxdlxxlccccc:'.     .'cddd;..'''..',;;'....'''.........''..//
//000000000000000000000Odlcc::cc,.,:,,;',:coxdkxoollclo:'.......':l:.....',,',;;,.................''..//
//00000000000000000K0000k:;:;,,'. .,,...,;;:codddooooodxxxkOkxxxkOOx:.   ..,,;;;,..........'..........//
//00000000000000000000000x:,''......... ..,'';ldxkkOOO00KK00000000K00x:.   ..,;::,.........'......... //
//000000000000000000000000Oo;.....      ..,;lk0000000000000000000000000x;.  ...,;;,.................  //
//00000000000000000000000000kl,'...... ..,lxO000000000000000000000000K00Od,. ...';;,......''''........//
//0000000000000000000000000000Okxoc;;;:cdkO0000000000000000000000000000000Oo,. ...',''....''''..... ..//
//00000000000000000000000000000000000000000000000000000000000000000000000000Ol'. ..''''....'''....   .//
//0000000000000000000000000000000000000000000000000000000000000000000000000000x,. ...''......''...   .//

//------------------------- Seting up shop -------------------------//
let horses = [];
let welcomeMessage = "Hello fellow horse enjoyers";
let latePay = 420;
let emptyStalls = 8;

//------------------------- First day -------------------------//

function Horse (name, nickname, age, favoriteSnack, isInside, sillyFeature, appearenceFeature,) {
        this.name = name;
        this.nickname = nickname;
        this.age = age;
        this.favoriteSnack = favoriteSnack;
        this.isInside = isInside;
        this.sillyFeature = sillyFeature;
        this.appearenceFeature = appearenceFeature;
        this.monthlyRent = 1492;
        this.lateFee = 420;
        this.intro = function intro() {
            console.log (
                `This silly lil fella is named ${this.name} and they are ${this.age} years old. 
                They ${this.sillyFeature} and they are ${this.appearenceFeature}`
            );
        };
        this.drunkActivities = function () {
            console.log `${this.name} likes to be ${appearenceFeature} while drunk!`;
          };
        }

//------------------------- First day -------------------------//
const Horse1 = new Horse("PinkleDinkyFam", "PDF", 80082, "Windex", true, "walks on two legs", "bald");
const Horse2 = new Horse("Binket", "Bink", 90, "Tylenol", true, "can juggle three balls", "wearing sunglasses");
const Horse3 = new Horse("Bonk", "Bok", 20, "Tide", true, "can cook better than Gordon Ramsay", "wearing a chef hat");


horses.push(Horse1)
horses.push(Horse2)
horses.push(Horse3)

let Horse4 = {
    name: "Dingus",
    nickname: "Ding",
    age: 29,
    favoriteSnack: "Pickles",
    isInside: false,
    monthlyRent: 1492,
    lateFee: 420,
    sillyFeature: "acting like a beyblade",
    appearenceFeature: "wearing a tuxedo",
    introduce: function () {
      console.log `This silly lil fella is named ${this.name} and they are ${this.age} years old. 
      They ${this.sillyFeature} and they are ${this.appearenceFeature}`;
    },
    drunkActivities: function () {
        console.log `${this.name} likes to be ${appearenceFeature} while drunk!`;
    },
  };
  horses.push(Horse4);





function horseHangry(whenHorseHangry){
  whenHorseHangry.isHorseHangry = true;
  Horse1.isHorseHangry = false;
  Horse2.isHorseHangry = true;
  Horse3.isHorseHangry = true;
}

horses.map(horseHangry); //
//------------------------- Stable roster -------------------------//
console.log (horses);
//---------------------- Growing business ----------------------//

emptyStalls -= horses.length;

if (emptyStalls < 2) {
  console.log("We need to build more stalls!");
} else {
  console.log(`We have ${emptyStalls} available!`);
}

function calculateLatePay(rent) {
  return rent + latePay;
}


console.log(`Late payment fee for Dingus: $${calculateLatePay(horses[0].monthlyRent)}`);

let cravingFood = "Pickles";
for (let horse of horses) {
  if (horse.favoriteSnack === cravingFood) {
    console.log(`${horse.name} loves to eat ${cravingFood}!`);
    break;
  } else {
    console.log(`${horse.name} does not want ${cravingFood}.`);
  }
}

function findHorseNickname(horseName) {
  for (let horse of horses) {
    if (horse.name === horseName) {
      return horse.nickname;
    }
  }
  return "Horse not found.";
}
console.log(findHorseNickname("PinkleDinkyFam"));

//------------------------- Day to day operations -------------------------//


function checkHorseTalent(horseTalent) {
  for (let horse of horses) {
    if (horse.name === horseTalent) {
      if (horse.sillyFeature === "can juggle three balls") {
        console.log(`${horse.name} is the best at juggling balls!`);
      } else {
        console.log(`${horse.name} not a fan of juggling balls.`);
      }
    }
  }
}
checkHorseTalent("Binket");
checkHorseTalent("Dingus");

function moveHorsesOutside() {
  for (let horse of horses) {
    horse.isInside = false;
  }
  console.log("All the silly lil horses went outside to enjoy the sun.");
}
moveHorsesOutside();

for (let horse of horses) {
  horse.changeLocation = function () {
    this.isInside = !this.isInside;
    console.log(`${this.name} went ${this.isInside ? "inside" : "outside"}.`);
  };
}

function feedHorses() {
  for (let horse of horses) {
    if (!horse.location) {
      horse.changeLocation();
    }
    horseHangry = true;
    console.log(`${horse.name} has been fed their favorite snack: ${horse.favoriteSnack}.`);
  }
}
feedHorses();



function manageHorses(isDark) {
  for (let horse of horses) {
    if (isDark && !horse.isInside) {
      horse.changeLocation("outside");
      console.log(`${horse.name} has gone out to enjoy the day before nightfall.`);
    } else if (!isDark && horse.isInside) {
      horse.changeLocation("inside");
      console.log(`${horse.name} has gone inside because it is time for bed.`);
    }
  }
}
manageHorses();
