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

const formData = localStorage.getItem(FEEDBACK_KEY) ? JSON.parse(localStorage.getItem(FEEDBACK_KEY)) : {};

function handleInput(e) {
  formData[e.target.name] = e.target.value;
  const inputText = JSON.stringify(formData);
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify());
   console.log(localStorage.setItem(FEEDBACK_KEY, inputText))
};

function handleSubmit(e) {
    e.preventDefault();
       if (formData.email === "" || formData.message === "") {
         alert("Пожалуйста заполните все поля!");
  };
    localStorage.removeItem(FEEDBACK_KEY);
    e.target.reset();
    console.log(formData);
   };

function showText() {
  const savedText = localStorage.getItem(FEEDBACK_KEY);
  const parcedSavedText = JSON.parse(savedText);
  if (savedText) {
     refs.input.value = parcedSavedText.email;
  };
  if (savedText) {
    refs.textarea.value = parcedSavedText.message;
  }
    };
 showText();
//////////////////////////////////////////;
// const FEEDBACK_KEY = "feedback-form-state";

// const refs = {
//     form: document.querySelector(".feedback-form"),
//     input: document.querySelector("input"),
//     textarea: document.querySelector("textarea"),
//     button: document.querySelector("button")
// };

// const formData = localStorage.getItem(FEEDBACK_KEY) ? JSON.parse(localStorage.getItem(FEEDBACK_KEY)) : {};
// checkLocaleStorage();
// refs.input.addEventListener('input', throttle(getInputValues, 500));
// refs.textarea.addEventListener('input', throttle(getInputValues, 500));
// function getInputValues(event) {
//   event.preventDefault();
//   const name = event.target.name;
//   const value = event.target.value;
//   formData[name] = value;
//   localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
//   console.log(localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData)))
// }
// refs.form.addEventListener('submit', sendFormData);
// function sendFormData(event) {
//   event.preventDefault();
//   const email = event.target.elements.email.value;
//   const message = event.target.elements.message.value;
//   if (email === '' || message === '') {
//     alert('Заполните поля');
//   } else {
//     localStorage.removeItem(FEEDBACK_KEY);
//     console.log({ email, message });
//   }
//   event.currentTarget.reset();
// }
// function checkLocaleStorage() {
//   const savedData = localStorage.getItem(FEEDBACK_KEY)
//     ? JSON.parse(localStorage.getItem(FEEDBACK_KEY))
//     : {};
//   if (savedData.email) {
//     refs.input.value = savedData.email;
//   }
//   if (savedData.message) {
//     refs.textarea.value = savedData.message;
//   }
// }


