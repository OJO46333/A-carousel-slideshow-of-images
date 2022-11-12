
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n){
    let i;
    let slides = document.getElememtsByClassName("image");
    let dots = document.getElememtsByClassName("dot");

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if(n > slides.length){
        slideIndex = 1;
    }

    if(n < 1){
        slideIndex = slides.length;
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
}

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}









// document.querySelectorAll(".mainDiv").forEach(mainDiv => {
//     const items = mainDiv.querySelectorAll(".image");
//     conts buttonsHtml = Array.from(items, () => {
//         return '<span onclick="currentSlide(1);" class="dot"></span>';
//     });

//     mainDiv.insertAdjacentHTML("beforeend", '
//     <div class="dots">
//            ${buttonsHtml.join("")}
//        </div>
//        ');

//     const buttons = mainDiv.querySelectorAll(".image");

//     buttons.forEach((buttons, i) => {
//         // unselect all the item
//         button.addEventListener("click", () => {
//             items.forEach(button => item.classList.remove(""));
//             buttons.forEach(button => button.classList.remove(""));
        
//             items[i].classList.add("");
//             buttons.classList.add("");       
        
//         });
//     });
//         //  select the item on first page load
//     items[0].classList.add("");
//     buttons[0].classList.add("");
// });
