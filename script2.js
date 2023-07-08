function extractClasses(inputString) {
    // Regular expression pattern to extract classes
    const pattern = /(\w+):(\w+)\[([^\]]+)\]/g;
  
    // Array to store extracted classes
    const classes = [];
  
    // Find all matches of the pattern in the input string
    let match;
    while ((match = pattern.exec(inputString)) !== null) {
      const [, , , className] = match;
      classes.push(className);
    }
  
    return classes;
  }
  
  function applyClassesToElement(elementId, classes) {
    // Get the target element by its ID
    const targetElement = document.getElementById(elementId);
  
    // Add the extracted classes to the element's class attribute
    for (const className of classes) {
      targetElement.classList.add(className);
    }
  }
  
  const inputString = '<div class=" sm:color[black] sm:font[40px] md:margin-top[30px]">helloWorld</div>';
  const elementId = 'test';
  
  // Extract classes from the input string
  const classes = extractClasses(inputString);
  
  // Apply the extracted classes to the target element's innerHTML
  applyClassesToElement(elementId, classes);
  