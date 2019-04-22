var myLoves = ["Flyfishing", "Skiing", "Soccer", "Running", "Mountains", "Trout", "Atomic Skis", "Snow", "Hiking", "Manchest United", "Bayern Munich", "Mini-Australian Shepherds"]
console.log(myLoves);
//create butttons that pull gif
//figure out how to make buttons out of a string.
$("buttons-view").empty();

function displayButtons () {
    for(var i = 0; i< myLoves.length; i++) {
        var btn = $("<button>");
        btn.addClass("favorites");
        btn.attr("data-name", myLoves[i]);
        btn.text(myLoves[i]);
        $("buttons-view").append(btn);
    }
    
}