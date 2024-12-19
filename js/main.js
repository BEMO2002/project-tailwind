//mobile nav

const mobileNav = document.querySelector(".view");
const closeBtn = document.querySelector(".close-btn");
const closeBtnIcn = document.querySelector(".close-btn-icon");




const arrowLeftClass = 'ri-arrow-left-double-fill';
const arrowRightClass = 'ri-arrow-right-double-fill';


closeBtn.addEventListener("click" , () => {
    if(mobileNav.style.left === "-300px" || mobileNav.style.left === ""  ){
        mobileNav.style.left = "0";
        closeBtnIcn.classList.toggle(arrowLeftClass);
        closeBtnIcn.classList.toggle(arrowRightClass);
    }else{
        mobileNav.style.left = "-300px";
    }
});





// swiper

const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable : true ,
        autoplay : true,
    },

});



//faq
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
    const faqButton = item.querySelector('.faq__btn');
    const paras = item.querySelectorAll('.answer'); 

    faqButton.addEventListener('click', () => {
        paras.forEach((para) => {
            if (para.style.display === "none" || para.style.display === "") {
                para.style.display = "block";
                const iconElement = faqButton.querySelector("i");
                iconElement.classList =`  ${iconClass} text-2xl`;
            } else {
                para.style.display = "none";
            }
        });
    });
});




// scroll animation


const sr = ScrollReveal({
    origin : 'bottom',
    distance : '60px',
    duration : 3000,
    delay : 300,
    // reset : true,
})




//hero
sr.reveal('.hero__text' , {origin: 'top'});
sr.reveal('.hero__img');


//stats
sr.reveal('.stats__item' ,{
    delay : 300,
    distance : '100px',
    interval : 100,
    origin : 'top'
});


//services
sr.reveal('.services');
sr.reveal('.services__top');
sr.reveal('.services__item' , {
    delay : 300,
    distance : '100px',
    interval : 100,
    origin : 'bottom'
});

//appointment
sr.reveal('.appointment__title');
sr.reveal('.appointment__form');

//testimonials
sr.reveal('.testimonials');
sr.reveal('.testimonials__constainer');



//team
sr.reveal('.team__title');
sr.reveal('.team__slider');



//faq
sr.reveal('.faq__title');
sr.reveal('.faq__item' ,{
    delay : 300,
    distance : '100px',
    interval : 100,
    origin : 'left'
});


//department
sr.reveal('.departments__bg');
sr.reveal('.departments__container');


//blog
sr.reveal('.blog__title');
sr.reveal('.blog__post' , {
    delay : 300,
    distance : '100px',
    interval : 100,
    origin : 'bottom'
});



//brands
sr.reveal('.brands__logo' , {
    delay : 300,
    distance : '100px',
    interval : 100,
    origin : 'bottom'
});




// news
sr.reveal('.newsletter');
sr.reveal('.newsletter__container');


//footer
sr.reveal('.footer__item' , {
    delay : 300,
    distance : '100px',
    interval : 100,
    origin : 'bottom'
});