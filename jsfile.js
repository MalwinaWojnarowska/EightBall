//Create an array that contains a short list of predictions
var listOfpredictions = ["It is certain", " It is decidedly so", " Without a doubt", "Yes – definitely", "You may rely on it", " As I see it, yes", "Most likely", " Outlook good", "Yes", " Signs point to yes", " Reply hazy, try again", " Ask again later", " Better not tell you now", " Cannot predict now", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", " My sources say no.", " Outlook not so good.", "Very doubtful."];
   

//console.log(listOfpredictions.join());

//Write a formatted console statement that outputs the list using a loop
for (let i=0; i<listOfpredictions.length; i++) {
    console.log("%c" + listOfpredictions[i], "color: blue");
}  

//Write a formatted console statement that outputs a random item from the list

var varRandom = Math.floor(Math.random() * listOfpredictions.length);
console.log("%c" + listOfpredictions[varRandom], "color: pink; font-weight: bold");
//Write the random prediction out to the page when it loads
document.getElementById("element").innerHTML= listOfpredictions[varRandom];

//Add a button to the page and generate a random prediction when the button is clicked
function randomPredictions(){
    var varRandom = Math.floor(Math.random() * listOfpredictions.length);
    
    document.getElementById("element").innerHTML= listOfpredictions[varRandom];

}