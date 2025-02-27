const touchpad = document.getElementById('touchpad');
const screen = document.querySelector('#screen span');
let baseURL = "http://api.mathjs.org/v4/?expr=";
let current = "";

function handleButtonClick(event){
    const button = event.target;
    current += button.textContent;
    return current;
}

function handleKeyboardInput(event) {
    const keyPressed = event.key;
    const allowedChars = /^[\d+\-*/()]+$/;
    if (allowedChars.test(keyPressed)) {
      current += keyPressed;
      update_screen();
    }
  }
  

touchpad.addEventListener('click', function(event){
    if (event.target.classList[0].endsWith('-key')){
        const pressedKeyGroup = event.target.classList[0];
        const pressedKey = event.target.textContent;
        switch (pressedKeyGroup){
            case 'num-key':
                handleButtonClick(event);
                break;
            case 'math-key':
                handleMathOperation(pressedKey);
                break;
            case 'result-key':
                fetch_result();
                break;
            case 'delete-key':
                handle_delete();
                break
            case 'delete-all-key':
                handle_delete_all();
                break;
        };
    };
    update_screen();
})

function update_screen() {
    screen.innerText = current;
}

function handleMathOperation(pressedKey){
    current += pressedKey;
}

function handle_delete_all(){
    return current = "";
}

function handle_delete(){
    if (current !== ""){
        current = current.slice(0, -1);
    };
}

function fetch_result() {
    const encoded = encodeURIComponent(current);
    fetch('http://api.mathjs.org/v4/?expr=' + encoded)
    .then(response => {
      if (!response.ok) {
        throw new Error('API request failed');
      }
      return response.json();
    })
    .then(data => {
      if (typeof data === 'number') {
        current = parseFloat(data.toFixed(10));
      } else {
        current = 0;
      }
      update_screen();
    })
    .catch(error => {
      alert('Invalid Input:', error);
    });

}

document.addEventListener('keydown', handleKeyboardInput);