// Toggle mobile menu
document.getElementById("menu-toggle").addEventListener("click", function() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
});


// ===== Mobile menu toggle =====
document.getElementById("menu-toggle").addEventListener("click", function() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
});

// ===== Scroll-triggered animations =====
const scrollElements = document.querySelectorAll(".animate-on-scroll");

const elementInView = (el, offset = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= 
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};

const displayScrollElement = (el) => {
  el.classList.add("active");
};

const hideScrollElement = (el) => {
  el.classList.remove("active");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 150)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

// Trigger on load
handleScrollAnimation();








// ===== Mobile menu toggle (keep your old code if needed) =====
document.getElementById("menu-toggle")?.addEventListener("click", function() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
});

// ===== Icy Snow Animation =====
function createSnowflake() {
  const snowContainer = document.querySelector('.snow-container');
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄';

  // Random size and position
  const size = Math.random() * 20 + 10 + 'px';
  snowflake.style.fontSize = size;
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = (Math.random() * 3 + 4) + 's'; // 4–7 seconds
  snowflake.style.opacity = Math.random();

  snowContainer.appendChild(snowflake);

  // Remove after animation ends
  setTimeout(() => {
    snowflake.remove();
  }, 7000);
}

// Generate continuous snowfall
setInterval(createSnowflake, 200);

// Optional: frosty glow on title
window.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) heroTitle.classList.add('frosty-text');
});




// ===== Mobile menu toggle (keep your navbar script) =====
document.getElementById("menu-toggle")?.addEventListener("click", function() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
});

// ===== Snowfall Effect =====
function createSnowflake() {
  const snowContainer = document.querySelector('.snow-container');
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄';

  // Random size and position
  const size = Math.random() * 20 + 10 + 'px';
  snowflake.style.fontSize = size;
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = (Math.random() * 3 + 4) + 's';
  snowflake.style.opacity = Math.random();

  snowContainer.appendChild(snowflake);

  // Remove after animation ends
  setTimeout(() => snowflake.remove(), 7000);
}

setInterval(createSnowflake, 200);

// ===== Sparkling Ice Effect =====
function createSparkle() {
  const sparkleContainer = document.querySelector('.sparkle-container');
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');

  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  sparkle.style.top = Math.random() * window.innerHeight + 'px';
  sparkle.style.animationDuration = (Math.random() * 5 + 3) + 's';
  sparkle.style.animationDelay = Math.random() * 2 + 's';
  sparkle.style.width = Math.random() * 5 + 2 + 'px';
  sparkle.style.height = sparkle.style.width;

  sparkleContainer.appendChild(sparkle);

  // Remove after a few seconds
  setTimeout(() => sparkle.remove(), 8000);
}

// Generate sparkles continuously
setInterval(createSparkle, 150);

// ===== Optional: Frosty title effect =====
window.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) heroTitle.classList.add('frosty-text');
});
