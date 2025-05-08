// ************************** services ***************************

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const itemWidth = items[0].offsetWidth + 30; // width + gap
    let currentIndex = 0;
    const visibleItems = 2;
    const totalItems = items.length;

    // Clone first two items and append to end for infinite effect
    for (let i = 0; i < visibleItems; i++) {
        const clone = items[i].cloneNode(true);
        track.appendChild(clone);
    }

    function moveCarousel() {
        currentIndex = (currentIndex + 1) % (totalItems);
        
        // For infinite loop, reset to start when reaching cloned items
        if (currentIndex === totalItems) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentIndex = 0;
                track.style.transform = `translateX(0)`;
                setTimeout(() => {
                    track.style.transition = 'transform 0.5s ease-in-out';
                }, 50);
            }, 500);
        }
        
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex % (totalItems / visibleItems));
        });
    }

    // Auto-rotate every 2 seconds
    let interval = setInterval(moveCarousel, 2000);

    // Pause on hover
    track.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });

    track.addEventListener('mouseleave', () => {
        interval = setInterval(moveCarousel, 2000);
    });

    // Click on dots to navigate
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            clearInterval(interval);
            currentIndex = parseInt(dot.dataset.index);
            track.style.transform = `translateX(-${currentIndex * itemWidth * visibleItems}px)`;
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            interval = setInterval(moveCarousel, 2000);
        });
    });
});

//special skill section 


document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    // Animate progress bars when they come into view
    const animateOnScroll = () => {
      progressBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.8;
        
        if (barPosition < screenPosition) {
          const width = bar.getAttribute('data-width');
          bar.style.width = width + '%';
        }
      });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
  });



// **************project section start*********************************************** 




document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel-container');
  const cards = document.querySelectorAll('.project-card');
  const dots = document.querySelectorAll('.nav-dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const cardWidth = cards[0].offsetWidth + 30; // width + gap
  let currentIndex = 0;
  let autoScrollInterval;
  
  // Initialize carousel
  function updateCarousel() {
    carousel.scrollTo({
      left: currentIndex * cardWidth,
      behavior: 'smooth'
    });
    
    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }
  
  // Auto-scroll every 2 seconds
  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCarousel();
    }, 2000);
  }
  
  // Navigation dots
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(autoScrollInterval);
      currentIndex = parseInt(dot.dataset.index);
      updateCarousel();
      startAutoScroll();
    });
  });
  
  // Arrow buttons
  prevBtn.addEventListener('click', () => {
    clearInterval(autoScrollInterval);
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
    startAutoScroll();
  });
  
  nextBtn.addEventListener('click', () => {
    clearInterval(autoScrollInterval);
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
    startAutoScroll();
  });
  
  // Pause auto-scroll on hover
  carousel.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
  });
  
  carousel.addEventListener('mouseleave', startAutoScroll);
  
  // Start auto-scroll
  startAutoScroll();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    cardWidth = cards[0].offsetWidth + 30;
    updateCarousel();
  });
});


// *********** testimonal section start**********


// JavaScript
const swiper = new Swiper('.testimonial-slider', {
  loop: true,
  autoplay: {
      delay: 5000,
  },
  spaceBetween: 30,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      320: {
          slidesPerView: 1
      },
      768: {
          slidesPerView: 2
      },
      1200: {
          slidesPerView: 3
      }
  }
});


// ******* SKILLS SECTION **********
ddocument.addEventListener('DOMContentLoaded', function() {
  // Enhanced progress bar animation
  const animateProgressBars = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const progressBars = entry.target.querySelectorAll('.skill-progress');
              progressBars.forEach(bar => {
                  const level = bar.getAttribute('data-level');
                  // Reset first to ensure animation plays
                  bar.style.width = '0';
                  // Trigger reflow
                  void bar.offsetWidth;
                  // Animate to actual level
                  bar.style.width = level + '%';
                  bar.style.transition = 'width 1.5s ease-out';
              });
              observer.unobserve(entry.target);
          }
      });
  };
  


  // More reliable Intersection Observer setup
  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
  };

  const skillsSection = document.querySelector('.skills-section');
  if (skillsSection) {
      const observer = new IntersectionObserver(animateProgressBars, options);
      observer.observe(skillsSection);
  }

  // Enhanced hover effects with animation
  const skillCategories = document.querySelectorAll('.skill-category');
  skillCategories.forEach(category => {
      category.addEventListener('mouseenter', () => {
          const icon = category.querySelector('.category-icon i');
          if (icon) {
              icon.style.transform = 'rotate(15deg) scale(1.1)';
          }
      });
      
      category.addEventListener('mouseleave', () => {
          const icon = category.querySelector('.category-icon i');
          if (icon) {
              icon.style.transform = 'rotate(0) scale(1)';
          }
      });
  });
});
  // Intersection Observer for scroll animation
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateProgressBars();
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });
  
  observer.observe(document.querySelector('.skills-section'));
  
  // Add hover effect to skill categories
  const skillCategories = document.querySelectorAll('.skill-category');
  skillCategories.forEach(category => {
      category.addEventListener('mouseenter', () => {
          const icon = category.querySelector('.category-icon i');
          icon.style.transform = 'rotate(15deg) scale(1.1)';
          icon.style.transition = 'transform 0.3s ease';
      });
      
      category.addEventListener('mouseleave', () => {
          const icon = category.querySelector('.category-icon i');
          icon.style.transform = 'rotate(0) scale(1)';
      });
  });

  // Add click effect to AI cards
  const aiCards = document.querySelectorAll('.ai-card');
  aiCards.forEach(card => {
      card.addEventListener('click', () => {
          card.classList.toggle('active');
      });
  });


//   *********************BLOG SECTION*****************

document.addEventListener('DOMContentLoaded', function() {
    // Enhanced intersection observer with smoother animations
    const blogObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll('.blog-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.animation = `cardEntrance 0.8s ease-out ${index * 0.1}s forwards`;
                    }, 50);
                });
                blogObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const blogSection = document.querySelector('.blog-section');
    if (blogSection) blogObserver.observe(blogSection);

    // Enhanced hover effects with GSAP-like smoothness
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)';
            const img = card.querySelector('.blog-image img');
            if (img) img.style.transition = 'transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1)';
        });
    });

    // Click effect for read more buttons
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
                // Add your navigation logic here
                console.log('Navigating to:', button.parentElement.querySelector('h3').textContent);
            }, 300);
        });
    });
});

