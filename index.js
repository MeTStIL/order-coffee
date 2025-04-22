const addBtn = document.querySelector('.add-button');
let currentDrinkNo = 1;

addBtn.addEventListener('click', (event) => {
    const form = document.querySelector('form');
    const drinkTemplate = document.querySelector('.beverage');
    const addButton = document.querySelector('.add-button').parentElement;

    const newDrink = drinkTemplate.cloneNode(true);
    newDrink.querySelector('.beverage-count').textContent = `Напиток №${++currentDrinkNo}`;

    const milkRadios = newDrink.querySelectorAll('input[name="milk"]');
    milkRadios.forEach(radio => {
        radio.name = `milk-${currentDrinkNo}`;
    });

    const optionsCheckboxes = newDrink.querySelectorAll('input[name="options"]');
    optionsCheckboxes.forEach((checkbox, index) => {
        checkbox.name = `options-${currentDrinkNo}-${index}`;
    });

    form.insertBefore(newDrink, addButton);
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
    modalContent.textContent = '';

    closeModalBtn.style.display = 'flex';

    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.marginBottom = '20px';

    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');

    ['Напиток', 'Молоко', 'Дополнительно'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        th.style.padding = '8px';
        th.style.borderBottom = '1px solid #ddd';
        th.style.textAlign = 'left';
        headRow.appendChild(th);
    });

    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    const allDrinks = document.querySelectorAll('.beverage');

    allDrinks.forEach((beverage, index) => {
        const row = document.createElement('tr');

        const drink = document.createElement('td');
        const drinkSelect = beverage.querySelector('select');

        drink.textContent = drinkSelect.options[drinkSelect.selectedIndex].textContent;

        console.log(drink)
        row.appendChild(drink);

        const milk = document.createElement('td');
        const milkSelect = beverage.querySelector('input[name="milk"]:checked');

        console.log(milkSelect)

        milk.textContent = milkSelect.nextElementSibling.textContent;

        console.log(milk)

        row.appendChild(milk)

        table.appendChild(row)
    })

    modalContent.appendChild(table);

});


closeModalBtn.addEventListener('click', (event) => {
    modal.style.display = 'none';
    closeModalBtn.style.display = 'none';
})

closeModalBtn.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
});

