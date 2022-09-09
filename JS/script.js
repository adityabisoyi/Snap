// import Swiper from 'swiper/bundle';


const popupEl = document.querySelector("#register-popup")

const dispEl = document.querySelector("#main-display")

const hamMenu = document.querySelector("#tabsId")
const mobFeatures = document.querySelector("#nav-features")
const mobCompany = document.querySelector("#nav-company")

const darkBack = document.querySelector("#darker-background")

const upArrowFeat = document.querySelector("#upArrowFeat")
const downArrowFeat = document.querySelector("#downArrowFeat")

const upArrowComp = document.querySelector("#upArrowComp")
const downArrowComp = document.querySelector("#downArrowComp")


function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}



function openPopup() {
    popupEl.classList.remove("close-popup")
    popupEl.classList.add("open-popup")
    dispEl.classList.add("blur-background")
    document.querySelector('body').addEventListener('wheel', preventScroll, {passive: false});
}

function closePopup() {
    popupEl.classList.remove("open-popup")
    popupEl.classList.add("close-popup")
    dispEl.classList.remove("blur-background")
    hamMenu.classList.remove("tabs-display")
    darkBack.classList.remove("gray-background")

    document.querySelector('body').removeEventListener('wheel', preventScroll);
}

function featuresDisp() {
    mobFeatures.classList.toggle("show")
    mobCompany.classList.remove("show")
    upArrowFeat.classList.toggle("up-arrow-mob")
    downArrowFeat.classList.toggle("down-arrow-mob")

    upArrowComp.classList.remove("up-arrow-mob")
    downArrowComp.classList.remove("down-arrow-mob")
}

function companyDisp() {
    mobCompany.classList.toggle("show")
    mobFeatures.classList.remove("show")
    upArrowComp.classList.toggle("up-arrow-mob")
    downArrowComp.classList.toggle("down-arrow-mob")

    upArrowFeat.classList.remove("up-arrow-mob")
    downArrowFeat.classList.remove("down-arrow-mob")
}

function openMenu() {
    hamMenu.classList.toggle("tabs-display")
    darkBack.classList.toggle("gray-background")
    mobCompany.classList.remove("show")
    mobFeatures.classList.remove("show")

    upArrowFeat.classList.remove("up-arrow-mob")
    downArrowFeat.classList.remove("down-arrow-mob")
    
    upArrowComp.classList.remove("up-arrow-mob")
    downArrowComp.classList.remove("down-arrow-mob")
}







const swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    breakpoints: {
        767 : {
            slidesPerView: 2,
        },
        1000 : {
            slidesPerView: 3,
        }
    },
    spaceBetween: 60,
    // slidesPerGroup: 'auto',
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

