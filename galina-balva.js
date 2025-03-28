const site = document.querySelector('.site');
const menu = site.querySelector('.header-second')
const navBar = menu.querySelector('#navbar')
const navBarItems = menu.querySelectorAll('.nav-list-items li a')

menu.addEventListener('click', () => navBar.className === "inactive" ? navBar.className = "active" : navBar.className  = "inactive");

document.addEventListener("scroll", (e) => {
    navBar.className = "inactive";
});

Object.values(navBarItems).forEach(element => element.addEventListener('click', onClickNavBtn));

function onClickNavBtn(e){
    const sectionName = '.' + e.target.id;
    const section = site.querySelector(sectionName);
    const topPosition = section.offsetTop - 90
    console.log(topPosition)

    window.scrollTo({
        top: topPosition,
        left: 0,
        behavior: 'smooth'
    })
}
