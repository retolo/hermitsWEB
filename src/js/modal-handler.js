import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";



const btnForm = document.querySelector('.modal-button');



btnForm.addEventListener('submit', handleFormButton);

function handleFormButton(event){
    event.preventDefault();

    const form = event.currentTarget;



    form.reset();
}