document.addEventListener("DOMContentLoaded", () =>{
 const shareBtn = document.getElementById("shareBtn");
 const shareOptions = document.getElementById("shareOptions");


 shareBtn.addEventListener('click', () =>{
    if(shareOptions.style.display === "block"){
        shareOptions.style.display = "none";
    }else{
        shareOptions.style.display = "block";
    }
 })
})