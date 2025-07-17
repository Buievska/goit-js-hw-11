import{a as f,S as d,i as n}from"./assets/vendor-CauDeeDU.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="51367924-123f738920e3f369a979532e9",m="https://pixabay.com/api/";async function y(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(m,{params:o})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="info">
        <ul>
        <li> <h3>Likes</h3>
          <p>${e.likes}</p></li>
        <li> <h3>Views</h3>
          <p>${e.views}</p></li>
        <li> <h3>Comments</h3>
          <p>${e.comments}</p></li>
        <li> <h3>Downloads</h3>
          <p>${e.downloads}</p></li>
        </ul>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){l.innerHTML=""}function w(){c.classList.add("visible")}function b(){c.classList.remove("visible")}const u=document.querySelector(".form"),v=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const o=v.value.trim();if(!o){n.warning({title:"Warning",message:"Please enter a search query!"});return}L(),w();try{const e=await y(o);e.hits.length===0?n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):g(e.hits)}catch(e){n.error({title:"Error",message:"Something went wrong. Try again later."}),console.error(e)}finally{b()}});
//# sourceMappingURL=index.js.map
