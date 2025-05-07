// progreess bar 
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

// services.js
document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const width = bar.getAttribute('data-width') || '0';
      bar.style.width = width + '%';
    });
  

    
    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 30px rgba(78, 154, 241, 0.3)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
      });
    });
  
    // Testimonial animations with Intersection Observer
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 200);
        }
      });
    }, { threshold: 0.1 });
  
    testimonialCards.forEach(card => {
      testimonialObserver.observe(card);
    });
  
    // // Globe animation
    // const globe = document.querySelector('.globe-animation');
    // let rotation = 0;
    // const globeInterval = setInterval(() => {
    //   rotation += 0.5;
    //   if (globe) {
    //     globe.style.transform = `rotate(${rotation}deg)`;
    //   } else {
    //     clearInterval(globeInterval);
    //   }
    // }, 50);
  
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Scroll to top button
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
  
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          scrollTopBtn.style.opacity = '1';
          scrollTopBtn.style.visibility = 'visible';
        } else {
          scrollTopBtn.style.opacity = '0';
          scrollTopBtn.style.visibility = 'hidden';
        }
      });
    }
  });
// Interactive Map with Country Details
document.addEventListener('DOMContentLoaded', function() {
  // Country data with real information
  const countryData = {
    usa: {
      name: "United States",
      flag: "https://flagcdn.com/w40/us.png",
      clients: 15,
      projects: 28,
      since: 2016,
      detail: "Our largest client base with Fortune 500 companies and innovative startups across Silicon Valley and New York."
    },
    uk: {
      name: "United Kingdom",
      flag: "https://flagcdn.com/w40/gb.png",
      clients: 9,
      projects: 14,
      since: 2018,
      detail: "Strategic partnerships with London-based financial institutions and e-commerce businesses."
    },
    uae: {
      name: "United Arab Emirates",
      flag: "https://flagcdn.com/w40/ae.png",
      clients: 6,
      projects: 11,
      since: 2019,
      detail: "Dubai-based real estate and tourism clients with high-end web solutions for luxury markets."
    },
    india: {
      name: "India",
      flag: "https://flagcdn.com/w40/in.png",
      clients: 22,
      projects: 35,
      since: 2015,
      detail: "Our development hub with diverse projects from Bangalore to Delhi, serving both local and international clients."
    },
    australia: {
      name: "Australia",
      flag: "https://flagcdn.com/w40/au.png",
      clients: 7,
      projects: 12,
      since: 2019,
      detail: "Melbourne and Sydney-based clients in education, healthcare, and renewable energy sectors."
    }
  };

  // DOM Elements
  const pins = document.querySelectorAll('.location-pin');
  const countryInfo = document.querySelector('.country-info');
  const countryName = document.querySelector('.country-name');
  const countryFlag = document.querySelector('.country-flag');
  const clientsEl = document.getElementById('clients');
  const projectsEl = document.getElementById('projects');
  const sinceEl = document.getElementById('since');
  const countryDetail = document.querySelector('.country-detail');
  const closeBtn = document.querySelector('.close-info');

  // Show country info function
  function showCountryInfo(countryCode) {
    const country = countryData[countryCode];
    
    // Update DOM elements
    countryName.textContent = country.name;
    countryFlag.src = country.flag;
    countryFlag.alt = `${country.name} Flag`;
    
    // Animate numbers counting up
    animateValue(clientsEl, 0, country.clients, 1000);
    animateValue(projectsEl, 0, country.projects, 1000);
    
    sinceEl.textContent = country.since;
    countryDetail.textContent = country.detail;
    
    // Show panel
    countryInfo.classList.add('active');
  }

  // Number animation function
  function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  // Add click events to pins
  pins.forEach(pin => {
    pin.addEventListener('click', function(e) {
      e.stopPropagation();
      const countryCode = this.getAttribute('data-country');
      showCountryInfo(countryCode);
    });
  });

  // Close info panel
  closeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    countryInfo.classList.remove('active');
  });

  // Close panel when clicking outside
  document.addEventListener('click', function() {
    countryInfo.classList.remove('active');
  });

  // Prevent closing when clicking inside panel
  countryInfo.addEventListener('click', function(e) {
    e.stopPropagation();
  });

  // Initialize with first country (optional)
  // showCountryInfo('usa');
});