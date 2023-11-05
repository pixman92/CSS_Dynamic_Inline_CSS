// Your updated code here
let currentMedia = "xl"; // Default media breakpoint
let elementsWithMyDivClass; // Reference to elements with class "myDiv"
let allStyles = {};

function applyStyles(element, styles) {
  element.setAttribute("style", styles);
}

function updateCurrentMedia() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 576) {
    currentMedia = "sm";
  } else if (windowWidth < 768) {
    currentMedia = "md";
  } else if (windowWidth < 992) {
    currentMedia = "lg";
  } else {
    currentMedia = "xl";
  }

  applyResponsiveStyles();
}

function applyResponsiveStyles() {
  elementsWithMyDivClass.forEach((element) => {
    let styles = "";
    let classList = element.className;

    const regex = new RegExp(`([a-z]+):(.*?)(?:\\[(.*?)\\]|;)`, "g");
    const matches = classList.matchAll(regex);

    for (const match of matches) {
      const [, media, property, value] = match;
      if (property && value) {
        if (media === currentMedia || media === "all") {
          if (media === "all") {
            allStyles[property] = value;
          } else {
            allStyles[property] = "";
            styles += `${property}:${value};`;
          }
        }
      }
    }

    for (const property in allStyles) {
      styles += `${property}:${allStyles[property]};`;
    }

    applyStyles(element, styles);
  });
}

window.addEventListener("resize", updateCurrentMedia);

elementsWithMyDivClass = document.querySelectorAll(".myDiv");

applyResponsiveStyles();
