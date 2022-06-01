
/* ************* NAVBAR ************** */

window.addEventListener("scroll", function(){
    let nabvar = document.getElementById("idNabvar");
    nabvar.classList.toggle("sticky",window.scrollY > 0)
})

/* window.addEventListener("scroll", function(){
    let nabvar = document.querySelector("--es_font-color");
    nabvar.classList.toggle("color",window.scrollY > 0)
})
 */
