let fileTag = document.getElementById("fileTag"),
    preview = document.getElementById("preview");

fileTag.addEventListener("change", function() {
    changeImage(this);
});

function changeImage(input) {
    let reader;

    if (input.files && input.files[0]) {
        reader = new FileReader();

        reader.onload = function(e) {
            preview.setAttribute('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("searchBox").addEventListener("click", function() {
        let arr = this.className.split(" ");
        if (arr.indexOf("active") === -1) {
            this.className += " active";
        }
        this.getElementsByTagName("INPUT")[0].focus();
    });

    document.getElementById("searchBox").getElementsByClassName("search")[0].addEventListener("click", function(event) {
        let parent = this.parentElement; //searchBox element;
        let arr = parent.className.split(" ");
        if (arr.indexOf("active") !== -1) {
            let input = parent.getElementsByTagName("INPUT")[0];
            input.value = "";
            let classList = parent.className;
            classList = classList.replace(/\bactive\b/g, "").trim();
            parent.className = classList;
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
        }
    });
}, false);


let modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
