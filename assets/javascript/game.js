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
    function value1() {
        button1 = Math.floor(Math.random() * (max - min + 1) + min);
        $("#gem1").val(button1);
        console.log(button1);
    }
    value1();
    function value2() {
        button2 = Math.floor(Math.random() * (max - min + 1) + min);
        $("#gem2").val(button2);
        console.log(button2);
    }
    value2();
    function value3() {
        button3 = Math.floor(Math.random() * (max - min + 1) + min);
        $("#gem3").val(button3);
        console.log(button3);
    }
    value3();
    function value4() {
        button4 = Math.floor(Math.random() * (max - min + 1) + min);
        $("#gem4").val(button4);
        console.log(button4);
    }
    value4();
    //on click add the numbers
    // add up the value for every click
    $(".gems").click(function () {
        var value = Number($(this).val());
        myCounter += value;
        $("#yourscore").text("Total Score: " + myCounter);
        console.log("this is the count" + myCounter);

        // compare the targer number and the counter
        // when the user gets the target number
        if (myCounter === theNumber) {
            wins++;
            $("#winning").text("Wins: " + wins);
            reset();
        }
        // when user goes above the target value
        if (myCounter > theNumber) {
            losses++;
            $("#losing").text("Loss: " + losses);
            reset();
            console.log(theNumber);
        }
    });

      function  reset () {
        numb();
        value1();
        value2();
        value3();
        value4();
        var myCounter = 0;
    };

});