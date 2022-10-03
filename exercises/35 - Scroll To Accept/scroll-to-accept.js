const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
        button.disabled = false;
        // stop observing the button
        //console.log('Removing disabled');
        ob.unobserve(terms.lastElementChild);

    } else {
        button.disabled = true;
    }

    // console.log(payload);
    // console.log(payload[0].intersectionRatio);
}
const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
   
});

// terms.addEventListener('scroll', function(e) {
//     console.log(e.currentTarget.scrollTop);
//     console.log(e.currentTarget.scrollHeight);
// });
ob.observe(terms.lastElementChild);