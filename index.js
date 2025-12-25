function genaretTips(response) {
  new Typewriter("#tip", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function getTips(event) {
  event.preventDefault();
  let usersInput = document.querySelector("#users-input");
  let key = "6fftdd01472a035eo394f08abdd05bea";
  let context =
    "you are a life coach and personal trainer who is very export and you have red a lot of books in general you have experience in life and you can give advices and tips in any topic to help people, please write the tips and advices in very short way , be specific and  fallow what user want them to be about, at the end make <br/> and sign it with with love MIMI, put the sign in <strong> ";
  let prompt = ` User Instructions: Generate a Tip about ${usersInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  let hide = document.querySelector("#tip");
  hide.classList.remove("hidden");
  hide.innerHTML = `<div class = "blink">⏳ we are genareting the advice about ${usersInput.value} for you</div>`;
  axios.get(apiUrl).then(genaretTips);
}

let tipForm = document.querySelector("#tip-form");
tipForm.addEventListener("submit", getTips);
