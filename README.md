# CSS_Dynamic_Inline_CSS
a simple JS library that allows for Dynamic inline CSS 

Here's the current CDN:
https://cdn.jsdelivr.net/gh/pixman92/CSS_Dynamic_Inline_CSS@0.7/CSS_Dynamic_Inline.min.js

To make the CSS Dynamic Attributes, use the '$' in the Class String

To make dynamic CSS Screen Width elements, use this function:
```
applyDynamicAttributes(dynamicAttributes, elementId, innerHTML);
```

where dynamicAttibutes is an array (['sm:color[blue]', 'sm:font-size[30px]', 'md:font-size[40px]']);
elementId - the id of the Element you wish to append the created node
innerHTML - is the HTML you want to add to the new HTML

========================================
To turn on the Screen Size - console.log print:
```
changePrintFunction(true/false)
```


