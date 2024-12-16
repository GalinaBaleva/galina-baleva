const menuIcon = document.querySelector('.fa-solid');
let lastKnownScrollPosition = 0;

document.addEventListener("scroll", (e) => {
    const parent = menuIcon.parentElement.parentElement;
    const inactivMenu = parent.querySelector('#navbar');
    
    inactivMenu.className = "inactive";

});


menuIcon.addEventListener('click', onClick);

function onClick(e){
    const parent = e.target.parentElement.parentElement;
    const inactivMenu = parent.querySelector('#navbar');

    inactivMenu.className = inactivMenu.className === "inactive" ? "active" : "inactive";
}



