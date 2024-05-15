var settingsmenu = document.querySelector(".settings-menu");
var darkBtn =document.getElementById("dark-btn");

function settingsMenuToggle(){
settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}

if(localStorage.getItem("theme")  == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
localStorage.setItem("theme", "dark");
localStorage.getItem("theme");
