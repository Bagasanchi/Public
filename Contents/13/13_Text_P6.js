let elements = document.getElementsByClassName("content");

for (let element of elements){
    if(element.id == "first"){
        element.innerHTML = "<p>New content</p>";
    }
}