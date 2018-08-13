$(document).ready(function () {
    var startBox;
    var timerBox = 60;
    var question1;
    var question2;
    var question3;
    var question4;
    var question5;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    $(".formBox").hide();


    $("#startButton").on("click", function () {


        $(".formBox").show();

        function run() {

            setInterval(decrement, 1000);
        }

        function decrement() {

            //  Decrease number by one.
            timerBox--;

            //  Show the number countdown
            $("#counterBox").html("<h2>" + timerBox + "</h2>");

            //  Once number hits zero...
            if (timerBox === 0) {
                $("#counterBox").hide();
                $("#scoreCard").html("<div>Correct" + " " + correct + "</div>" +
                    "<div>Incorrect" + " " + incorrect + "</div>" +
                    "<div>Unanswered" + " " + unanswered + "</div>");
                $("#scoreCard").prepend("<div>Game Over!</div>" + "<br>");

            }
            /////Supposed to add correct and incorrect. For some reason it won't add them by 1. Adds like 3-6 each time an answer is selected
            ////Haven't found a solution for this code or a good replacement such as an array with objects that correctly stores the user answers
            $('input[name="test"]').on('click', function () {
                var right = $(this);
                if (right.val() == 'ans') {
                    console.log(correct++);
                }

            });
            $('input[name="test"]').on('click', function () {
                var nope = $(this);
                if (nope.val() == 'inc') {
                    console.log(incorrect++);
                }

            });

        };

        run();

    });



});