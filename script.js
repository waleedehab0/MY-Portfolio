// script.js
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// تحقق من الوضع الحالي من localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '🌞'; // أيقونة الوضع النهاري
} else {
    body.classList.add('light-mode');
    themeToggle.textContent = '🌙'; // أيقونة الوضع الليلي
}

// تبديل الوضع عند النقر على الزر
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙'; // أيقونة الوضع الليلي
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '🌞'; // أيقونة الوضع النهاري
    }
});




// ترجمه //
const translations = {
    en: {
        welcome: "Welcome, I'm Waleed Ehab",
        tagline: "A passionate web developer and AI enthusiast",
        learnMore: "Learn More",
        about: "About Me",
        aboutText: "I am a student passionate about programming and web development. I started my journey with languages like HTML, CSS, and javascript and C++, and I am fascinated by everything related to artificial intelligence and web development. I strive to enhance my skills and contribute to shaping a bright future in these fields.",
        skills: "Skills",
        projects: "Projects",
        project1: "Personal Website",
        project1Desc: "A personal portfolio website built using HTML, CSS, and JavaScript.",
        project2: "XO Game",
        project2Desc: "An interactive Tic-Tac-Toe game developed using JavaScript.",
        project3: "Christmas Tree",
        project3Desc: "An animated Christmas tree website with custom JavaScript effects.",
        contact: "Contact Me",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message",
        downloadCV: "Download CV",
        socialmedia2: "Social Media",
        send: "Send",
        footer: "© 2025 Waleed Ehab. All rights reserved."
    },
    ar: {
        welcome: "مرحبًا، أنا وليد إيهاب",
        tagline: "مطور ويب متحمس ومهتم بالذكاء الاصطناعي",
        learnMore: "تعرف عليّ أكثر",
        about: "عنّي",
        aboutText: "أنا طالب متحمس للبرمجة وتطوير الويب. بدأت رحلتي مع لغات البرمجة مثل HTML وCSS  وjavascript وC++، وأنا مهتم بكل ما يتعلق بالذكاء الاصطناعي وتطوير الويب. أسعى دائمًا لتحسين مهاراتي والمساهمة في تشكيل مستقبل مشرق في هذه المجالات.",
        skills: "المهارات",
        projects: "المشاريع",
        project1: "الموقع الشخصي",
        project1Desc: "موقع شخصي لعرض أعمالي ومهاراتي باستخدام HTML وCSS وJavaScript.",
        project2: "لعبة XO",
        project2Desc: "لعبة Tic-Tac-Toe تفاعلية باستخدام JavaScript.",
        project3: "شجرة الكريسماس",
        project3Desc: "موقع متحرك لشجرة الكريسماس باستخدام JavaScript.",
        contact: "اتصل بي",
        namePlaceholder: "اسمك",
        emailPlaceholder: "بريدك الإلكتروني",
        messagePlaceholder: "رسالتك",
        downloadCV: "تنزيل السيرة الذاتية",
        socialmedia2: "وسائل التواصل الاجتماعي",
        send: "إرسال",
        footer: "© 2025 وليد إيهاب. جميع الحقوق محفوظة."
    },
    es: {
        welcome: "Bienvenido, soy Waleed Ehab",
        tagline: "Un apasionado desarrollador web y entusiasta de la IA",
        learnMore: "Saber más",
        about: "Sobre mí",
        aboutText: "Soy un estudiante apasionado por la programación y el desarrollo web. Comencé mi viaje con lenguajes como HTML, CSS y javascript y C++, y estoy fascinado por todo lo relacionado con la inteligencia artificial y el desarrollo web. Me esfuerzo por mejorar mis habilidades y contribuir a un futuro brillante en estos campos.",
        skills: "Habilidades",
        projects: "Proyectos",
        project1: "Sitio web personal",
        project1Desc: "Un sitio web de portafolio personal construido con HTML, CSS y JavaScript.",
        project2: "Juego XO",
        project2Desc: "Un juego interactivo de Tic-Tac-Toe desarrollado con JavaScript.",
        project3: "Árbol de Navidad",
        project3Desc: "Un sitio web animado de un árbol de Navidad con efectos personalizados en JavaScript.",
        contact: "Contáctame",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "Tu correo electrónico",
        messagePlaceholder: "Tu mensaje",
        downloadCV: "Descargar CV",
        socialmedia2: "Redes sociales",
        send: "Enviar",
        footer: "© 2025 Waleed Ehab. Todos los derechos reservados."
    },
    de: {
        welcome: "Willkommen, ich bin Waleed Ehab",
        tagline: "Ein leidenschaftlicher Webentwickler und AI-Enthusiast",
        learnMore: "Mehr erfahren",
        about: "Über mich",
        aboutText: "Ich bin ein Student, der sich für Programmierung und Webentwicklung begeistert. Ich habe meine Reise mit Sprachen wie HTML, CSS und javascript und C++ begonnen und bin fasziniert von allem, was mit künstlicher Intelligenz und Webentwicklung zu tun hat. Ich strebe danach, meine Fähigkeiten zu verbessern und eine helle Zukunft in diesen Bereichen zu gestalten.",
        skills: "Fähigkeiten",
        projects: "Projekte",
        project1: "Persönliche Website",
        project1Desc: "Eine persönliche Portfolio-Website, die mit HTML, CSS und JavaScript erstellt wurde.",
        project2: "XO-Spiel",
        project2Desc: "Ein interaktives Tic-Tac-Toe-Spiel, das mit JavaScript entwickelt wurde.",
        project3: "Weihnachtsbaum",
        project3Desc: "Eine animierte Weihnachtsbaum-Website mit benutzerdefinierten JavaScript-Effekten.",
        contact: "Kontaktieren Sie mich",
        namePlaceholder: "Ihr Name",
        emailPlaceholder: "Ihre E-Mail",
        messagePlaceholder: "Ihre Nachricht",
        downloadCV: "Lebenslauf herunterladen",
        socialmedia2: "Soziale Medien",
        send: "Senden",
        footer: "© 2025 Waleed Ehab. Alle Rechte vorbehalten."
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key] || element.textContent;
        if (element.placeholder) {
            element.placeholder = translations[lang][key] || element.placeholder;
        }
    });
}

// Default language
changeLanguage('en');

// EmailJS Integration
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_l4sfde9'; // استبدل بـ Service ID الخاص بك
    const templateID = 'template_vul01fj'; // استبدل بـ Template ID الخاص بك

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, (err) => {
            alert('Failed to send the message, please try again.');
            console.error(err);
        });
});