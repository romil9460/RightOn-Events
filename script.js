/*=========================================
        RIGHTON EVENTS
        script.js Part 1
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
            NAVBAR
    ==============================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            navbar.style.background = "rgba(8,18,35,.95)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

        } else {

            navbar.style.background = "transparent";
            navbar.style.boxShadow = "none";

        }

    });


    /*==============================
        SMOOTH SCROLL
    ==============================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });


    /*==============================
          MOBILE MENU
    ==============================*/

    const menuBtn = document.querySelector(".menu-btn");

    const navLinks = document.querySelector(".nav-links");

    if(menuBtn){

        menuBtn.addEventListener("click",()=>{

            navLinks.classList.toggle("showMenu");

        });

    }


    /*==============================
        CLOSE MENU AFTER CLICK
    ==============================*/

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("showMenu");

        });

    });


    /*==============================
        ACTIVE NAVIGATION
    ==============================*/

    const sections = document.querySelectorAll("section");

    const navItems = document.querySelectorAll(".nav-links a");


    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const sectionTop=section.offsetTop-120;

            const sectionHeight=section.clientHeight;

            if(pageYOffset>=sectionTop){

                current=section.getAttribute("id");

            }

        });

        navItems.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });


    /*==============================
        SCROLL REVEAL
    ==============================*/

    const revealItems=document.querySelectorAll(

".service-card,.portfolio-item,.founder-card,.stat-card,.why-card,.testimonial-card,.faq-item"

);

    function reveal(){

        const trigger=window.innerHeight*0.88;

        revealItems.forEach(item=>{

            const top=item.getBoundingClientRect().top;

            if(top<trigger){

                item.classList.add("show");

            }

        });

    }

    reveal();

    window.addEventListener("scroll",reveal);

});
/*=========================================
        RIGHTON EVENTS
        script.js Part 2
=========================================*/


/*==============================
      COUNTER ANIMATION
==============================*/

const counters = document.querySelectorAll(".stat-card h2");

const speed = 120;

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const targetText = counter.innerText;

            const target = parseInt(targetText.replace(/\D/g, ""));

            let count = 0;

            const updateCounter = () => {

                const increment = Math.ceil(target / speed);

                count += increment;

                if (count >= target) {

                    counter.innerText = targetText;

                } else {

                    if (targetText.includes("%")) {

                        counter.innerText = count + "%";

                    }

                    else if (targetText.includes("+")) {

                        counter.innerText = count + "+";

                    }

                    else {

                        counter.innerText = count;

                    }

                    requestAnimationFrame(updateCounter);

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});



/*==============================
      FAQ ACCORDION
==============================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const answer = item.querySelector("p");

    answer.style.display = "none";

    item.addEventListener("click", () => {

        const isOpen = answer.style.display === "block";

        faqItems.forEach(faq => {

            faq.querySelector("p").style.display = "none";

        });

        if (!isOpen) {

            answer.style.display = "block";

        }

    });

});



/*==============================
      SCROLL TO TOP
==============================*/

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.className = "scroll-top";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.classList.add("showTop");

    } else {

        scrollBtn.classList.remove("showTop");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/*==============================
    CONTACT FORM VALIDATION
==============================*/

const form = document.querySelector(".contact-form form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector("input[type='text']").value.trim();

        const email = form.querySelector("input[type='email']").value.trim();

        if (name === "" || email === "") {

            alert("Please fill all required fields.");

            return;

        }

        alert("Thank you! Your enquiry has been submitted successfully.");

        form.reset();

    });

}



/*==============================
       HERO FADE EFFECT
==============================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    let value = window.scrollY;

    hero.style.backgroundPositionY = value * 0.4 + "px";

});
/*=========================================
        RIGHTON EVENTS
        script.js Part 3 (Final)
=========================================*/


/*==============================
        HERO TEXT ANIMATION
==============================*/

window.addEventListener("load", () => {

    const heroTitle = document.querySelector(".hero h1");
    const heroText = document.querySelector(".hero p");
    const heroButtons = document.querySelector(".hero-buttons");

    if(heroTitle){
        heroTitle.style.opacity = "0";
        heroTitle.style.transform = "translateY(40px)";

        setTimeout(() => {
            heroTitle.style.transition = "1s";
            heroTitle.style.opacity = "1";
            heroTitle.style.transform = "translateY(0)";
        },300);
    }

    if(heroText){
        heroText.style.opacity = "0";
        heroText.style.transform = "translateY(40px)";

        setTimeout(() => {
            heroText.style.transition = "1s";
            heroText.style.opacity = "1";
            heroText.style.transform = "translateY(0)";
        },700);
    }

    if(heroButtons){
        heroButtons.style.opacity = "0";

        setTimeout(() => {
            heroButtons.style.transition = "1s";
            heroButtons.style.opacity = "1";
        },1000);
    }

});


/*==============================
      BUTTON RIPPLE EFFECT
==============================*/

document.querySelectorAll(".primary-btn,.secondary-btn,.quote-btn").forEach(button=>{

    button.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const diameter=Math.max(this.clientWidth,this.clientHeight);

        const radius=diameter/2;

        circle.style.width=circle.style.height=diameter+"px";

        circle.style.left=e.clientX-this.getBoundingClientRect().left-radius+"px";

        circle.style.top=e.clientY-this.getBoundingClientRect().top-radius+"px";

        circle.classList.add("ripple");

        const ripple=this.getElementsByClassName("ripple")[0];

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});


/*==============================
      IMAGE HOVER EFFECT
==============================*/

document.querySelectorAll(".portfolio-item img").forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        image.style.transform="scale(1.12) rotate(1deg)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="scale(1) rotate(0deg)";

    });

});


/*==============================
     NAVBAR LINK HOVER
==============================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("mouseenter",()=>{

        link.style.transform="translateY(-2px)";

    });

    link.addEventListener("mouseleave",()=>{

        link.style.transform="translateY(0)";

    });

});


/*==============================
      PRELOADER REMOVE
==============================*/

const loader=document.querySelector(".loader");

if(loader){

    window.addEventListener("load",()=>{

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    });

}


/*==============================
      CURRENT YEAR
==============================*/

const year=document.getElementById("year");

if(year){

    year.innerHTML=new Date().getFullYear();

}


/*==============================
      CONSOLE MESSAGE
==============================*/

console.log("%cRightOn Events Website Loaded Successfully 🚀",
"color:#1FA8A0;font-size:18px;font-weight:bold;");

console.log("%cDeveloped with ❤️ for RightOn Events",
"color:#0B1F3A;font-size:14px;");

// Back To Top

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

backToTop.style.display="flex";

}else{

backToTop.style.display="none";

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
// Scroll Progress Bar

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width = progress + "%";

});