function inicializarModal() {

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function inicializarModalContato() {
    var modal = document.getElementById("contactModal");
    modal.style.display = "block";
}

function fecharModalContato() {
    var modal = document.getElementById("contactModal");
    modal.style.display = "none";
}

window.onclick = function (event) {
    var modal = document.getElementById("contactModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function toggleContent(button) {

    var content = button.nextElementSibling;
    var arrow = button.querySelector(".arrow");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        arrow.classList.add("down");
    } else {
        content.style.display = "none";
        arrow.classList.remove("down");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var contents = document.querySelectorAll(".hidden-content");
    contents.forEach(function (content) {
        content.style.display = "none";
    });
});