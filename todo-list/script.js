const textArea = document.querySelector(".new-task-text");
const addBtn = document.querySelector(".add-task");
const todoDiv = document.querySelector(".todo-tasks");
const title = document.querySelector(".title");
var currentDate = new Date();

switch (currentDate.getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        break;
}

title.innerHTML = "To-do List - " + day;

textArea.addEventListener("input", getValue);

var getText;

function getValue() {
    getText = textArea.value;

}
addBtn.addEventListener("click", clickListen);

function clickListen() {
    getValue();
    if (getText.length == 0) {
        return;
    }
    var div = document.createElement("div");
    todoDiv.appendChild(div);
    div.classList.add("first-task");
    var checkBox = document.createElement("input");
    div.appendChild(checkBox);
    checkBox.type = "checkbox";
    checkBox.classList.add("checkbox");
    var spanText = document.createElement("span");
    div.appendChild(spanText);
    spanText.textContent = getText;
    var clearBtn = document.createElement("button");
    div.appendChild(clearBtn);
    clearBtn.classList.add("clear");
    clearBtn.innerHTML = '<i class="fas fa-trash"></i>';
    textArea.value = "";
    clearBtn.addEventListener("click", function () {
        clearBtn.remove();
        div.remove();
        spanText.remove();
    });
    var count = 0;
    checkBox.addEventListener("click", function () {
        count++;
        if (count % 2 == 1) {
            spanText.style.textDecoration = "line-through";
        }
        if (count % 2 == 0) {
            spanText.style.textDecoration = "none";
        }
    });
}