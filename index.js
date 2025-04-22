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
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const modal = document.querySelector('.modal');
    modal.style.display = 'flex';

    closeModalBtn.style.display = 'flex';

})

