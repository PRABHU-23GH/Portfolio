window.addEventListener('scroll', function() {
  const aboutSection = document.querySelector('.about-container');
  const sectionPosition = aboutSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sectionPosition < screenPosition) {
      aboutSection.classList.add('show');
  }
});

// <script>
//       const scriptURL = 'https://script.google.com/macros/s/AKfycbzygQYVpRHP01KEGIYSFIOencyP9E5VfZ0k_mE0pvhV_Z_EnrUdmtyV1zci3evcaCjEKw/exec'
//       const form = document.forms['submit-to-google-sheet']
    
//       form.addEventListener('submit', e => {
//         e.preventDefault()
//         fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//           .then(response => console.log('Success!', response))
//           .catch(error => console.error('Error!', error.message))
//       })
//     </script>