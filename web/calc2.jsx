const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.display');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === '=') {
      display.textContent = eval(display.textContent);
    } else {
      display.textContent += value;
    }
  });
});
