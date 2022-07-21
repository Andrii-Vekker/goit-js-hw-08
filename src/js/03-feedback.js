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

const formData = {email:"", message:""};

function handleInput(e) {
    formData[e.target.name] = e.target.value;
    const inputText = JSON.stringify(formData);
    localStorage.setItem(FEEDBACK_KEY, inputText);
  
};

function handleSubmit(e) {
    e.preventDefault();
    localStorage.removeItem(FEEDBACK_KEY);
    e.target.reset();
    console.log(formData);
    clearObj();
   };

function showText() {
    const savedText = localStorage.getItem(FEEDBACK_KEY); 
    const parcedSavedText = JSON.parse(savedText);
       if (savedText ) {
            refs.input.value = parcedSavedText.email;
           refs.textarea.value = parcedSavedText.message;
     };
};
showText();

function clearObj (obj) {
    formData.email = "";
    formData.message = "";
};
clearObj(formData);