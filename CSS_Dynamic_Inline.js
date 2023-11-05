function applyResponsiveStyles(cssText, elementId, innerHTML, newElementId) {
  let currentMedia = 'xl'; // Default media breakpoint
  let existingElement; // Reference to the existing HTML element
  let newElement; // Reference to the new HTML element
  let allStyles = {}; // Store "all" CSS properties and values

  /**
   * Apply styles to the element
   * @param {HTMLElement} element - The HTML element to apply styles to
   * @param {string} styles - The CSS styles string to apply
   */
  function applyStyles(element, styles) {
    element.setAttribute('style', styles);
  }

  /**
   * Create the new element with the provided inner HTML
   */
  function createNewElement() {
    newElement = document.createElement('div');
    newElement.innerHTML = innerHTML;

    if (newElementId) {
      newElement.id = newElementId; // Set the ID of the new element
    }

    existingElement.appendChild(newElement);
  }

  /**
   * Update the current media breakpoint based on the window width
   */
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

    applyResponsiveStyles();
  }

  /**
   * Apply the responsive styles and class names to the new element
   */
  function applyResponsiveStyles() {
    let styles = ''; // CSS styles string
    let classList = ''; // Class list string

    const regex = /([a-z]+):(.*?)(?:\[(.*?)\]|;)/g;
    const matches = cssText.matchAll(regex);

    for (const match of matches) {
      const [, media, property, value] = match;
      if (media === currentMedia && property && value) {
        if (media === 'all') {
          allStyles[property] = value; // Store "all" styles
        } else {
          allStyles[property] = ''; // Clear "all" styles
          styles += `${property}:${value};`;
        }
      }
    }

    const classRegex = new RegExp(`${currentMedia}:(?:\\[(.*?)\\]|;)`, 'g');
    const classMatches = cssText.matchAll(classRegex);

    for (const classMatch of classMatches) {
      const [, className] = classMatch;
      if (className) {
        classList += `${className} `;
      }
    }

    // Apply "all" styles first
    for (const property in allStyles) {
      styles += `${property}:${allStyles[property]};`;
    }

    applyStyles(newElement, styles);

    if (classList) {
      newElement.className = classList.trim();
    }
  }

  // Event listener for window resize
  window.addEventListener('resize', updateCurrentMedia);

  // Get the reference to the existing element
  existingElement = document.getElementById(elementId);

  // Create the new element once
  createNewElement();

  // Initial style and class application
  applyResponsiveStyles();
}
