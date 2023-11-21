var typed = new Typed(".typing",{
    strings:["", "Web Designer", "Web Developer", " FronEnd Developer", "Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

document.querySelectorAll("a").forEach((ele) =>
  ele.addEventListener("click", function (event) {
    document
      .querySelectorAll("a")
      .forEach((ele) => ele.classList.remove("active"));
    this.classList.add("active")
  })
);