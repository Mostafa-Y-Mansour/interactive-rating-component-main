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

window.onload = () => {
  // afterSubmit.style.display = ;
};

// let a = "aa";
// a += 1 + "no";
// console.log(a);

// class User {
//   constructor(name1) {
//     this.name = name1;
//   }
// }

// let hello = new User((name1 = "mostafa"));

// console.log(hello);

// let pr = new Promise(function (res, rej) {
//   res(1);
//   setTimeout(res, 2000, 2);
// });

// pr.then((a) => console.log(a));

// let go = "yes";

// let x = go;
// if (go != no) {
//   x += 1 + "no";
// }

// console.log(x);

function a(a = 1) {
  a++;
  console.log((a -= "a"));
}

// console.log(fetch(a()));

// setInterval(a, 1000);

a();
