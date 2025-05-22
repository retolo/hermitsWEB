import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


const buyBtn = document.querySelector('.buy-button');



const body = document.body;


  

buyBtn.addEventListener('click', handleBuyButton);


const originalHTML = body.innerHTML;
let markUpForBuy = '';
function handleBuyButton(event){
    

    history.pushState({html: originalHTML}, '', '');
    body.innerHTML = ''
    
    const infoTee = {
        name: 'Футболка "АНТИ-ХРЕСТ"',
        price: '???',
        size: ['S', 'M', 'L'],

    };

    markUpForBuy = `

        <div class="block-for-tee">
  <div class="tee-content">
    
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img width="800" src="./img/photo-product.png" alt="">
        </div>
        <div class="swiper-slide">
          <img width="1000" src="./img/photo-product-back.png" alt="">
        </div>
      </div>
      
    </div>

    
    <div class="block-for-infotee">
      <ul class="list-info-tee">
        <li>${infoTee.name}</li>
        <li>Ціна: ${infoTee.price}</li>
      </ul>
      <ul class="list-size-tee">
        <li>Розміри:</li>
        <li>${infoTee.size[0]}</li>
        <li>${infoTee.size[1]}</li>
        <li>${infoTee.size[2]}</li>
      </ul>
      <button type="button" class="order-button">Замовити</button>
    </div>
  </div>
</div>

<footer class="footer-web">
    <div class="block-for-socialmedia">
      
      <a href="https://www.instagram.com/hermitss.s?igsh=MWI2dDQ1dGpjajRsZw=="><img width="30" src="./img/Instagram_icon.png" alt="instagram"></a>
      <a href=""></a><img width="30" src="./img/telegram-icon.png" alt="telegram"></a>
      <a href="https://www.tiktok.com/@hermitss.s?_t=ZS-8wWCvUF4XDR&_r=1"><img width="30" src="./img/Tik-Tok-Logo-1.png" alt="tik-tok"></a>
      <p class="text-copyright">Ukraine Kyiv HERMITSS.S &copy; 2025</p>
    </div>
</footer>

<div class="backdrop">
    <div class="modal">
        <button class="btn-quit" type="button">X</button>
            
            

        <p class="modal-header-text">
            Залиште данні для замовлення
        </p>

        <form>
            <div class="wrapper">
                <label for="user-city" class="modal-label">Місто</label>

                <div class="user-block">
                <input
                        type="text"
                        name="user-city"
                        id="user-city"
                        class="modal-input"
                        

                >
                
            </div>
                </div>

            <div class="wrapper">
                <label for="user-tel" class="modal-label">Номер телефону</label>


                <div class="user-block">
                <input
                        type="tel"
                        name="user-tel"
                        id="user-tel"
                        class="modal-input"
                        

                >
                
            </div>
                </div>

            <div class="wrapper">
                <label for="user-paymant-method" class="modal-label">Метод оплати</label>


                <div class="user-block">
                <select class="modal-select">
                  <option value="1">На сайті</option>
                  <option value="2">При отриманні</option>
                </select>
                
            </div>
                </div>
            <div class="wrapper">
                <label for="user-post-pib" class="modal-label">ПІБ</label>
                <div class="user-block">
                  <input
                          type="text"
                          name="user-post-pib"
                          id="user-post-pib"
                          class="modal-input"
                          

                  >
                </div>  
                
            </div>
            <div class="wrapper">
                <label for="user-post-number" class="modal-label">Номер віділення нової пошти</label>
                <input
                        type="text"
                        name="user-post-number"
                        id="user-post-number"
                        class="modal-input"
                        

                >
                
            </div>
            <div class="check-block">
                <input
                    type="checkbox"
                    name="user-privacy"
                    id="user-privacy"
                    class="modal-input-check visually-hidden"
                    value="true"
                    

            >

            <label for="user-privacy" class="modal-label-check">
                

                Я приймаю умови та положення <a href="" class="privacy-policy">Політиці конфіденційності</a>

            </label>


            </div>


            <button type="submit" class="modal-button">Замовити</button>



        </form>

    </div>
</div>



    
    `;

    
    body.insertAdjacentHTML('afterbegin', markUpForBuy);

    const orderBtn = document.querySelector('.order-button');
    const backDrop = document.querySelector('.backdrop');
    const btnQuit = document.querySelector('.btn-quit');

    orderBtn.addEventListener('click', (event) =>{
      backDrop.classList.add('show');
    })
    const btnForm = document.querySelector('form');
    const inputCity = document.querySelector('[name="user-city"]');
    const inputTel = document.querySelector('[name="user-tel"]');

    const inputUserPostPib = document.querySelector('[name="user-post-pib"]');
    const inputUserPostNumber = document.querySelector('[name="user-post-number"]');
    const inputCheck = document.querySelector('[name="user-privacy"]');
    btnForm.addEventListener('submit', (event) =>{
      event.preventDefault();
      

    

    const form = event.currentTarget;
    if(inputCity.value !== '' && inputTel.value !== '' && inputUserPostPib.value !== '' && inputUserPostNumber.value !== '' && inputCheck.checked){
        iziToast.show({
                
                message: 'Дякуємо за замовлення!',
                messageColor: 'white',
                color: 'green',
                position: 'topCenter'
            });
            form.reset();
            backDrop.classList.remove('show');

    }
    else{
        iziToast.show({
                
                message: 'Заповніть всі поля будь ласка!',
                messageColor: 'white',
                color: 'red',
                position: 'topCenter'
            });

    }
    
    

    

    
    
    
    
    })
    btnQuit.addEventListener('click', (event) =>{
      backDrop.classList.remove('show');
    })
    
    

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal', 
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        
        effect: 'flip',
        grabCursor: true,
        loop: true,
      });

}


window.addEventListener('popstate', (event) =>{
    if(event.state && event.state.html){
        body.innerHTML = event.state.html;
        



        const restored = document.querySelector('.buy-button')
        if(restored){
            restored.addEventListener('click', handleBuyButton);
        }

    }
})



