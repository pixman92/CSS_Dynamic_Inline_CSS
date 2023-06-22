window.onload = function () {
  getWindowWidth();
  // Attach the resize event listener
  // Register an event listener for screen width changes
  window.addEventListener("resize", handleScreenWidthChange);

  // Initial execution to apply the CSS for the current screen width
  handleScreenWidthChange();
};
// function getWindowWidth() {
//   window.onresize = function () {
//     console.log($("body").innerWidth());
//     $(".screenSize").html($("body").innerWidth());
//     return $("body").innerWidth();
//   };
// }

// ========================================
// Function to determine the breakpoint based on screen width
function determineBreakpoint(screenWidth) {
  if (screenWidth < 480) {
    console.log("sm");
    return "sm"; // Below 480px, set as 'sm'
  } else if (screenWidth < 770) {
    console.log("md");
    return "md"; // Below 770px, set as 'md'
  } else if (screenWidth < 990) {
    console.log("lg");
    return "lg"; // Below 990px, set as 'lg'
  } else if (screenWidth < 1240) {
    console.log("xl");
    return "xl"; // Below 1240px, set as 'xl'
  } else {
    return "xl"; // Default to 'xl' for larger screen sizes
  }
}

// Function to extract CSS attributes and values from class names
function extractStylesFromClassName(className) {
  // Regular expression to match breakpoints and CSS attributes with values
  const regex = /(sm|md|lg|xl):([^:\[]+)\[([^\]]+)\]/g;

  // Array to store the extracted CSS attributes and values
  const styles = [];

  // debugger;

  // Iterate over the matches and extract the breakpoint, attribute, and value
  const matches = [...className.matchAll(regex)];
  for (const match of matches) {
    const breakpoint = match[1];
    const attribute = match[2];
    const value = match[3];
    // debugger;

    // Push the breakpoint, attribute, and value as a string to the styles array
    styles.push([breakpoint, attribute, value]);
  }

  return styles;
}

// Function to compile the CSS data for each HTML element
function compileCSSData() {
  const elements = document.getElementsByClassName("$");

  // Array to store the CSS data for each HTML element
  const cssData = [];

  // Iterate over the elements and compile the CSS data
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const className = element.className;

    // Extract the styles from the class name
    const styles = extractStylesFromClassName(className);

    // Push the CSS data for the element to the cssData array
    cssData.push({ element, styles });
    // debugger;
  }

  return cssData;
}

// Function to handle screen width changes and apply corresponding CSS data
function handleScreenWidthChange() {
  const screenWidth = window.innerWidth;

  // Get the compiled CSS data for each HTML element
  const cssData = compileCSSData();
  // debugger;

  // Determine the current breakpoint based on the screen width
  const currentBreakpoint = determineBreakpoint(screenWidth);

  // Iterate over the CSS data and apply the matching CSS attributes and values
  for (const { element, styles } of cssData) {
    // Reset the inline styles of the element
    element.style.cssText = "";

    // Apply the matching CSS attributes and values to the element
    for (const [breakpoint, attribute, value] of styles) {
      // debugger;
      // Check if the breakpoint matches the current breakpoint or is a '$'
      if (breakpoint === currentBreakpoint || breakpoint === "$") {
        element.style[attribute] = value;
      }
    }
  }
}
