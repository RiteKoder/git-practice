div = document.getElementById("root");
const h = document.createElement("h1");
h.innerHTML = "hello";
div.appendChild(h);


function CreateElement(param) {
    obj = {
        tagName : h1 
    }
    return obj;

    
}
