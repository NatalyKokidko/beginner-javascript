const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
    //event.preventDefault();
    const shouldChangePage = confirm(
        'This website might be malicious! Do you wish to procced?');

   if (!shouldChangePage) {
    event.preventDefault();
    //window.location = event.currentTarget.href;
}
}); 

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
    console.log(event);
    event.preventDefault();
});

function logEvent(event) {
    console.log(event.type);
    console.log(e.currentTarget.value);

}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);


const photo = document.querySelector('.photo');

// photo.addEventListener('click', function() {
//     console.log('You clicked the photo');

function handlePhotoClick(event) {
    if(event.type === 'click' || event.key === 'Enter') {
        console.log('You clicked the photo');
    }
    
    
}
photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);