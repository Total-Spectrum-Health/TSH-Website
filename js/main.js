// Total Spectrum Health — site scripts (placeholder)

// Set the current year in the footer.
document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
});
