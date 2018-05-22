
var random_result;
var lost = 0;
var win = 0;
var previous = 0; //undefined

var resetAndStart = function () {

$(".crystals").empty();

var images = [
    'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642',
     'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fossilera.com%2Fsp%2F121090%2Famethyst-geodes%2Fquartz-var-amethyst.jpg&f=1',
      'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fsensualanimist.files.wordpress.com%2F2012%2F03%2Fquartz-crystal-cluster.jpg&f=1',
       'https://www.rd.com/wp-content/uploads/2017/08/12_crystal_Reasons-Why-You-Should-Give-Crystals-a-Try_364248173_Abra-Cadabraaa-380x254.jpg'
    ];


random_result = Math.floor(Math.random() * 69 ) + 30; 

$("#result").html('Random Result: ' + random_result);

for(var i=0; i < 4; i++){

    var random = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<div>");
        crystal.attr({
            "class":'crystal',
            "data-random": random
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        });

    $(".crystals").append(crystal);
    
    }

    $("#previous").html("Total Score: " + previous);

}



resetAndStart();

$(document).on('click', ".crystal",function () {

          var num = parseInt($(this).attr('data-random'));

          previous += num;

          $("#previous").html("Total Score: " + previous);

          console.log(previous);

          if( previous > random_result) {
                lost++;

                $("#lost").html("You lost: " + lost);

                previous = 0;

                resetAndStart();
          }
          else if (previous === random_result) {
                win++;
                
                $("#lost").html("You win: " + win);

                previous = 0;

                resetAndStart ();
          }


          

});
//Pseudo Coding 
// a game with 4 crystals + random result
// every crystal needs to have a random number between 1-12
// a new random number should be generated every single time we win or lose
// to the 4 crystals
// When clicking any crystal, it should be adding with the previous result until 
// it hits the total score