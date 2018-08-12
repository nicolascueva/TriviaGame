$(document).ready(function () {
    var startBox;
    var timerBox = 25;
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

        //$("#counterBox").html("<div>Countdown Box</div>");
        // $("#questionBox").append("<p>question 1</p> <p>question 2</p>");
        $(".formBox").show();

        function run() {

            setInterval(decrement, 1000);
        }

        function decrement() {

            //  Decrease number by one.
            timerBox--;

            //  Show the number in the #show-number tag.
            $("#counterBox").html("<h2>" + timerBox + "</h2>");

            //  Once number hits zero...
            if (timerBox === 0) {
                $("#counterBox").hide();
                $("#scoreCard").html("<div>Correct" + " " + correct + "</div>" +
                    "<div>Incorrect" + " " + incorrect + "</div>" +
                    "<div>Unanswered" + " " + unanswered + "</div>");

            }


            var userCorrect = ".rightAnswer";
            $(".rightAnswer").on("click", function () {
                console.log(correct++);
            })
        }
        run();





    });


















});