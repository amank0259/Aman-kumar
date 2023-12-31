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

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav li a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


// SMTP for Contact

function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "0259aman@gmail.com",
    Password : "Amank@0259",
    To : 'amank0259@gmail.com',
    From : document.getElementById("email").value,
    Subject : document.getElementById("subject").value,
    Body : "And this is the body"
  }).then(
  message => alert(message)
  );
}