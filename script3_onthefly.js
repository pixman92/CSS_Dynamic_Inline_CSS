function applyResponsiveStyles(cssText, elementId, innerHTML, newElementId) {
  let currentMedia = 'xl'; // Default media breakpoint
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

    extractStyles();
  }

  /**
   * Extract and apply the CSS styles for the current media breakpoint
   */
  function extractStyles() {
    let styles = ''; // CSS styles string

    const regex = new RegExp(`${currentMedia}:(.*?)(?:\\[(.*?)\\]|;)`, 'g');
    const matches = cssText.match(regex);

    if (matches) {
      matches.forEach(match => {
        const [_, property, value] = match.match(`${currentMedia}:(.*?)(?:\\[(.*?)\\]|;)`);
        styles += `${property}:${value};`;
      });
    }

    applyStyles(newElement, styles);
  }

  // Event listener for window resize
  window.addEventListener('resize', updateCurrentMedia);

  // Get the reference to the existing element
  existingElement = document.getElementById(elementId);

  // Create the new element once
  createNewElement();

  // Initial style application
  extractStyles();
}

// function applyResponsiveStyles(cssText, elementId, innerHTML) {
//   let currentMedia = 'xl'; // Default media breakpoint

//   /**
//    * Apply styles to the element
//    * @param {HTMLElement} element - The HTML element to apply styles to
//    * @param {string} styles - The CSS styles string to apply
//    */
//   function applyStyles(element, styles) {
//     element.setAttribute('style', styles);
//   }

//   /**
//    * Update the current media breakpoint based on the window width
//    */
//   function updateCurrentMedia() {
//     const windowWidth = window.innerWidth;

//     if (windowWidth < 576) {
//       currentMedia = 'sm';
//     } else if (windowWidth < 768) {
//       currentMedia = 'md';
//     } else if (windowWidth < 992) {
//       currentMedia = 'lg';
//     } else {
//       currentMedia = 'xl';
//     }

//     const element = document.getElementById(elementId);
//     extractStyles(element);
//   }

//   /**
//    * Extract and apply the CSS styles for the current media breakpoint
//    * @param {HTMLElement} element - The HTML element to apply styles to
//    */
//   function extractStyles(element) {
//     let styles = ''; // CSS styles string

//     const regex = new RegExp(`${currentMedia}:(.*?)(?:\\[(.*?)\\]|;)`, 'g');
//     const matches = cssText.match(regex);

//     if (matches) {
//       matches.forEach(match => {
//         const [_, property, value] = match.match(`${currentMedia}:(.*?)(?:\\[(.*?)\\]|;)`);
//         styles += `${property}:${value};`;
//       });
//     }

//     const newElement = document.createElement('div');
//     newElement.innerHTML = innerHTML;
//     applyStyles(newElement, styles);
//     element.innerHTML = newElement.outerHTML;
//   }

//   // Event listener for window resize
//   window.addEventListener('resize', updateCurrentMedia);

//   // Initial style application
//   const element = document.getElementById(elementId);
//   extractStyles(element);
// }
