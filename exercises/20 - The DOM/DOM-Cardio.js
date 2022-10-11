const div = document.createElement('div');
div.classList.add('wrapper');
document.body.appendChild(div);

const ul = `<ul>
<li> one </li>
<li> two </li>
<li> three</li>
</ul>`;

div.innerHTML = ul;
console.log(div);

const img = document.createElement('img');
img.src = "https://picsum.photos/500";
img.width = 250;
img.height = 250;
img.classList.add('cute');
img.alt = 'Cute Puppy!';
div.appendChild(img);

const myHTML = `
<div class="myDiv">
<p> Paragraph One</p>
<p> Paragraph Two</p>
<p> Paragraph Three</p>
</div>
`;
const ulElement = div.querySelector('ul');
console.log(ulElement);
ulElement.insertAdjacentHTML("beforebegin", myHTML);

const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
myDiv.firstElementChild.remove();

function generatePlayerCard(name, age, height) {
    const html = `
    <div class="playerCard">
    <h2>${name} - ${age}</h2>
    <p> Their Height is ${height} and ${age} years old. In Dog years this person would de ${age * 7}. That would be a tall dog!</p>
<button class="delete" type="button">&times; Delete </button>
    </div>
    `;
    return html;
}

const cards = document.createElement('div');
cards.classList.add('cards');

let cardsHTML = generatePlayerCard('wes', 12, 150);
cardsHTML += generatePlayerCard('scott', 12, 150);
cardsHTML += generatePlayerCard('kait', 12, 150);
cardsHTML += generatePlayerCard('snickers', 12, 150);


cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);

const buttons = document.querySelectorAll('.delete');

function deleteCard(event) {
    const buttonThatGotClicked = event.currentTarget;
    buttonThatGotClicked.closest('.playerCard').remove();
}

buttons.forEach(button => button.addEventListener('click', deleteCard));