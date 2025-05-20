import{S as u}from"./assets/vendor-DH7JeqP3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=d(e);fetch(e.href,i)}})();const a=document.querySelector(".buy-button"),o=document.body;a.addEventListener("click",c);const p=o.innerHTML;let l="";function c(r){history.pushState({html:p},"",""),o.innerHTML="";const t={name:'Футболка "АНТИ-ХРЕСТ"',price:"???",size:["S","M","L"]};l=`

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
        <li>${t.name}</li>
        <li>Ціна: ${t.price}</li>
      </ul>
      <ul class="list-size-tee">
        <li>Розміри:</li>
        <li>${t.size[0]}</li>
        <li>${t.size[1]}</li>
        <li>${t.size[2]}</li>
      </ul>
      <button type="button" class="order-button">Замовити</button>
    </div>
  </div>
</div>



    
    
    

  
    
    
    `,o.insertAdjacentHTML("afterbegin",l),new u(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},effect:"flip",grabCursor:!0,loop:!0})}window.addEventListener("popstate",r=>{if(r.state&&r.state.html){o.innerHTML=r.state.html;const t=document.querySelector(".buy-button");t&&t.addEventListener("click",c)}});
//# sourceMappingURL=index.js.map
