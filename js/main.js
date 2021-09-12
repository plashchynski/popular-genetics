window.onload = () => {
  // convert all dates to local date format
  document.querySelectorAll(".publication_date").forEach((dateDiv) => {
    const originalFormat = dateDiv.innerHTML;
    const localDateString = new Date(originalFormat).toLocaleDateString();
    dateDiv.innerHTML = localDateString;
  });

  // glightbox.js is a third-party library for image galleries.
  const lightbox = GLightbox();

  const darkModeToggle = document.querySelector("#darkModeToggle");
  darkModeToggle.addEventListener('click', function(e) {
    document.body.classList.toggle('dark-theme');
  });
};
