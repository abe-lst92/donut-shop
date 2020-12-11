// //one way
// var numbers = [9, 10, 11 ,12];
// console.log(numbers);
// //second way
// var strings = new Array("lime", "orange", "pears", "peaches");
// console.log(strings);
// //booleans 
// var booleans = new Array()
// booleans[0] = 9<10;
// booleans[1] = 11===11.5;
// booleans[2] = 12>8;
// booleans[3]= "Abraham"==="abraham";
// console.log(booleans);

// var mates = new Array()
// mates[0] = "Marvin" 
// mates[1] = "Syed" 
// mates[2] = "Kevin" 
// mates[3] = "Sheily" 
// mates[4] = "Ngoc" 
// mates[5] = "Destynee"
// mates[6] = "April"  
// console.log(mate)


//1
var donuts = new Array("Glazed", "Chocolate", "Pecan", "Cocunut", "Jelly", "Blueberry", "cinnamon");
//2
donuts.shift();
//3
donuts.pop();
//4

donuts.unshift("Lime zest");
//5
donuts.splice(6, 0, "lemon pie");

//number 6
var donut = ["Glazed", "Chocolate", "Pecan", "Cocunut", "Jelly", "Blueberry", "cinnamon"];
console.log(donuts.toString());
// 8
console.log(donuts.indexOf("Chocolate"));
//9
console.log(donuts.indexOf("Glazed"));
//10
donuts.splice(5, 1, "frost");
//11
var withDonut = ["people"] + "Bob";
console.log(withDonut);
//12
console.log(donuts.reverse());
//13
function getDonuts(){
    document.getElementById("Text").innerHTML = donuts;
}
getDonuts();


for (i=0; i<donuts.length; i++) {
    console.log(donuts[i]);
    }


    //7
    var copyDonuts = new Array("Glazed", "Chocolate", "Pecan", "Cocunut", "Jelly", "Blueberry", "cinnamon");
copyDonuts.splice(5, 2);
// for (i=0; i<copyDonuts.length; i++) {
//     console.log(copyDonuts[i]);
//     }
 console.log(copyDonuts);
       

