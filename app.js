const touchpad = document.getElementById('touchpad');

function handleButtonClick(event){
    const button = event.target;
    const value = button.textContent
    console.log(`Button Value: ${value}`);
}

touchpad.addEventListener('click', function(event){
    if (event.target.classList.contains('solo-key')){
        handleButtonClick(event);
    }
})