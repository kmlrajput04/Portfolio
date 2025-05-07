document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('hire-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      
      try {
          const response = await fetch(form.action, {
              method: 'POST',
              body: new FormData(form),
              headers: {
                  'Accept': 'application/json'
              }
          });

          if (response.ok) {
              status.textContent = 'Thank you! Your message has been sent.';
              status.className = 'success';
              form.reset();
          } else {
              throw new Error('Form submission failed');
          }
      } catch (error) {
          status.textContent = 'Error sending message. Please email me directly at ak.268rajput@gmail.com';
          status.className = 'error';
          console.error('Error:', error);
      } finally {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
          setTimeout(() => {
              status.style.display = 'none';
          }, 5000);
      }
  });
});
