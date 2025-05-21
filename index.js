import{S as d}from"./assets/vendor-DH7JeqP3.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u=document.querySelector(".buy-button"),l=document.body;u.addEventListener("click",n);const p=l.innerHTML;let c="";function n(s){history.pushState({html:p},"",""),l.innerHTML="";const i={name:'Футболка "АНТИ-ХРЕСТ"',price:"???",size:["S","M","L"]};c=`

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
        <li>${i.name}</li>
        <li>Ціна: ${i.price}</li>
      </ul>
      <ul class="list-size-tee">
        <li>Розміри:</li>
        <li>${i.size[0]}</li>
        <li>${i.size[1]}</li>
        <li>${i.size[2]}</li>
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
                        required

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
                        required

                >
                
            </div>
                </div>

            <div class="wrapper">
                <label for="user-paymant-method" class="modal-label">Метод оплати</label>


                <div class="user-block">
                <select >
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
                          required

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
                        required

                >
                
            </div>
            <div class="check-block">
                <input
                    type="checkbox"
                    name="user-privacy"
                    id="user-privacy"
                    class="modal-input-check visually-hidden"
                    value="true"
                    required

            >

            <label for="user-privacy" class="modal-label-check">
                

                Я приймаю умови та положення <a href="" class="privacy-policy">Політиці конфіденційності</a>

            </label>


            </div>


            <button type="submit" class="modal-button">Замовити</button>



        </form>

    </div>
</div>



    
    `,l.insertAdjacentHTML("afterbegin",c);const o=document.querySelector(".order-button"),r=document.querySelector(".backdrop"),e=document.querySelector(".btn-quit");o.addEventListener("click",t=>{r.classList.add("show")}),e.addEventListener("click",t=>{r.classList.remove("show")}),new d(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},effect:"flip",grabCursor:!0,loop:!0})}window.addEventListener("popstate",s=>{if(s.state&&s.state.html){l.innerHTML=s.state.html;const i=document.querySelector(".buy-button");i&&i.addEventListener("click",n)}});
//# sourceMappingURL=index.js.map
