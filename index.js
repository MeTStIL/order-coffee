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