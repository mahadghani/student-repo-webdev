// Add your code here
let pronouns;
const radioButtons = document.querySelectorAll('input[name="pronouns"]');
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("click", (event) => {
    pronouns = event.target.value;
  });
});

let example = document.querySelector("#submit");
let nameR = document.querySelector("#name");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let dob = document.querySelector("#dob");

example.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  console.log("Name: ", nameR.value);
  console.log("Username: ", username.value);
  console.log("Email: ", email.value);
  console.log("Date of Birth: ", dob.value);
  console.log("Pronouns: ", pronouns);
}
