var input = document.getElementById("input");
var list = document.getElementById("list");

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        add();
    }
});

function add() {
    if (input.value.trim() === '') {
        alert("Please enter a task");
        return;
    }
    var li = document.createElement("li");
    li.innerHTML = "⭐ㅤ" + input.value + "ㅤㅤ" + "<button class='dbutton' onclick='Delete(event)'>Delete</button>";
    list.appendChild(li);
    input.value = "";
}

function Delete(event) {
    event.target.parentElement.remove();
}
