let body = document.body
let profile = document.querySelector('.header .flex .profile');
let search_form = document.querySelector('.header .flex .search-form');
let sideBar= document.querySelector(".side-bar");
let toggleBtn =document.getElementById("toggle-btn");

function enableDark(){
    localStorage.setItem("dark-mode","dark")
    body.classList.add("dark");
    toggleBtn.classList.replace("fa-sun","fa-moon");
}

function disableDark(){
    body.classList.remove("dark");
    localStorage.setItem("dark-mode","light")
    toggleBtn.classList.replace("fa-moon","fa-sun");
}


toggleBtn.onclick = ()=>{
    let darkMode = localStorage.getItem("dark-mode")
    if(darkMode ==='light'){
         enableDark()
    }else{
        disableDark()
    }  
}







document.querySelector("#user-btn").onclick = ()=>{
    profile.classList.toggle('active');
    search_form.classList.remove('active');

};



document.querySelector("#search-btn").onclick = ()=>{
    search_form.classList.toggle('active')
    profile.classList.remove('active')

};

document.querySelector('#menu-btn').onclick = ()=>{
    sideBar.classList.toggle("active");
    body.classList.toggle("active")
   
}

window.onscroll = ()=>{
    profile.classList.remove('active')
    search_form.classList.remove('active')

    if(Window.innerWidth <1200){
        sideBar.classList.remove("active");
        body.classList.remove("active");
    }

}