import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';




const buyBtn = document.querySelector('.buy-button');
const body = document.body;


buyBtn.addEventListener('click', handleBuyButton);
const originalHTML = body.innerHTML;
let markUp = '';
function handleBuyButton(event){
    

    history.pushState({html: originalHTML}, '', '');
    body.innerHTML = ''
    
    const infoTee = {
        name: 'Футболка "АНТИ-ХРЕСТ"',
        price: '???',
        size: ['S', 'M', 'L'],

    };

    markUp = `

        <div class="block-for-tee">
  <div class="tee-content">
    
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img width="1000" src="./img/photo-product.png" alt="">
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



    
    
    

  
    
    
    `;
    body.insertAdjacentHTML('afterbegin', markUp);

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



