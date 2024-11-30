function getElementWidth(content, padding, border) {
boxSizing = (parseFloat(padding) + parseFloat(border)) * 2 + parseFloat(content);
console.log(boxSizing);
}
getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");