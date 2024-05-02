document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const lastModifiedDate = new Date(document.lastModified);
    
    const yearElement = document.getElementById('copyright');
    yearElement.textContent = `© ${currentYear} - Last Modified: ${lastModifiedDate.toLocaleDateString()}`;
  });