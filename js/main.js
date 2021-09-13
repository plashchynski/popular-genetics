window.onload = () => {
  // convert all dates to local date format
  document.querySelectorAll(".publication_date").forEach((dateDiv) => {
    const originalFormat = dateDiv.innerHTML;
    const localDateString = new Date(originalFormat).toLocaleDateString();
    dateDiv.innerHTML = localDateString;
  });

  // glightbox.js is a third-party library for image galleries.
  const lightbox = GLightbox();

  // Read color scheme preferences from the operating system level and apply it
  function applyColorSchemePrefers() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }

  // Add an event listener for operating system color scheme preferences update
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyColorSchemePrefers);

  // apply color scheme preferences initially during page load
  applyColorSchemePrefers();

  // manually change the color scheme by clicking on the toggle
  const darkModeToggle = document.querySelector("#darkModeToggle");
  darkModeToggle.addEventListener('click', function(e) {
    document.body.classList.toggle('dark-theme');
  });

  // This function enables share button functionality provided by some browsers, mainly on mobile platforms
  // More information: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share
  function activateShareButton(button) {
    button.style.display = 'block';

    // Share must be triggered by "user activation"
    button.addEventListener('click', async () => {
      try {
        const pageDescription = document.getElementsByName('description')[0].getAttribute('content');
        await navigator.share({
          title: document.title,
          text: pageDescription,
          url: window.location.href,
        });
      } catch(error) {
        if (error.name == "AbortError")
          return;

        alert(error);
      }
    });
  }

  // activate share buttons if share functionality is available in the browser
  if (navigator.canShare) {
    const shareButtons = document.querySelectorAll('.share_button');
    shareButtons.forEach((button) => activateShareButton(button));
  }
};
