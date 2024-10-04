//Variables
const display = document.getElementById('display'); 
const buttons = document.querySelectorAll('input[type=button]'); 
let isDisabled = false; 

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.value;
        if (isDisabled && value !== 'AC') {
            return;
        }
        if (value === 'AC') {
            clearDisplay();
        } else if (value === 'DE') {
            deleteLastChar();
        } else if (value === 'bye') {
            sayGoodbye();
        } else if (value === 'Hello') {
            sayHello();
        } else if (value === '=') {
            calculateResult();
        } else {
            clearHello();
            display.value += value;
        }
    });
});

//function for AC
function clearDisplay() {
    display.value = '';
    isDisabled = false;
    buttons.forEach(button => button.disabled = false); 
}

//function for DE
function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

//function for Bye
function sayGoodbye() {
    display.value = 'Goodbye 🍫';
    isDisabled = true;
    buttons.forEach(button => button.disabled = true); 
    document.querySelector('input[value="AC"]').disabled = false; 

    setTimeout(() => {
        display.value = ''; 
    }, 2000); 
}

//function for Hello
function sayHello() {
    const greetings = [
        'Hello',
        'Hoy',
        'Hola',
        'Bonjour',
        'Hallo',
        'Ciao',
        'こんにちは',
        '안녕하세요',
        '你好'
    ];

    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    display.value = randomGreeting;
    display.classList.add('greeting-shown');
}

// Function to clear greeting messages if present
function clearHello() {
    if (display.classList.contains('greeting-shown')) {
        display.value = ''; 
        display.classList.remove('greeting-shown'); 
    }
}

// Function to calculate and display the result of the expression
function calculateResult() {
    let expression = display.value;
    try {
        display.value = eval(expression); 
    } catch (error) {
        display.value = 'Error'; 
    }
}
