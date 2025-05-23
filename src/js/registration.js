import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


const formReg = document.querySelector('form')
const inputPassword = document.querySelector('[name="user-password"]');
const inputEmail = document.querySelector('[name="user-email"]');
const registration = document.querySelector('.registration-text');
const registrationButton = document.querySelector('.registration-button');
formReg.addEventListener('submit', handleFormRegistration);
registration.addEventListener('click', handleRegistration);


const storageKey = 'users';


// localStorage.clear()


function handleFormRegistration(event){
    
    event.preventDefault();

    
    let users = [];
    const stored = localStorage.getItem(storageKey);
    if(stored){
        users = JSON.parse(stored);
    }
    
    
    
    if(inputEmail.value === '' || inputPassword.value === ''){
        iziToast.show({
            message: 'Заповніть всі поля',
            messageColor: 'white',
            color: 'red',
            position: 'topCenter'
        });
        return;

    }

    if(inputPassword.value.length < 8){
        iziToast.show({
            message: 'пароль повинен бути не менше 8 символів',
            messageColor: 'white',
            color: 'red',
            position: 'topCenter'
        });
        return;

    }

    if(registrationButton.textContent === 'Зареєструватися'){
        let usersExists = false;
        for(let i = 0; i < users.length; i++){
            if(users[i].email === inputEmail.value){
                usersExists = true;
                break;
                
                    
                    

            }
        }

        if(usersExists === true){
            iziToast.show({
                
                    message: 'Такий акаунт вже зареєстровано!',
                    messageColor: 'white',
                    color: 'yellow',
                    position: 'topCenter'
                });
                
        }
        else{
            users.push({email: inputEmail.value, password: inputPassword.value});
            localStorage.setItem(storageKey, JSON.stringify(users));
            iziToast.show({
                
                    message: 'реєстрація успішна!',
                    messageColor: 'white',
                    color: 'green',
                    position: 'topCenter'
                });
                formReg.reset();
        }

    }
    else{
        let usersFound = false;
        for(let i = 0; i < users.length; i++){
            if(users[i].email === inputEmail.value && users[i].password === inputPassword.value){
                usersFound = true;
                iziToast.show({
                    
                        message: 'Вхід виконанний!',
                        messageColor: 'white',
                        color: 'green',
                        position: 'topCenter'
                    });
                    
                    break
                        
        
            }

            
        
            }
            if(usersFound === false){
                iziToast.show({
                    
                        message: 'Такого акаунту не існує!',
                        messageColor: 'white',
                        color: 'red',
                        position: 'topCenter'
                    });
            }

    }
    
    
    
    
    
    
    
      
    


    
}

function handleRegistration(event){
    event.preventDefault();
   
    if(registration.textContent === 'Зареєструватися'){
        registrationButton.innerHTML = 'Зареєструватися';
        registration.innerHTML = 'Увійти';
        registrationButton.style.width = '210px';
        inputEmail.value = '';
        inputPassword.value = '';

    }
    else{
        registrationButton.innerHTML = 'Увійти';
        registrationButton.style.width = '150px';
        registration.innerHTML = 'Зареєструватися';
        inputEmail.value = '';
        inputPassword.value = '';

    }
    
    
        
    
    
    
    

}








