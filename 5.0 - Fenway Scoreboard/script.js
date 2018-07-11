$(document).ready(function(){

    $("#a_pitch_sub").click(function(){

        var value = document.getElementById('a_pitch_num_box').value;
        
        $(".a_pitch_num").text(value);

});

    $("#away_team_button").click(function(){

        var value = document.getElementById('teams').value;
        $(".away_team_name").text(value);

});

    $(".inc").click(function(){

        var text = $(this).text();
        var num = parseInt(text)
        
        if (num < 9){

            num++;
            $(this).text(num);

        }
        
        else if (num >= 9){

            var num = 0;
            $(this).text(num);
        }
    })//end inc


});//end document ready