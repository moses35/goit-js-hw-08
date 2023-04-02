import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textArea = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

const STORAGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

ckeckLocalStorage();

//form submit
function onFormSubmit(evt) {
  evt.preventDefault();

  const objectFromStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const keysFromObject = Object.keys(objectFromStorage);
  const valuesFromObject = Object.values(objectFromStorage);

  //form submit if dont have empty values
  for (let value of valuesFromObject) {
    if (value === '') {
      return alert('Fields are empty');
    }
  }

  //form submit if have two values
  if (keysFromObject.length !== 2) {
    return alert('Fields are empty');
  } else {
    console.log(objectFromStorage);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
  }
}

//save info to localStorage
function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

//storage check
function ckeckLocalStorage() {
  const savedMassege = localStorage.getItem(STORAGE_KEY);

  if (savedMassege) {
    try {
      const info = JSON.parse(savedMassege);
      if (info.email === undefined) {
        input.value = '';
      } else {
        input.value = info.email;
      }
      if (info.message === undefined) {
        textArea.value = '';
      } else {
        textArea.value = info.message;
      }
    } catch (error) {
      console.log(error.name); // "SyntaxError"
      console.log(error.message); // Unexpected token W in JSON at position 0
    }
  }
}
