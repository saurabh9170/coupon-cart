// 1. Search Functionality
function handleSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  if (input) {
    alert(`Searching for: ${input}`);
    // Simulate redirect or filter
  } else {
    alert("Please enter a search term.");
  }
}

// 2. Testimonials Rotator
const testimonials = [
  {
    name: "Aarav P.",
    feedback: "Sold my Amazon card in less than 2 hours. Super easy!",
  },
  {
    name: "Sneha K.",
    feedback: "Best platform for cashback and unused gift card resale!",
  },
  {
    name: "Rahul S.",
    feedback: "I’ve made over ₹2000 selling old cards here. Love it!",
  }
];

let testimonialIndex = 0;

function updateTestimonial() {
  const section = document.getElementById("testimonialSection");
  const t = testimonials[testimonialIndex];
  section.innerHTML = `
    <div class="testimonial-card">
      <p>"${t.feedback}"</p>
      <h5>- ${t.name}</h5>
    </div>
  `;
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

// Rotate testimonials every 5 seconds
setInterval(updateTestimonial, 5000);
window.onload = updateTestimonial;

// 3. Step Hover Effect (for animation)
document.querySelectorAll('.step').forEach(step => {
  step.addEventListener('mouseenter', () => {
    step.style.transform = 'scale(1.05)';
    step.style.transition = 'transform 0.3s ease-in-out';
  });
  step.addEventListener('mouseleave', () => {
    step.style.transform = 'scale(1)';
  });
});

// 4. Validate gift card brand input
document.querySelector('.hero input[type="text"]').addEventListener('blur', (e) => {
  const value = e.target.value.trim();
  if (!value) {
    alert("Please enter a brand or store name.");
  }
});

// 5. Dark Mode Toggle (Bonus)
const footer = document.querySelector(".footer");
const toggle = document.createElement("button");
toggle.textContent = "🌓 Toggle Dark Mode";
toggle.style = "margin: 10px auto; display: block; padding: 8px 16px;";
footer.appendChild(toggle);

toggle.addEventListener('click', () => {
  document.body.classList.toggle("dark-mode");
});
