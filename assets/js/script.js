// script.js
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-image');
    const circles = document.querySelectorAll('.circle');
  
    circles.forEach(circle => {
      circle.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        
        images.forEach(img => img.classList.remove('active'));
        circles.forEach(circ => circ.classList.remove('active'));
        
        images[index].classList.add('active');
        this.classList.add('active');
      });
    });
  });
  