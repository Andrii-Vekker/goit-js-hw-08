import throttle from 'lodash.throttle';

const FEEDBACK_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
    button: document.querySelector("button")
};

refs.form.addEventListener("input", throttle(handleInput, 500));
refs.form.addEventListener("submit", handleSubmit);

let formData = JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || {};

function handleInput(e) {
  formData[e.target.name] = e.target.value;
  const inputText = JSON.stringify(formData);
  localStorage.setItem(FEEDBACK_KEY, inputText);
};

function handleSubmit(e) {
  e.preventDefault();
    const email = e.target.elements.email.value;
  const message = e.target.elements.message.value;
  if (email === "" || message === "") {
    alert("Заполните все поля!")
  };
  localStorage.removeItem(FEEDBACK_KEY);
  e.target.reset();
  console.log({email, message});
  };

function showText() {
  const savedText = localStorage.getItem(FEEDBACK_KEY);
  const parcedSavedText = JSON.parse(savedText) || {}
    // const savedData = savedText
    // ? parcedSavedText
    // : {};
  if (parcedSavedText.email) {
     refs.input.value = parcedSavedText.email;
  };
  if (parcedSavedText.message) {
    refs.textarea.value = parcedSavedText.message;
  }
    };
showText();
//////////////////////////////////////////;

// const form = document.querySelector('.feedback-form');
// const emailEl = document.querySelector('input');
// const messageEl = document.querySelector('textarea');
// const formData = {};

// checkLocaleStorage();

// emailEl.addEventListener('input', throttle(getInputValues, 500));
// messageEl.addEventListener('input', throttle(getInputValues, 500));

// function getInputValues(event) {
//   event.preventDefault();
//   const name = event.target.name;
//   const value = event.target.value;
//   formData[name] = value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// };

// form.addEventListener('submit', sendFormData);

// function sendFormData(event) {
//   event.preventDefault();
//   const email = event.target.elements.email.value;
//   const message = event.target.elements.message.value;
//   if (email === '' || message === '') {
//     alert('Please fill in all the fields!');
//   } else {
//     localStorage.removeItem('feedback-form-state');
//     console.log({ email, message });
//   };
//   event.currentTarget.reset();
// };

// function checkLocaleStorage() {
//   const savedData = localStorage.getItem('feedback-form-state')
//     ? JSON.parse(localStorage.getItem('feedback-form-state'))
//     : {};
//   if (savedData.email) {
//     emailEl.value = savedData.email;
//   }
//   if (savedData.message) {
//     messageEl.value = savedData.message;
//   };
// };

