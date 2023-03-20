let display = document.getElementById('screen');

const clear = () => {
    display.value = '';
    display.value = display.value.toString().slice(0, -1);
}

const displayEl = (n) => {
    display.value += n;
}

const calc = () => {
    display.value = eval(display.value);
}