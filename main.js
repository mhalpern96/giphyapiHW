//set topics
$(document).ready(function(){
var topics = ["Falcon 9","Atlas 5", "H2-A", "Anteres", "New Sheppard", "Delta IV"];
// borrowed from movie buttons example
function renderButtons(){

    $("#topics-view").empty();
 for (i=0; i < topics.length; i++){
    var a = $("<button>");
    a.addClass("topic");
    a.addClass("btn");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $("#topics-view").append(a);
 };
};
$("#add-topic").on("click",function(event) {
    event.preventDefault();
    var topic = $("#topicsInput").val().trim();
    topics.push(topic);
    renderButtons();
});
renderButtons();
$(".topic").on("click",function(){
    $("#images").empty;
var name = $(this).data("name");
console.log(name);
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+ name + "&api_key=WHqh7w7DEBAvxr73OzKUIhesiCXQiZIR&limit=10");
xhr.done(function(data){
for (i=0; i < data.data.length; i++){
   
  var url =   data.data[i].images.fixed_height_still.url; 
    var img = $('<img />', {
        class: 'gallery', 
        src: url
        
    });
    img.attr("data-index",i);
    $("#images").append(img);
}
});
});

});