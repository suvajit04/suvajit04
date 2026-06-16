// Smooth scrolling and active nav link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 70;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      updateActiveNav();
    }
  });
});

// Update active nav link on scroll
window.addEventListener('scroll', updateActiveNav);

function updateActiveNav() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === currentSection) {
      link.classList.add('active');
    }
  });
}

// Scroll to section function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = 70;
    const targetPosition = section.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

// Close menu when link is clicked
if (navMenu) {
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-category, .contact-link').forEach(el => {
  observer.observe(el);
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const stars = document.querySelector('.stars');
  if (stars) {
    stars.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add glitch effect animation
const glitch = document.querySelector('.glitch');
if (glitch) {
  setInterval(() => {
    if (Math.random() > 0.95) {
      glitch.style.animation = 'glitch 0.1s';
      setTimeout(() => {
        glitch.style.animation = 'glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite';
      }, 100);
    }
  }, 1000);
}

// Dynamically load GitHub data (optional)
async function loadGitHubData() {
  try {
    const response = await fetch('https://api.github.com/users/suvajit04');
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();
    console.log('GitHub User Data:', data);
    // Update profile info if needed
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
  }
}

// Call on page load
window.addEventListener('load', () => {
  loadGitHubData();
  updateActiveNav();
});

// Keyboard navigation (arrow keys)
document.addEventListener('keydown', (e) => {
  const sections = ['home', 'projects', 'skills', 'contact'];
  const navLinks = document.querySelectorAll('.nav-link');
  let currentIndex = -1;
  
  navLinks.forEach((link, index) => {
    if (link.classList.contains('active')) {
      currentIndex = index;
    }
  });
  
  if (e.key === 'ArrowRight' && currentIndex < navLinks.length - 1) {
    scrollToSection(sections[currentIndex + 1]);
  } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
    scrollToSection(sections[currentIndex - 1]);
  }
});

// Add cursor glow effect (optional)
document.addEventListener('mousemove', (e) => {
  const cursorGlow = document.createElement('div');
  cursorGlow.className = 'cursor-glow';
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
  document.body.appendChild(cursorGlow);
  
  setTimeout(() => {
    cursorGlow.remove();
  }, 500);
});

// Add more interactivity
document.querySelectorAll('.project-card').forEach((card, index) => {
  card.addEventListener('mouseenter', () => {
    card.style.zIndex = 10;
  });
});

console.log('%c🎮 SUVAJIT\'S GAMING PORTFOLIO 🎮', 'color: #00d4ff; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px rgba(0, 212, 255, 0.8);');
console.log('%cWelcome to my interactive gaming UI portfolio!', 'color: #ff006e; font-size: 14px;');
console.log('%cCheck out the projects, skills, and get in touch!', 'color: #ffbe0b; font-size: 12px;');