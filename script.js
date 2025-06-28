const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Substitui × por * para o cálculo
        let expression = display.value.replace(/×/g, '*');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Erro';
        setTimeout(clearDisplay, 1000);
    }
}

// Adiciona suporte para teclado
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (/[0-9+\-*/.]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === '/') {
        event.preventDefault(); // Evita que abra o menu de contexto no Firefox
        appendToDisplay('/');
    }
});