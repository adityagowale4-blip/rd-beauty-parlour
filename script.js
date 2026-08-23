// =============================== 
// RD Beauty Parlour 
// Premium Landing Page Script 
// =============================== 
// Smooth scroll for navbar links 
document.querySelectorAll('a[href^="#"]').forEach(link => { 
link.addEventListener("click", function(e) { 
e.preventDefault(); 
const target = document.querySelector(this.getAttribute("href")); 
if(target){ 
target.scrollIntoView({ 
behavior: "smooth" 
}); 
} 
}); 
}); 
// Navbar background on scroll 
const header = document.querySelector("header"); 
window.addEventListener("scroll", () => { 
if(window.scrollY > 80){ 
header.style.background = "rgba(0,0,0,.85)"; 
header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)"; 
}else{ 
header.style.background = "rgba(0,0,0,.55)"; 
header.style.boxShadow = "none"; 
} 
}); 
// Reveal animation 
const reveals = document.querySelectorAll( 
".card, .gallery-grid img, .testimonial-box, .about, .contact-box" 
); 
function reveal(){ 
reveals.forEach(item=>{ 
const top = item.getBoundingClientRect().top; 
const windowHeight = window.innerHeight; 
if(top < windowHeight - 100){ 
item.style.opacity = "1"; 
item.style.transform = "translateY(0)"; 
} 
}); 
} 
reveals.forEach(item=>{ 
item.style.opacity = "0"; 
item.style.transform = "translateY(50px)"; 
item.style.transition = "all .8s ease"; 
}); 
window.addEventListener("scroll", reveal); 
reveal(); 
// WhatsApp button 
const whatsapp = document.querySelector(".whatsapp"); 
whatsapp.addEventListener("click",(e)=>{ 
e.preventDefault(); 
window.open( 
"https://wa.me/917389048276", 
"_blank" 
); 
}); 
// Current year in footer (optional) 
const year = new Date().getFullYear(); 
const footer = document.querySelector("footer p:last-child"); 
if(footer){ 
footer.innerHTML = © ${year} RD Beauty Parlour. All Rights Reserved.; 
}
const slides = document.getElementById("slides"); 
const reviews = document.querySelectorAll(".review"); 
let index = 0; 
const total = reviews.length; 
function nextSlide() { 
index++; 
if (index >= total) { 
index = 0; 
} 
slides.style.transform = `translateX(-${index * 100}%`); 
} 
// Change review every 5 seconds 
if (slides) {
    setInterval(nextSlide, 5000);
}
const observer = new IntersectionObserver((entries) => { 
entries.forEach((entry) => { 
if (entry.isIntersecting) { 
entry.target.classList.add("show"); 
} 
}); 
}); 
const hiddenElements = document.querySelectorAll(".hidden"); 
hiddenElements.forEach((el) => observer.observe(el));