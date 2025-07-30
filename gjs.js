// Function to check if the gallery section is in view
function isGalleryInView() {
    const galleryContainer = document.querySelector('.gggallery-container');
    const galleryTop = galleryContainer.offsetTop;
    const galleryHeight = galleryContainer.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;
  
    return scrollPosition > galleryTop && window.scrollY < galleryTop + galleryHeight;
  }
  
  let isAnimating = false;
  
  window.addEventListener('scroll', () => {
    const galleryRows = document.querySelectorAll('.gggallery-row');
  
    if (isGalleryInView() && !isAnimating) {
      isAnimating = true;
      galleryRows.forEach((row, index) => {
        if (index % 2 === 0) {
          row.classList.add('animate');
          row.classList.remove('reverse');
        } else {
          row.classList.add('reverse');
          row.classList.remove('animate');
        }
      });
    } else if (!isGalleryInView() && isAnimating) {
      isAnimating = false;
      galleryRows.forEach((row) => {
        row.classList.remove('animate', 'reverse');
      });
    }
  });
  