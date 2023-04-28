var elementModified = document.getElementById("modified");
elementModified.style.textAlign = "center";
elementModified.innerHTML= "Updated " + dateModified();

function dateModified() {
    return document.lastModified.split(' ')[0];
}