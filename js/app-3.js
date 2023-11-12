const userid = new URLSearchParams(window.location.search).get("id");
console.log(userid);

axios(`https://api.escuelajs.co/api/v1/products/${userid}/?Id`)
  .then((product) => render(product.data))
  .catch((error) => error);

const wrapper_div = document.querySelector("#wrapper_div");
const description = document.getElementById("description");
const price = document.getElementById("price");
const title = document.getElementById("title");
const category = document.getElementById("category");
const uptade = document.getElementById("uptade");
function render(response) {
  console.log(response);
  resultt.innerHTML = response.title;
  description.innerHTML = response.description;
  price.innerHTML = response.price + "$";
  title.innerHTML = response.title;
  category.innerHTML = response["category"]["name"];
  uptade.innerHTML = response.updatedAt;
  const img = document.createElement("img");
  img.src = response.images[0];
  wrapper_div.appendChild(img);

  console.log(img);
}

// axios(`https://api.escuelajs.co/api/v1/categories/1/products/${userid}`)
//   .then((response) => render(response.data))
//   .catch((err) => err);
