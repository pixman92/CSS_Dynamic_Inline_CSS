function applyResponsiveStyles(cssText, elementId) {
  let currentMedia = 'xl'; // Default media breakpoint
  let savedStyles = ''; // String to store the matching styles

  function applyStyles() {
    const element = document.getElementById(elementId);
    element.style.cssText = savedStyles;
  }

  function updateCurrentMedia() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 576) {
      currentMedia = 'sm';
    } else if (windowWidth < 768) {
      currentMedia = 'md';
    } else if (windowWidth < 992) {
      currentMedia = 'lg';
    } else {
      currentMedia = 'xl';
    }
  }

  function extractStyles() {
    savedStyles = ''; // Reset the savedStyles string

    const regex = new RegExp(`${currentMedia}:(.*?)(?:\\[(.*?)\\]|;)`, 'g');
    const matches = cssText.match(regex);

    if (matches) {
      matches.forEach(match => {
        const [_, styles, predefinedClass] = match.match(`${currentMedia}:(.*?)(?:\\[(.*?)\\]|;)`);
        if (predefinedClass) {
          savedStyles += `${predefinedClass} `;
        } else {
          savedStyles += `${styles.trim()}; `;
        }
      });
    }

    applyStyles();
  }

  // Event listener for window resize
  window.addEventListener('resize', () => {
    updateCurrentMedia();
    extractStyles();
  });

  // Initial style application
  updateCurrentMedia();
  extractStyles();
}
