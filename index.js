const addBtn = document.querySelector('.add-button');
let currentDrinkNo = 1;

addBtn.addEventListener('click', (event) => {
    const form = document.querySelector('form');
    const drinkTemplate = document.querySelector('.beverage');
    const submitButton = document.querySelector('.submit-button').parentElement;

    const newDrink = drinkTemplate.cloneNode(true);
    newDrink.querySelector('.beverage-count').textContent = `Напиток №${++currentDrinkNo}`;

    form.insertBefore(newDrink, submitButton);
});

function CreateCross(form) {
    let cross = document.createElement("button");
    cross.textContent = "X";
    cross.style.float = "right";
    cross.className = "cross-button";
    form.prepend(cross);
    return cross;
}

let form = document.querySelector(".beverage");
CreateCross(form);

const submitBtn = document.querySelector('.submit-button');
const closeModalBtn = document.querySelector('.close-modal');
const modalContent = document.querySelector('.modal-content');

function getDrinkWord(count) {
    let number = " напитков";
     if (count === 1) {
         number = " напиток";
     } else if (count % 10 === 2 || count % 10 === 3 || count % 10 === 4) {
         number = " напитка";
     }
     return number;
}

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const modal = document.querySelector('.modal');
    const drinkCount = document.querySelectorAll('.beverage').length;
    const drinkWord = getDrinkWord(currentDrinkNo);
    
    modalContent.innerHTML = `<p>Вы заказали ${currentDrinkNo} ${drinkWord}</p>`;
    modal.style.display = 'flex';

    closeModalBtn.style.display = 'flex';

})

closeModalBtn.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
});

