let breakpointStyles = {}; // Store styles for specific breakpoints

function determineBreakpoint(screenWidth) {
  if (screenWidth < 576) {
    return "sm"; // Below 576px, set as 'sm'
  } else if (screenWidth < 768) {
    return "md"; // Below 768px, set as 'md'
  } else if (screenWidth < 992) {
    return "lg"; // Below 992px, set as 'lg'
  } else {
    return "xl"; // Default to 'xl' for larger screen sizes
  }
}

function applyStylesToDiv() {
  const div = document.getElementById("myDiv");
  const classNames = div.className.split(" ");
  const screenWidth = window.innerWidth;
  const breakpoint = determineBreakpoint(screenWidth);

  classNames.forEach((className) => {
    const [breakpointPart, propertyValue] = className.split(":");
    const [property, value] = propertyValue.split("[");
    if (breakpointPart === breakpoint) {
      breakpointStyles[property] = value.slice(0, -1);
    }
    if (breakpointPart === "all") {
      if (!breakpointStyles[property]) {
        breakpointStyles[property] = value.slice(0, -1);
      }
    }
  });

  for (const property in breakpointStyles) {
    div.style[property] = breakpointStyles[property];
  }
}

window.addEventListener("resize", applyStylesToDiv);
applyStylesToDiv();
