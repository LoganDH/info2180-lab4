var searchBtn;

window.onload = function() {
    searchBtn = document.querySelector("button[type=submit]");
    searchBtn.addEventListener("click", searchBtnHandler);
}

function searchBtnHandler(e){
    e.preventDefault();
    console.log(fetch("superheroes.php").then(response => response.text()).then(data => (alert(data))));
}