var e=document.querySelector(".menu"),s=document.querySelector(".item-icon__button");s.addEventListener("click",()=>{e.classList.contains("menu--close")?(e.classList.remove("menu--close"),e.classList.add("menu--open"),s.classList.remove("item-icon__button--close"),s.classList.add("item-icon__button--open")):(e.classList.add("menu--close"),e.classList.remove("menu--open"),s.classList.add("item-icon__button--close"),s.classList.remove("item-icon__button--open"))});
