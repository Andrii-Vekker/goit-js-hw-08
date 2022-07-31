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

let formData = localStorage.getItem(FEEDBACK_KEY) ? JSON.parse(localStorage.getItem(FEEDBACK_KEY)) : {};

function handleInput(e) {
  formData[e.target.name] = e.target.value;
  const inputText = JSON.stringify(formData);
  localStorage.setItem(FEEDBACK_KEY, inputText);
};

function handleSubmit(e) {
  e.preventDefault();
  if (e.target.elements.email.value === "" || e.target.elements.message.value === "") {
    alert("Заполните все поля!") 
  };
  localStorage.removeItem(FEEDBACK_KEY);
  e.target.reset();
  console.log(formData);
  formData = {};
  };

function showText() {
  const savedText = localStorage.getItem(FEEDBACK_KEY);
  const parcedSavedText = JSON.parse(savedText);
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

