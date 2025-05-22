import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


const formReg = document.querySelector('form')
const inputPassword = document.querySelector('[name="user-password"]');
const inputEmail = document.querySelector('[name="user-email"]');
formReg.addEventListener('submit', handleFormRegistration);


const storageKey = 'users';
let users = [

];






function handleFormRegistration(event){
    event.preventDefault();

    const form = event.currentTarget;
    const res = localStorage.getItem(storageKey);
    for(let i = 0; i < res.length; i++){
        if(res[i].email === 'kruglikadnrej9@gmail.com'){
            console.log(res[i]);

        }
        
        console.log(JSON.parse(res));
    }
    if(inputEmail.value !== '' && inputPassword.value !== ''){
        iziToast.show({
                
                message: 'Вхід виконанний!',
                messageColor: 'white',
                color: 'green',
                position: 'topCenter'
            });
            form.reset();

    }
    else{
        iziToast.show({
                
                message: 'Такого акаунту не існує!',
                messageColor: 'white',
                color: 'red',
                position: 'topCenter'
            });
    }


    
}







