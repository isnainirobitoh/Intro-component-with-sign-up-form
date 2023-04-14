"use strict";

const formInput = document.querySelectorAll(".form-input");
const submitButton = document.getElementById("submit-button");
const form = document.getElementById("form");

console.log(formInput);

const cekValidasi = () => {
    const inputFn = document.getElementById("inputfn");
    const inputLn = document.getElementById("inputln");
    const inputEmail = document.getElementById("inputemail");
    const inputPass = document.getElementById("inputpass");

    const fNvalue = inputFn.value.trim();
    const lNvalue = inputLn.value.trim();
    const emailValue = inputEmail.value.trim();
    const passValue = inputPass.value.trim();
    const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (fNvalue === '') {
        formInput[0].classList.add("error");
    } else {
        formInput[0].classList.remove("error");
    }
    if (lNvalue === '') {
        formInput[1].classList.add("error");
    } else {
        formInput[1].classList.remove("error");
    }
    if (emailValue.match(emailFormat)) {
        formInput[2].classList.remove("error");
    } else {
        formInput[2].classList.add("error");
    }
    if (passValue === '') {
        formInput[3].classList.add("error");
    } else {
        formInput[3].classList.remove("error");
    }
    
};

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    cekValidasi();
});

