// Main js file
window.onscroll = function() {
    sctickHeader()
};

function sctickHeader() {
    let header = document.getElementById("header-bot");
    let sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.classList.add("shadow-bot");
    } else {
        header.classList.remove("sticky");
        header.classList.remove("shadow-bot");
    }
};

function makeMarginOffHeader() {
    let headerBot = document.querySelector('.header__bot');
    let headerCoords = headerBot.getBoundingClientRect();
    let headerHeight = headerCoords.height;
    let banner = document.getElementById('banner');
    banner.style.marginTop = '-' + headerHeight+'px';
}
makeMarginOffHeader();

class TabList {
    constructor(contentContainer, tabs) {
        this.contentContainer = contentContainer;
        this.tabs = tabs;
        this.tabs.addEventListener('click', event => {
            const index = event.target.closest('.tabs-item').dataset.value;
            this.openTab(index);
        });
    }

    openTab(index) {
        this.contentContainer.querySelector('.active').classList.remove('active');
        this.contentContainer.querySelector(`.content--${index}`).classList.add('active');
        this.tabs.querySelector('.active').classList.remove('active');
        this.tabs.querySelector(`.tab--${index}`).classList.add('active');
    }
}

class TabsStages {
    constructor(buttonsContainer, tabs1) {
        this.buttonsContainer = buttonsContainer;
        this.tabs1 = tabs1;
        this.buttonsContainer.addEventListener('click', event => {
            const index = event.target.closest('.button').dataset.value;
            this.openTab(index);
        });
    }

    openTab(index) {
        this.tabs1.querySelector('.active').classList.remove('active');
        this.tabs1.querySelector(`.tab--${index}`).classList.add('active');
        let workStage = document.getElementById('work-stages');
        let items = workStage.querySelectorAll('.button');
        let arrItems = Array.from(items);
        let newArr = arrItems.filter( item => item.dataset.value <= index );
        let disabledArr = arrItems.filter( item => item.dataset.value > index );
        for (let key = 0; key < newArr.length; key++) {
            newArr[key].classList.add('active')
        }
        for (let x = 0; x < disabledArr.length; x++) {
            disabledArr[x].classList.remove('active');
        };
    }

}

document.addEventListener('DOMContentLoaded', ()=>{
    const contentContainer = document.querySelector('.services__container__content');
    const tabs = document.querySelector('.services__container__tabs');
    const buttonsContainer = document.querySelector('.works-stages__container__buttons');
    const tabs1 = document.querySelector('.works-stages__container__tabs');


    const openButtons = document.querySelectorAll('.open-popup');
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.btn-close');
    const body = document.body;

    
    const tabList = new TabList(contentContainer, tabs);
    const tabsStages = new TabsStages(buttonsContainer, tabs1);
    // const modalWindow = new Modal(openButton, modal, closeButton);

    openButtons.forEach(item => item.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'flex';
        body.style.height = '100vh';
        body.style.overflowY = 'hidden';
    }))
    closeButton.onclick = function() {
        modal.style.display = 'none';
        body.style.height = '';
        body.style.overflowY = '';
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            body.style.height = '';
            body.style.overflowY = '';
        }
    }

    const burgerMenu = document.querySelector('.burger-btn');
    const navbar = document.getElementById('navbar');
    const navItems = document.querySelectorAll('.nav-item');
    burgerMenu.addEventListener('click', function(e) {
        e.preventDefault();
        burgerMenu.classList.toggle('burger-btn_active');
        navbar.classList.toggle('navbar');
        navbar.classList.toggle('responsive-menu');
    })

    function closeMenuLink() {
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].addEventListener('click', function() {
                navbar.classList.toggle('responsive-menu');
                navbar.classList.toggle('navbar');
                burgerMenu.classList.toggle('burger-btn_active');
            })
        }
    }
    closeMenuLink();
})