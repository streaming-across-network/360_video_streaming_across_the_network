
//buttpn clicked
let clicked = false;

function likeButtonClicked(){
  const likeBtn = document.querySelector(".like__btn");
  let likeIcon = document.querySelector("#like_icon");
  let likeCount = document.querySelector("#like_count");
  
    if (!clicked) {
      console.log("button pressed, clicked is false");
      clicked = true;
      likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
      likeCount.textContent++;
    } else {
      console.log("button pressed, clicked is true");
      clicked = false;
      likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
      likeCount.textContent--;
    }
}




/*
const likeBtn = document.querySelector(".like__btn");
let likeIcon = document.querySelector("#like_icon");
let count = document.querySelector("#like_count");
likeBtn?.addEventListener("click", () => {
  if (!clicked) {
    console.log("button pressed, clicked is false");
    clicked = true;
    likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count.textContent++;
  } else {
    console.log("button pressed, clicked is true");
    clicked = false;
    likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count.textContent--;
  }
});*/

function dislikeButtonClicked(){
  const dislikeBtn = document.querySelector(".dislike__btn");
  let dislikeIcon = document.querySelector("#dislike_icon");
  let dislikeCount = document.querySelector("#dislike_count");
  
    if (!clicked) {
      console.log("button pressed, clicked is false");
      clicked = true;
      dislikeIcon.innerHTML = `<i class="fas fa-thumbs-down"></i>`;
      dislikeCount.textContent++;
    } else {
      console.log("button pressed, clicked is true");
      clicked = false;
      dislikeIcon.innerHTML = `<i class="far fa-thumbs-down"></i>`;
      dislikeCount.textContent--;
    }
}





/* 
Social Share Links:
WhatsApp:
https://wa.me/?text=[post-title] [post-url]
Facebook:
https://www.facebook.com/sharer.php?u=[post-url]
Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]
*/

function shareButtonClicked(){
  const facebookBtn = document.querySelector(".facebook-btn");
  const twitterBtn = document.querySelector(".twitter-btn");
  const whatsappBtn = document.querySelector(".whatsapp-btn");
  
  function init() {
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Hi everyone, please check this out: ");
  
    facebookBtn.setAttribute(
      "href",
      `https://www.facebook.com/sharer.php?u=${postUrl}`
    );
  
    twitterBtn.setAttribute(
      "href",
      `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
    );
  
    whatsappBtn.setAttribute(
      "href",
      `https://wa.me/?text=${postTitle} ${postUrl}`
    );
  }
  
  init();
  
}