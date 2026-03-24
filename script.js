// NexaCorp HR Portal — Shared JavaScript

// Mobile nav toggle
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('open');
}

// Job filter function (Careers page)
function filterJobs(dept, btn) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Show/hide job cards
  document.querySelectorAll('.job-card').forEach(card => {
    if (dept === 'all' || card.dataset.dept === dept) {
      card.style.display = 'flex';
      card.style.animation = 'fadeUp 0.3s ease both';
    } else {
      card.style.display = 'none';
    }
  });
}

// Fade-in on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.card, .benefit-card, .course-card, .value-card, .team-card, .stat');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// Run on DOM load
document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();

  // Close mobile nav when link clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('open');
    });
  });
});
