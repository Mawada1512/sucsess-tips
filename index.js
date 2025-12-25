function getTips(event) {
  event.preventDefault();
  new Typewriter("#tip", {
    strings: "tips will apper here",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

let tipForm = document.querySelector("#tip-form");
tipForm.addEventListener("submit", getTips);
