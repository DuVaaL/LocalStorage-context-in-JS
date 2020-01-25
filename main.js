// Select Elements 

let addItems = document.querySelector(' .add-items');
let itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];

// Fonctions

function addItem(e){
    e.preventDefault();
    const text = (this.querySelector('input[name=item]')).value;
    const item = {
        text : text,
        ready : false
    };

    items.push(item);
    viewRatherList( items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function viewRatherList(plates = [], currentItem){
    currentItem.innerHTML = plates.map((plate,i) => {
            return `
            <li>
                <input type= "checkbox" id="item${i}" data-item="${i}" checked/>
                <label for="">${plate.text}</label>
            </li>
            `;
    }).join('');

}

// EventListeners 

addItems.addEventListener('submit', addItem);

viewRatherList( items, itemsList);