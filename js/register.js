// axios("https://api.escuelajs.co/api/v1/users/")
//   .then((items) => console.log(items.data))
//   .catch((err) => err);

const form = document.querySelector("#form");
const name = document.querySelector("#name");
const avatar = document.querySelector("#avatar");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", createUser);

function createUser(e) {
  e.preventdefould();
  console.log(name.value , avatar.value , email.value, password.value );
}


form.addEventListener("click", () =>{
    console.log(avatar.value);
} )
