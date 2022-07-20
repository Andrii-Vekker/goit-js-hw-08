import throttle from 'lodash.throttle';

const FEEDBACK_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
    button: document.querySelector("button")
};

refs.form.addEventListener("input", throttle(handleInput, 500));
refs.button.addEventListener("submit", handleSubmit);

const formData = {};

function handleInput(e) {
    formData[e.target.name] = e.target.value;
    const inputText = JSON.stringify(formData);
    console.log(inputText)
    localStorage.setItem(FEEDBACK_KEY, inputText);
};

function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    localStorage.removeItem(FEEDBACK_KEY);
};

function showText() {
    const savedText = localStorage.getItem(FEEDBACK_KEY); 
    const parcedSavedText = JSON.parse(savedText);
    if (savedText) {
        refs.input.value = parcedSavedText.email;
        refs.textarea.value = parcedSavedText.message;
    };
};
showText()