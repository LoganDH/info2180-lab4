var searchBtn;
var searchBox;
var resultSection;

window.onload = function() {
    searchBtn = document.querySelector("button");
    searchBtn.addEventListener("click", searchBtnHandler);
    searchBox = document.getElementById("hero");
    resultSection = document.querySelector(".result");
}

function searchBtnHandler(e){
    e.preventDefault();
    fetch("superheroes.php", {
        method: 'POST',
        body: searchBox.value.trim(),
        headers: {
            'Content-Type': 'text/plain'
        }
   })
   .then(response => response.text())
   .then(data => resultSection.innerHTML = data);
}