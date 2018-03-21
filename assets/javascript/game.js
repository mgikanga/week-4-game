console.log("hey");
$(document).ready(function () {
    // my variables
    var wins = 0;
    var losses = 0;
    var myCounter = 0;
    var value;
    var min = 19;
    var max = 120;
    var theNumber;
    var button1;
    var button2;
    var button3;
    var button4;
    // generate the target number
    function numb() {
        theNumber = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(theNumber);
    }
    numb();
    $("#numb").text("Target: " + theNumber);

    // generate the random value of the gems
    var min = 1;
    var max = 12;
    button1 = Math.floor(Math.random() * (max - min + 1) + min);
    $("#gem1").val(button1);
    console.log(button1);
     button2 = Math.floor(Math.random() * (max - min + 1) + min);
     $("#gem2").val(button2);
    console.log(button2);
     button3 = Math.floor(Math.random() * (max - min + 1) + min);
     $("#gem3").val(button3);
     console.log(button3);
     button4= Math.floor(Math.random() * (max - min + 1) + min);
     $("#gem4").val(button4);
     console.log(button4);
    
    //on click add the numbers
    $(".gems").click(function () {
        myCounter += value;
        $("#yourscore").text("Total Score: " + myCounter);
        // compare the targer number and the counter
        if (myCounter === theNumber) {
            wins++;
            $("#winnig").text("Wins: " + wins);

        }
        // add up the value for every click
        //var totalScore += num1; 
        //console.log(value);
    });

    var reset = function () {
        var wins = 0;
        var losses = 0;
        var myCounter = 0;
    };

});