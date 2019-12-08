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
        let arr = workStage.querySelectorAll('.button');
        let newArr = arr.filter(item => item.dataset.value > index);
        console.log(newArr);
        // this.buttonsContainer.querySelector('.active').classList.remove('active');
        // this.buttonsContainer.querySelector(`.item--${index}`).classList.add('active');
    }
}