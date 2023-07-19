const touchpad = document.getElementById('touchpad');
const screen = document.querySelector('#screen p');
let current = "";

function handleButtonClick(event){
    const button = event.target;
    current += button.textContent;
}

touchpad.addEventListener('click', function(event){
    if (event.target.classList[0].endsWith('-key')){
        const pressedKey = event.target
        console.log(pressedKey);
        switch (pressedKey){
            case 'num-key':
                handleButtonClick();
                break;
            case 'math-key':
                //handleMathOperation();
                break;
            case 'result-key':
                //handleResult;
            case 'delete-key':
                handle_delete();
            case 'delete-all-key':
                handle_delete_all();
        };
        
        handleButtonClick(event);
    };
    update_screen(current);
})

function update_screen(current) {
    screen.innerText = current;
}

function handleMathOperation(){
    return;
}

function handle_delete_all(){
    return current = "";
}

function handle_delete(){
    current = current.slice(0, -1);
}