//TODO
//-pull all equal media breakpoints at apropiate time
//-apply all for everytime unless otherwise specified 
justAll();
window.onload = function () {
  justAll();
};
// Attach the event listener to the resize event
window.addEventListener("resize", () => {
  // handleScreenWidthChange();
  justAll();
  // run();
});
// =======================
// Function that calls all ClassStrings
function getAllMyDivClassStrings() {
  const divs = document.getElementsByTagName("div");
  const bigClassArray = [];

  for (let i = 0; i < divs.length; i++) {
    const classString = divs[i].getAttribute("class");
    if (classString && classString.includes("myDiv")) {
      // debugger;
      bigClassArray.push(classString);
    }
  }
  // debugger;
  return bigClassArray;
}


// =======================
// Function that pulls UID and media
function pullApart(myClassString) {

  // const substring = myClassString.substring(myClassString.indexOf("UID:"), myClassString.indexOf(" ", myClassString.indexOf("UID:") + 1));
  const regex = /UID:(\d+)\b/;
  const match = myClassString.match(regex);
  const digits = match[1];
  // debugger;

  let parsedMediaQueryArray = parseMediaQuery(myClassString);
  // Output: [["sm", "width", "100px"], ["md", "height", "200px"], ["lg", "color", "red"]]

  // debugger;
  parsedMediaQueryArray.unshift(digits);

  return parsedMediaQueryArray;


}
// =======================
function applyCSSStyles(stylesArray) {
  for (const style of stylesArray) {
    const [mediaBreakpoint, cssStyle, cssValue] = style;
    const elements = document.querySelectorAll(`[data-media="${mediaBreakpoint}"]`);
    for (const element of elements) {
      element.style[cssStyle] = cssValue;
      debugger;
    }
    debugger;
  }
}


// pullApart(getAllMyDivClassStrings()[1])[0]
// pullApart(getAllMyDivClassStrings()[1])[1  ]
function makeCSSApply(stylesArray, id) {
  // debugger;
  let element = document.getElementById(id);
  element.style = "";
  element.style[stylesArray[1]] = stylesArray[2];
  // element.style.setProperty(stylesArray[1], stylesArray[2], 'important');

}

//applyCSSBasedOnMediaBreakpoint -'232323'
//["all","color","yellow"
// applyCSSBasedOnMediaBreakpoint('232323', ["md","color","yellow"])

// (["md","color","yellow"], '232323',)
function applyCSSBasedOnMediaBreakpoint(id, arrayOfCSS) {
  debugger;
  //pullApart(getAllMyDivClassStrings()[1])[...nth]
  if (arrayOfCSS[0] == handleScreenWidthChange()) {
    debugger;
    makeCSSApply(arrayOfCSS, id);
  }

}

// function runThroughApplying() {
//   makeCSSApply(pullApart(getAllMyDivClassStrings()[1])[0]
//   )
// }

function runThroughApplying() {
  let savedArray = getAllMyDivClassStrings();
  // debugger;
  savedArray.forEach((item, index) => {
    debugger;
    let pulled = pullApart(item);
    for (let i = 1; pulled[i] != undefined; i++) {
      debugger;
      console.log(pulled[i])
      makeCSSApply(pulled[i], pulled[0]);
      // if(pullApart[handleScreenWidthChange())
      console.log('pulled1', pulled[i][0]);
    }
  });
}
// =======================
function pullMediaBreakpoints() {
  let saved = getAllMyDivClassStrings();
  saved.forEach((item, index) => {
    let pulled = pullApart(item);
    // debugger;
    for (let i = 1; pulled[i] != undefined; i++) {
      debugger;
      applyMediaBreakpoints(pulled[i][0])
    }
  });
}
// =======================
// let stylers = {};
function justAll() {
  let saved = getAllMyDivClassStrings();
  saved.forEach((item, index) => {
    let pulled = pullApart(item);
    console.log('pulled', pulled);
    for (let i = 1; pulled[i] != undefined; i++) {
      if (pulled[1][0] == 'all') {
        console.log('all', pulled[1][0]);
        // debugger;
        console.log(pulled[i]);
        savedStylers = createStyler(pulled[0]);
        applyStyles('all',   pulled[0], pulled[i][1], pulled[i][2]);
        // applyStyles(pulled[])
        // makeCSSApply(pulled[i], pulled[0]);
      }
      else {
        // document.getElementById(pulled[0]).style = "";
        // debugger;
        // console.log(pulled[j]);
        // console.log(pulled[1][0]);
        // console.log(pulled[0]);
        // console.log(pulled[i][1]);
        // console.log(pulled[i][2]);
        // applyStyles(pulled[1][0], document.getElementById(pulled[0]), pulled[i][1], pulled[i][2])
        // makeCSSApply(pulled[i], pulled[0]);
        // debugger;
        savedStylers = createStyler(pulled[0]);
        // debugger;
        console.log(pulled[0], 'stylerName');
        console.log(`${pulled[i][1]}: ${pulled[i][2]}`);
        applyStyles(pulled[i][0], pulled[0], pulled[i][1], pulled[i][2]);
        // addStyler.addStyle(`${pulled[i][1]}: ${pulled[i][2]}`);

        // debugger;
      }
    }
  });

}

// applyStyles(pulled[0][0], pulled[0], pulled[1][1], pulled[1][2])
// =======================
function applyStyles(breakpoint, id, cssText, value) {
  // debugger;
  let currentBreakpoint = handleScreenWidthChange();
  if (currentBreakpoint == 'xs' && breakpoint == 'xs') {
    // Apply the specified style for 'all' breakpoint
    // element.style[property] = value;
    // element.style[cssText] += value;
    // debugger;
    stylers[id].addStyle(`${cssText}: ${value}`);
  } else if (currentBreakpoint == 'sm' && breakpoint == 'sm') {
    // Apply the specified style for 'xs' breakpoint
    // element.style[property] = value;
    // debugger;
    stylers[id].addStyle(`${cssText}: ${value}`);
  } else if (currentBreakpoint == 'md' && breakpoint == 'md') {
    // Apply the specified style for 'sm' breakpoint
    // element.style[property] = value;
    // debugger;
    stylers[id].addStyle(`${cssText}: ${value}`);
  } else if (currentBreakpoint == 'lg' && breakpoint == 'lg') {
    // Apply the specified style for 'md' breakpoint
    // element.style[property] = value;
    // debugger;
    stylers[id].addStyle(`${cssText}: ${value}`);
  } else if (currentBreakpoint == 'xl' && breakpoint == 'xl') {
    // Apply the specified style for 'lg' breakpoint
    // element.style[property] = value;
    // debugger;
    stylers[id].addStyle(`${cssText}: ${value}`);
  } else if (currentBreakpoint == 'all' && breakpoint == 'all') {
    // Apply the specified style for 'xl' breakpoint
    // element.style[property] = value;
    // debugger;
    stylers[id].addStyle(`${cssText}: ${value}`);
  }
}

function run() {
  // document.getElementById('232323').style = "";
  applyStyles('sm', document.getElementById('232323'), 'fontSize', '10');

  // debugger;
  applyStyles('xs', document.getElementById('232323'), 'fontSize', '140px');
}

// function addCssProperties(element, properties) {
//   if (element instanceof HTMLElement) {
//     const style = element.style;
//     for (const [property, value] of Object.entries(properties)) {
//       style.setProperty(property, value);
//     }
//   } else {
//     console.error("Invalid element provided. Please ensure it's an HTMLElement.");
//   }
// }
// Styler.js

// =======================
// SAVE THIS LOGIC!
const stylers = {}; // Create an object to store Styler instances
function createStyler(elementId) {

  // Styler.js
  function Styler(element) {
    this.element = element;
  }

  Styler.prototype.addStyle = function (styleString) {
    try {
      this.element.style.cssText += styleString;
    } catch (error) {
      console.error('Error adding style:', error);
    }
  };
  // // Usage:
  //   styler.addStyle('color: red; font-size: 24px;');
  // styler.addStyle('border: 1px solid blue;');

  // const myElement = document.getElementById('my-element');
  // const styler = new Styler(myElement);
  const element = document.getElementById(elementId);
  const styler = new Styler(element);
  stylers[elementId] = styler; // Store in the object using the ID as a key
  return styler;
}


// =======================


function handleScreenWidthChange() {
  const screenWidth = window.innerWidth;
  // Perform actions based on the new screen width
  // For example, calculate the media breakpoint based on the screen width and trigger specific behavior

  // Example: Output the media breakpoint to the console
  let mediaBreakpoint;
  if (screenWidth < 576) {
    mediaBreakpoint = "xs";
  } else if (screenWidth < 768) {
    mediaBreakpoint = "sm";
  } else if (screenWidth < 992) {
    mediaBreakpoint = "md";
  } else if (screenWidth < 1200) {
    mediaBreakpoint = "lg";
  } else {
    mediaBreakpoint = "xl";
  }
  console.log("New Media Breakpoint:", mediaBreakpoint);
  return mediaBreakpoint;
}



// Call the handler initially to get the initial media breakpoint
handleScreenWidthChange();
// justAll();


// =======================

// function handleWidthChange(mediaQuery) {
// debugger;
//   if (mediaQuery.matches) {
//     const mediaPoint = mediaQuery.media.split(':')[1];
//     const [cssStyle, cssValue] = mediaQueries.find(([point]) => point === mediaPoint).slice(1);
//     applyCSS(mediaPoint, cssStyle, cssValue);
// debugger;
//   }
// }
// // =======================

// function applyCSS(mediaPoint, cssStyle, cssValue) {
//   // Apply CSS styles using the saved values
//   // e.g., element.style.property = value;
//   // Replace element with your target HTML element and property/value with the desired CSS styles
//   console.log(`Applying CSS for ${mediaPoint} breakpoint: ${cssStyle} = ${cssValue}`);
// }

// // =======================
// Crucial to parsing out ID from CSS values
function parseMediaQuery(inputString) {

  const result = [];
  const regex = /(\w+):([\w-]+)\[(.*?)\]/g;

  let match;
  while ((match = regex.exec(inputString)) !== null) {
    const mediaBreakpoint = match[1];
    const CSSproperty = match[2];
    const CSSvalue = match[3];
    result.push([mediaBreakpoint, CSSproperty, CSSvalue]);
  }

  return result;
}