import"./assets/styles-BMMjdCW5.js";import{i as l,S as h}from"./assets/vendor-aHTGYYFN.js";const w=document.querySelector(".buy-button"),i=document.body;w.addEventListener("click",r);const g=i.innerHTML;let a="";function r(t){history.pushState({html:g},"",""),i.innerHTML="";const e={name:'Футболка "АНТИ-ХРЕСТ"',price:"???",size:["S","M","L"]};a=`

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
        <li>${e.name}</li>
        <li>Ціна: ${e.price}</li>
      </ul>
      <ul class="list-size-tee">
        <li>Розміри:</li>
        <li>${e.size[0]}</li>
        <li>${e.size[1]}</li>
        <li>${e.size[2]}</li>
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



    
    `,i.insertAdjacentHTML("afterbegin",a);const c=document.querySelector(".order-button"),o=document.querySelector(".backdrop"),n=document.querySelector(".btn-quit");c.addEventListener("click",s=>{o.classList.add("show")});const d=document.querySelector("form"),u=document.querySelector('[name="user-city"]'),p=document.querySelector('[name="user-tel"]'),m=document.querySelector('[name="user-post-pib"]'),b=document.querySelector('[name="user-post-number"]'),v=document.querySelector('[name="user-privacy"]');d.addEventListener("submit",s=>{s.preventDefault();const y=s.currentTarget;u.value!==""&&p.value!==""&&m.value!==""&&b.value!==""&&v.checked?(l.show({message:"Дякуємо за замовлення!",messageColor:"white",color:"green",position:"topCenter"}),y.reset(),o.classList.remove("show")):l.show({message:"Заповніть всі поля будь ласка!",messageColor:"white",color:"red",position:"topCenter"})}),n.addEventListener("click",s=>{o.classList.remove("show")}),new h(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},effect:"flip",grabCursor:!0,loop:!0})}window.addEventListener("popstate",t=>{if(t.state&&t.state.html){i.innerHTML=t.state.html;const e=document.querySelector(".buy-button");e&&e.addEventListener("click",r)}});
//# sourceMappingURL=index.js.map
