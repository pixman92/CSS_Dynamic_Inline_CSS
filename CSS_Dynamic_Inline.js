window.onload = function () {
  // Attach the resize event listener
  window.addEventListener("resize", handleScreenWidthChange);

  // Initial execution to apply the CSS for the current screen width
  handleScreenWidthChange();
};

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

// Function to apply classes to the element
function applyClasses(element, classes, breakpoint) {
  // Iterate over the classes and apply them based on the breakpoint
  for (const { breakpoint: bp, classString } of classes) {
    if (bp === breakpoint) {
      element.classList.add(classString);
    } else {
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
