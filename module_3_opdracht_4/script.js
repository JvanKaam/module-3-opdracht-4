const age = 25;
const isFemale = false;
const driverStatus = "bob";
const name = "Bram";
const totalAmount = 100;


if (age > 17) {
    console.log("mag naar binnen");
} else {
    console.log("toegang geweigerd");
}


if (isFemale) {
    console.log("mag naar binnen");
} else {
    console.log("begone thot");
}


if (driverStatus == "bob") {
    console.log("fijne reis");
} else {
    console.log("imma call a cab");
}


if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("jammer dan");
}

if (name == "Sarah" || name == "Bram") {
    console.log("Je krijgt een gratis biertje!");
} else {
    console.log("sucks to be you");
}

if (totalAmount >= 100) {
    console.log("Je krijgt een gratis fles champagne");
} else if (totalAmount >= 50) {
    console.log("Je krijgt een gratis portie nachos");
} else if (totalAmount >= 25) {
    console.log("Je krijgt gratis (vega)bitterballen");
} else {
    console.log("meer uitgeven jij");
}



