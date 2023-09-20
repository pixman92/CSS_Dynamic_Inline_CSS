# CSS_Dynamic_Inline_CSS
a simple JS library that allows for Dynamic inline CSS 

Here's the current CDN:
https://cdn.jsdelivr.net/gh/pixman92/CSS_Dynamic_Inline_CSS@0.9/CSS_Dynamic_Inline.min.js

To make the CSS Dynamic Attributes, use the '$' in the Class String

Sample for Dynamic Class
```
class = "$ sm:margin[40px] sm:font-size[40px] sm:color[blue] md:color[red] md:margin[20px] lg:margin[10px] xl:margin[5px]"
```

To make dynamic CSS Screen Width elements, use this function:
```
applyResponsiveStyles(cssText, elementId, innerHTML, newElementId) {
```

where dynamicAttibutes is an array "sm:color[blue] sm:font-size[30px] md:font-size[40px]"
elementId - the id of the Element you wish to append the created node
innerHTML - is the HTML you want to add to the new HTML
newElementId - is where you specify an ID to be added to the New HTML element created

========================================

To turn on the Screen Size - console.log print:
```
changePrintFunction(true/false)
```


