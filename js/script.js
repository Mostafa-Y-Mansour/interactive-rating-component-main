// select the lis
let lis = document.querySelectorAll(".stars > li");

for (let li of lis) {
  li.className = "";
  li.addEventListener("click", () => {
    lis.forEach((ele) => {
      ele.className = "";
    });
    li.className = "clicked";
  });
}

// select submit button, card, after-submit, clickedand star-count
let submit = document.querySelector(".submit");
let card = document.querySelector(".card");
let afterSubmit = document.querySelector(".after-submit");
let starCount = document.querySelector(".selected > .star-count");

submit.addEventListener("click", () => {
  let clicked = document.querySelector(".clicked");
  let main = document.querySelector("main");
  setTimeout(() => {
    card.style.display = "none";
    afterSubmit.style.display = "flex";
    main.className = "";
    submit.classList.remove("loading");
  }, 1000);
  if (clicked) {
    starCount.innerHTML = clicked.value;
  } else {
    clicked = 0;
    starCount.innerHTML = clicked;
  }
  main.className = "loading";
  submit.classList.add("loading");
});

// deleted code not needed
