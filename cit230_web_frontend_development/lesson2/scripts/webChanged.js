onload = function(){
    document.getElementById("year").innerHTML = new Date().getFullYear();
    document.getElementById("lastModified").innerHTML = "Page last changed " + document.lastModified.split(" ")[0];
}

//DEBUG:
console.log(lastModified)