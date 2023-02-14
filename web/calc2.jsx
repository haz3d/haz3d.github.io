const input = document.querySelector('#calculator .display input');
const buttons = document.querySelectorAll('#calculator .buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '÷') {
      input.value += '/';
    } else if (value === '×') {
      input.value += '*';
    } else if (value === '=') {
      input.value = eval(input.value);
    } else {
      input.value += value;
    }
  });
});
