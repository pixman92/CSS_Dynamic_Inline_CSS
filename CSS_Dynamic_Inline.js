function applyResponsiveStyles(cssText, elementId, innerHTML, newElementId) {
  let existingElement; // Reference to the existing HTML element
  let newElement; // Reference to the new HTML element

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
   * Apply the responsive styles and class names to the new element
   */
  function applyResponsiveStyles() {
    let styles = ''; // CSS styles string

    // Find all class names in the CSS text
    const classRegex = /class:(.*?)\{(.*?)\}/g;
    const classMatches = cssText.matchAll(classRegex);

    // Check if any class name contains a '$'
    for (const classMatch of classMatches) {
      const [, classNames, properties] = classMatch;
      if (classNames.includes('$')) {
        const regex = /([a-z]+):(.*?)(?:\[(.*?)\]|;)/g;
        const matches = properties.matchAll(regex);
        
        for (const match of matches) {
          const [, media, property, value] = match;
          if (media === 'all' || media === currentMedia) {
            styles += `${property}:${value};`;
          }
        }
      }
    }

    applyStyles(newElement, styles);
  }

  // Event listener for window resize
  window.addEventListener('resize', applyResponsiveStyles);

  // Get the reference to the existing element
  existingElement = document.getElementById(elementId);

  // Create the new element once
  createNewElement();

  // Initial style application
  applyResponsiveStyles();
}
