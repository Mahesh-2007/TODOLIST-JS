var input = document.getElementById("input");
var list = document.getElementById("list");
function add() {
     if (input.value.trim() === '') {
return;}
    var li = document.createElement("li");
    li.innerHTML = input.value + "<button onclick='Delete(event)'>Delete</button>";
    list.appendChild(li);
    input.value = "";
}
function Delete(event)
{
   event.target.parentElement.remove();
}