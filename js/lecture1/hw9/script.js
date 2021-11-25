var hideButton = document.getElementById("hide-button");
var showButton = document.getElementById("show-button");
var anime = document.getElementById("anime");
hideButton.addEventListener("click",function()
{
anime.style.display = "none";

});
showButton.addEventListener("click",function()
{
anime.style.display = "block";

});
