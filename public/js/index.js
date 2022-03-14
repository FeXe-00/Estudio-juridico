
window.addEventListener("scroll", function(){
    var nabvar = document.getElementById("idNabvar");
    nabvar.classList.toggle("sticky",window.scrollY > 0)
})