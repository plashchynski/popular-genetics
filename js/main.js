window.onload = () => {
  // convert all dates to local date format
  document.querySelectorAll(".publication_date").forEach((dateDiv) => {
    const originalFormat = dateDiv.innerHTML;
    const localDateString = new Date(originalFormat).toLocaleDateString();
    dateDiv.innerHTML = localDateString;
  });

  // glightbox.js is a third-party library for image galleries.
  const lightbox = GLightbox();

  // Read Dark Mode settings from the operating system level and apply it
  function applyDarkSchemeSettings() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }

  // Add an event listener for operating system color scheme setting update
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyDarkSchemeSettings);
  applyDarkSchemeSettings();

  const darkModeToggle = document.querySelector("#darkModeToggle");
  darkModeToggle.addEventListener('click', function(e) {
    document.body.classList.toggle('dark-theme');
  });
};
