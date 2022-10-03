const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
    console.log('IT got clicked!!!');
}
const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', function() {
    console.log('Im an anon!');

});

coolButton.addEventListener('click', hooray);
butts.removeEventListener('click', handleClick);
   

const buyButtons = document.querySelectorAll('button.buy');

// function buyItem() {
//     console.log('BUYING ITEM');
// }

// function handleBuyButtonClick(oprah) {
//     console.log('Binding the buy button');
//     oprah.addEventListener('click', buyItem);
    
// }
// console.log(buyButtons);
//     console.dir(butts);

// // buyButtons.forEach(function(buyButton) {
// //     console.log('Hey');
// //     console.log(buyButton);
// // })

// buyButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         console.log("YOU CLICKED IT");
//     });
// });

function handleBuyButtonClick(event) {
    console.log('You clicked a button');
    const button = event.target;
    // console.log(button.textContent);
    // console.log(parseFloat(event.target.dataset.price));
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.target === event.currentTarget);
    event.stopPropogation();
}
buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
    'click', 
    function(event) {
    console.log('You clicked the window');
    console.log(event.target);
    event.stopPropagation();
},
{ capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function(event) {
    console.log(event.currentTarget);
    console.log(this);
});