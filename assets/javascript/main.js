// back to top
let backToTopBtn = document.querySelector('.back-to-top');

window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'flex'
        
    } else {
        backToTopBtn.style.display = 'none'
    }

}
// menu top 
let menuItem = document.getElementsByClassName('menu-item');

Array.from(menuItem).forEach((item) => {
    item.onclick = (e) => {
        let currMenu = document.querySelector('.menu-item.active');
        currMenu.classList.remove('active');
        item.classList.add('active')
    } 
})

// food category
let foodMenuList = document.querySelector('.food-item-wrap');
let foodCategory = document.querySelector('.food-category');
let categories = foodCategory.querySelectorAll('button');

Array.from(categories).forEach((item) => {
    item.onclick = (e) => {
        let currcat = foodCategory.querySelector('button.active');
        currcat.classList.remove('active')
        e.target.classList.add('active')
        foodMenuList.classList = 'food-item-wrap '+ e.target.getAttribute('data-food-type')
    } 
})
//MENU MOBILE 
let menuMBItem =document.querySelectorAll('.mb-nav-item');

Array.from(menuMBItem).forEach( (item) => {
    item.onclick = (e) => {
        let currMBMenu = document.querySelector('.mb-nav-item.active');
        currMBMenu.classList.remove('active')
        item.classList.add('active')
    }
})





