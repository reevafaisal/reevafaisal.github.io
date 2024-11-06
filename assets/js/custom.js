document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
      event.preventDefault();
      const targetID = anchor.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetID);
      if (targetElement) {
        // Smooth scroll directly to the element without auto-scrolling
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
