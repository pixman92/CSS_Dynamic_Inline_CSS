window.addEventListener("resize", ()=>{
handleScreenWidthChange()
});
window.onload = function () {
  // Attach the resize event listener

    if(printIfTrue){
      console.log(determineBreakpoint(window.innerWidth));
      // debugger;
    }
  }

  // Initial execution to apply the CSS for the current screen width
  handleScreenWidthChange();


};

let printIfTrue = false;

function changePrintFunction(trueOrFalse){
  if(trueOrFalse){
    printIfTrue=true;
  }else{
    printIfTrue=false;
  }
}


// Function to determine the breakpoint based on screen width
function determineBreakpoint(screenWidth) {
  if (screenWidth < 480) {
    return "sm"; // Below 480px, set as 'sm'
  } else if (screenWidth < 770) {
    return "md"; // Below 770px, set as 'md'
  } else if (screenWidth < 990) {
    return "lg"; // Below 990px, set as 'lg'
  } else if (screenWidth < 1240) {
    return "xl"; // Below 1240px, set as 'xl'
  } else {
    return "xl"; // Default to 'xl' for larger screen sizes
  }
}

// Function to extract CSS attributes and values from class names
function extractStylesFromClassName(className) {
  const regex = /(sm|md|lg|xl):([^:\[]+)\[([^\]]+)\]/g;
  const styles = [];
  const matches = [...className.matchAll(regex)];
  for (const match of matches) {
    const breakpoint = match[1];
    const attribute = match[2];
    const value = match[3];
    styles.push({ breakpoint, attribute, value });
  }
  return styles;
}

// Function to extract classes from class names
function extractClassesFromClassName(className) {
  const regex = /(sm|md|lg|xl):\[(.*?)\]/g;
  const classes = [];
  const matches = [...className.matchAll(regex)];
  for (const match of matches) {
    const breakpoint = match[1];
    const classString = match[2];
    classes.push({ breakpoint, classString });
  }
  return classes;
}

// Function to compile the CSS data for each HTML element
function compileCSSData() {
  const elements = document.getElementsByClassName("$");
  const cssData = [];
  for (let i = 0; i < elements.length; i++) {
// const dynamicAttributes = ['sm:margin[40px]', 'sm:font-size[40px]', 'sm:color[blue]', 'md:color[red]', 'md:margin[20px]', 'lg:margin[10px]', 'xl:margin[5px]'];
// const elementId = 'target';
// const innerHTML = '<h1>Hello, world!</h1>';
// const dynamicAttributes = ['sm:margin[40px]', 'sm:font-size[40px]', 'sm:color[blue]', 'md:color[red]', 'md:margin[20px]', 'lg:margin[10px]', 'xl:margin[5px]'];
// const elementId = 'target';
// const innerHTML = '<h1>Hello, world!</h1>';
    const element = elements[i];
    const className = element.className;
    const styles = extractStylesFromClassName(className);
    const classes = extractClassesFromClassName(className);
    cssData.push({ element, styles, classes });
  }
  return cssData;
}

// Function to apply CSS attributes and values to the element
function applyCSSStyles(element, styles, breakpoint) {
  // Reset the inline styles of the element
  element.style.cssText = "";

  // Apply the matching CSS attributes and values to the element
  for (const { breakpoint: bp, attribute, value } of styles) {
    // Check if the breakpoint matches the current breakpoint or is a '$'
    if (bp === breakpoint || bp === "$") {
      if (bp === breakpoint) {
        element.style[attribute] = value;
      } else {
        element.style[attribute] = "";
      }
    }
  }
}
// const dynamicAttributes = ['sm:margin[40px]', 'sm:font-size[40px]', 'sm:color[blue]', 'md:color[red]', 'md:margin[20px]', 'lg:margin[10px]', 'xl:margin[5px]'];
// const elementId = 'target';
// const innerHTML = '<h1>Hello, world!</h1>';

// Function to apply classes to the element
function applyClasses(element, classes, breakpoint) {
  // Iterate over the classes and apply them based on the breakpoint
  for (const { breakpoint: bp, classString } of classes) {
    if (bp === breakpoint) {
      element.classList.add(classString);
    } else {
// const dynamicAttributes = ['sm:margin[40px]', 'sm:font-size[40px]', 'sm:color[blue]', 'md:color[red]', 'md:margin[20px]', 'lg:margin[10px]', 'xl:margin[5px]'];
// const elementId = 'target';
// const innerHTML = '<h1>Hello, world!</h1>';
      element.classList.remove(classString);
    }
  }
}

// Function to handle screen width changes and apply corresponding CSS data
function handleScreenWidthChange() {
  const screenWidth = window.innerWidth;
  const cssData = compileCSSData();
  const currentBreakpoint = determineBreakpoint(screenWidth);
  for (const { element, styles, classes } of cssData) {
    applyCSSStyles(element, styles, currentBreakpoint);
    applyClasses(element, classes, currentBreakpoint);
  }
}

// ========================================

// Function to create a new HTML element with dynamic

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
        styles += `${property}:${value};`;
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
// ====================
// simple function to change CSS on the fly
function changeCSS(selector, attribute, value) {
  let selected = document.querySelector(selector);
  selected.style[attribute] = value;
}



// function applyResponsiveStyles(cssText, elementId, innerHTML, newElementId) {
// cssText - text to apply to CSS style
// elementID - ID of HTML element, to attach new Element
// innerHTML - html to add build new Element
// newElementId - ID to add to new HTML element - can be empty string
