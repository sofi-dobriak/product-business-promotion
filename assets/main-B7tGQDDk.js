(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const r=document.querySelector(".mobile-window"),a=document.querySelector(".mobile-btn-open"),m=document.querySelector(".mobile-btn-close"),f=document.querySelectorAll(".mobile-link"),y=()=>{r.classList.toggle("is-open"),c()},c=()=>document.body.classList.toggle("is-scroll-disable"),i=()=>{r.classList.remove("is-open"),c()};a.addEventListener("click",y);m.addEventListener("click",i);f.forEach(n=>{n.addEventListener("click",i)});const p=document.querySelectorAll(".question-details");p.forEach(n=>{n.addEventListener("toggle",function(){const o=n.querySelector(".answer");n.open?(o.style.maxHeight=o.scrollHeight+"px",o.style.opacity=1):(o.style.maxHeight=0,o.style.opacity=0)})});const g=document.querySelector(".modal-overlay"),b=document.querySelectorAll(".modal-btn-open"),L=document.querySelector(".modal-btn-close"),d=()=>{g.classList.toggle("is-open")};b.forEach(n=>n.addEventListener("click",d));L.addEventListener("click",d);
//# sourceMappingURL=main-B7tGQDDk.js.map
