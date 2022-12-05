import throttle from "lodash.throttle";

const formRef = document.querySelector(".feedback-form");

const STORAGE_KEY = "feedback-form-state";
const formData = {};

populateForm();

formRef.addEventListener("input", throttle(onInput, 500));
formRef.addEventListener("submit", onSubmit);

function onInput (e) {
    formData[e.target.name]=e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); 
};

function onSubmit (e) {
    e.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    e.currentTarget.reset();
    console.log(formData);
};

function populateForm(){
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const email = document.querySelector('input');
    const message = document.querySelector('textarea');
    if (savedData) {
        email.value = savedData.email;
        message.value = savedData.message;
    };
};