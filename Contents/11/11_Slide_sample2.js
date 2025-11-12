let str1 = "100"; //String
let num1 = 200; //Number
console.log(str1 + num1);

let str2 = "100"; //String
let num2 = 200; //Number
str2 = Number(str2); //From String to Number
console.log(str2 + num2);

// Array
let fruits = ["Apple", "Banana", "Grape", "Orange", "Peach", "Mango", "Melon", "Kiwi", "Pineapple", "Strawberry", "Blueberry", "Raspberry", "Watermelon", "Lemon", "Lime", "Cherry", "Papaya", "Coconut", "Fig", "Pomegranate", "Date", "Persimmon", "Tangerine", "Cranberry", "Guava", "Jackfruit", "Durian", "Starfruit", "Dragonfruit", "Passionfruit", "Cantaloupe", "Honeydew", "Nectarine", "Apricot", "Currant", "Elderberry", "Gooseberry", "Mulberry", "Olive", "Quince", "Rambutan", "Salak", "Soursop", "Tamarind", "Ugli fruit", "Yuzu", "Ziziphus", "Ackee", "Breadfruit", "Clementine", "Damson", "Feijoa", "Huckleberry", "Jujube", "Kumquat", "Longan", "Medlar", "Nashi", "Physalis", "Salmonberry", "Saskatoon berry", "Serviceberry", "Sloe", "Surinam cherry", "White currant", "White sapote", "Youngberry", "Zinfandel grape", "Barberry", "Bilberry", "Cloudberry", "Crowberry", "Elderflower", "Hackberry", "Jabuticaba", "Langsat", "Loquat", "Mamoncillo", "Marionberry", "Miracle fruit", "Monstera deliciosa", "Pepino", "Pitaya", "Santol", "Sapodilla", "Saskatoon berry", "Sea buckthorn", "Sugar apple", "Wampee", "White mulberry", "Wild strawberry", "Yumberry", "Zabergau Reinette", "African cucumber", "Buddha's hand", "Calamansi", "Finger lime", "Gac", "Ice cream bean", "Kaffir lime", "Madrono", "Mammee apple", "Marang", "Naranjilla", "Pepper fruit", "Riberry", "Santol", "Velvet apple"];
var sum = 0;

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
    sum += 1;
}

// Object
let person = {name:"Takei", age:50};
console.log(person.name, person.age);

