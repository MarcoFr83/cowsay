const itsMe = require("./information.js");
const cowsay = require("cowsay");


console.log(cowsay.say({
    text : "Salut c'est "+ itsMe.myName + " de la " + itsMe.myCampus  ,
    e : "oO",
    T : "U "
}));
