const menuBtn=document.querySelector('.menu-btn');
const menuList=document.querySelector('.menu-list');
const body=document.getElementById('body');


loadEvents()
function loadEvents(){
    menuBtn.addEventListener('click',showList);
    menuBtn.addEventListener('dblclick',hiddenList);
}



function showList(e){

    if (e.target.className=='menu-btn') {
        menuList.style.display = 'flex';
    }
    }



function hiddenList(e) {
    if (e.target.className == 'menu-btn') {
        menuList.style.display = 'none';
    }
}



