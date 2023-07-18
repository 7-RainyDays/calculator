const keys = document.querySelectorAll('.keys');

function handleButtonClick(event) {
  const button = event.target;
  const buttonValue = button.dataset.value;
  console.log(`Button Value: ${buttonValue}`);
}

keys.addEventListener('click', function (event) {
  const soloKeys = document.querySelectorAll('solo-keys');
  soloKeys.forEach((button) => {
    if(button === event.target) {
        handleButtonClick(event);
    }
  });
    console.log('I clicked a button');
});

function hello(){
    console.log("Hello World")
}