$(document).ready(function(){

    //door one: You have to place your jQuery Selector in THREE places
    //wherever you see `__`
    //You always want to be using a selector on the div with the class "perspective"
    $("perspective").flip({
        trigger: 'manual'
    });
    //insert selector below:
    $("front1").click(function(){
        //insert selector below:
        $("pug.jpg").flip(true);
        $("div.perspective").addClass("done");
        checkWin();
    });

    //door two: You have to place your jQuery Selector in THREE places
    //wherever you see `__`
    //You always want to be using a selector on the div with the class "perspective"

    $("perspective").flip({
        trigger: 'manual'
    })
    //insert selector below:
    $("icecream.jpg").click(function(){
        //insert selector below:
        $("icecream.jpg").flip(true);
        $("div.perspective").addClass("done")
        checkWin();
    });

    //door three: You have to place your jQuery Selector in THREE places
    //wherever you see `__`
    //You always want to be using a selector on the div with the class "perspective"

    $("perspeactive").flip({
        //insert selector below:
        trigger: 'manual'
    })
    $("fancy-car.jpg").click(function(){
        //insert selector below:
        $("fancy-car.jpg").flip(true);
        $("div.perspective").addClass("done");
        checkWin();
    });

    // IGNORE THIS:
    function checkWin() {
      if ($("div.perspective.done").length === $("div.perspective").length) {
        alert("YOU WON!!!");
      }
    }


});
