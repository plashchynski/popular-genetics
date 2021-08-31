window.onload = () => {
  // convert all dates to local date format
  document.querySelectorAll(".publication_date").forEach((dateDiv) => {
    const originalFormat = dateDiv.innerHTML;
    const localDateString = new Date(originalFormat).toLocaleDateString();
    dateDiv.innerHTML = localDateString;
  });
};
