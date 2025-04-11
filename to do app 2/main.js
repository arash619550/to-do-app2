let tasks = [];
let removeImg = document.getElementById("remove");
let counter = 0;
function addTask() {
    const input = document.getElementById("input");
    tasks.push(input.value);
    removeImg.style.display = "inline-block";
    removeImg.style.paddingRight = "10px";
    if (input.value != "") {
        document.body.append(tasks[counter], removeImg);
        document.body.innerHTML += "<br><br>";
    }
    input.value = "";
    counter++;
}
function removeTask() {
    removeImg.remove();
}