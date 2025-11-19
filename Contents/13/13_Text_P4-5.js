let elements = document.getElementsByTagName("*"); // Get all elements
for (let element of elements) {
    if(element.id == "first"){
        element.innerHTML = "<p>New content</p>";
    }
    
}