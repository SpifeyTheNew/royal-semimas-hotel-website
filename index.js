// reveal system for scroll animation
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.2
});

reveals.forEach(el => observer.observe(el));



// sending message from contact form
function sendToWhatsApp(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let phone = "243819857780";

    let text = `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`;
    let encodedText = encodeURIComponent(text);

    let url = `https://wa.me/${phone}?text=${encodedText}`;

    window.open(url, '_blank');
}
// list of rooms with details
const rooms = [
  {
    title: "Chambre Exécutive",
    description: "Vivez le luxe et le confort dans nos chambres exécutives...",
    price: "100$/Nuit",
    mainImage: "images/room-1.jpg",
    thumbs: ["images/room-1.jpg", "images/room-2.jpg", "images/room-3.jpg"],
  },
  {
    title: "Chambre Deluxe",
    description: "Confort moderne avec vue imprenable...",
    price: "150$/Nuit",
    mainImage: "images/room-4.jpg",
    thumbs: ["images/room-4.jpg", "images/room-5.jpg", "images/room-6.jpg"],
  },
  {
    title: "Suite Junior",
    description: "Espace élégant avec coin salon et vue panoramique...",
    price: "180$/Nuit",
    mainImage: "images/room-3.jpg",
    thumbs: ["images/room-2.jpg", "images/room-1.jpg", "images/room-2.jpg"],
  },
  {
    title: "Suite Présidentielle",
    description: "Le summum du luxe avec salon privé et terrasse...",
    price: "300$/Nuit",
    mainImage: "images/room-4.jpg",
    thumbs: ["images/room-1.jpg", "images/room-1.jpg", "images/room-2.jpg"],
  },
  {
    title: "Chambre Standard",
    description: "Simple et confortable, idéale pour une nuit de repos...",
    price: "70$/Nuit",
    mainImage: "images/room-2.jpg",
    thumbs: ["images/room-1.jpg", "images/room-4.jpg", "images/room-3.jpg"],
  },
  {
    title: "Chambre Supérieure",
    description: "Un espace raffiné avec tous les équipements modernes...",
    price: "120$/Nuit",
    mainImage: "images/room-3.jpg",
    thumbs: ["images/room-2.jpg", "images/room-3.jpg", "images/room-1.jpg"],
  },
  {
    title: "Suite Famille",
    description: "Parfaite pour les familles, avec chambres séparées...",
    price: "200$/Nuit",
    mainImage: "images/room-2.jpg",
    thumbs: ["images/room-4.jpg", "images/room-2.jpg", "images/room-1.jpg"],
  },
  {
    title: "Chambre Luxe Vue Mer",
    description: "Admirez la mer depuis votre balcon privé...",
    price: "220$/Nuit",
    mainImage: "images/room-2.jpg",
    thumbs: ["images/room-2.jpg", "images/room-3.jpg", "images/room-4.jpg"],
  },
  {
    title: "Suite Romantique",
    description: "Idéale pour les couples, avec ambiance cosy et jacuzzi...",
    price: "250$/Nuit",
    mainImage: "images/room-4.jpg",
    thumbs: ["images/room-2.jpg", "images/room-3.jpg", "images/room-2.jpg"],
  },
  {
    title: "Chambre Économique",
    description: "Pratique et abordable, parfaite pour un séjour court...",
    price: "60$/Nuit",
    mainImage: "images/room-2.jpg",
    thumbs: ["images/room-2.jpg", "images/room-2.jpg", "images/room-3.jpg"],
  },
  {
    title: "Suite Spa",
    description: "Relaxation totale avec spa privé et espace bien-être...",
    price: "280$/Nuit",
    mainImage: "images/room-1.jpg",
    thumbs: ["images/room-1.jpg", "images/room-2.jpg", "images/room-4.jpg"],
  },
  {
    title: "Chambre Penthouse",
    description:
      "Une vue exceptionnelle sur la ville depuis le dernier étage...",
    price: "350$/Nuit",
    mainImage: "images/room-4.jpg",
    thumbs: ["images/room-3.jpg", "images/room-5.jpg", "images/room-3.jpg"],
  },
  {
    title: "Suite Loft",
    description:
      "Grand espace ouvert avec décoration moderne et design unique...",
    price: "270$/Nuit",
    mainImage: "images/room-1.jpg",
    thumbs: ["images/room-2.jpg", "images/room-3.jpg", "images/room-4.jpg"],
  },
];
// system of lightbox to display room details and images
function openLightbox(index) {
  const room = rooms[index];
  document.getElementById("roomLightbox").style.display = "block";
  document.getElementById("currentImage").src = room.mainImage;
  document.getElementById("roomTitle").innerText = room.title;
  document.getElementById("roomDesc").innerText = room.description;
  document.getElementById("roomPrice").innerText = room.price;

  // Remplir la galerie de miniatures
  const gallery = document.getElementById("thumbGallery");
  gallery.innerHTML = ""; 
  room.thumbs.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.onclick = () => (document.getElementById("currentImage").src = src);
    gallery.appendChild(img);
  });
}

function closeLightbox() {
  document.getElementById("roomLightbox").style.display = "none";
}
// menu button system for mobile view
const bar = document.querySelector(".fa-bars");
const navlist = document.querySelector(".navlist");

bar.addEventListener("click", () => {
  navlist.classList.toggle("open");
  bar.classList.toggle("fa-xmark");
});

window.onscroll = () => {
  navlist.classList.remove("open");
  bar.classList.remove("fa-xmark");
};
// swiper system for the homepage and  testimonials section
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".myswiper", {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
