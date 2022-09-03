
// PRELOADER //
window.onload = function(){
    document.querySelector(".preloader").style.display = "none";
}

// NAV MENU AUTO CHANGE //
let section = document.querySelectorAll('section');
let lists = document.querySelectorAll('.links');
function activeLink(li) {
    lists.forEach((item) => item.classList.remove('active'));
    li.classList.add('active');
}

lists.forEach((item) =>
    item.addEventListener('click', function(){
        activeLink(this);
    }));

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= (offset - height / 3) && top < offset + height / 3) {
            const target = document.querySelector(`[href='#${id}']`).parentElement;
            activeLink(target);
        }
    })
}


