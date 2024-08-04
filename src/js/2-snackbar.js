// Підключення бібліотеки iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Функція для обробки сабміту форми
document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault(); // Запобігаємо стандартному відправленню форми

  // Отримуємо значення затримки і стану
  const delay = parseInt(this.querySelector('input[name="delay"]').value, 10);
  const state = this.querySelector('input[name="state"]:checked').value;

  // Створюємо проміс
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  // Обробка промісу
  promise
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
