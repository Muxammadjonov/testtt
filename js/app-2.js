const userid = new URLSearchParams(window.location.search).get("id");
const result = document.querySelector("#result");

axios(`https://api.escuelajs.co/api/v1/categories/${userid}/products`)
  .then((category) => renderCategory(category.data))
  .catch((error) => error);

function renderCategory(category) {
  const fragment = document.createDocumentFragment();
  category.map((product) => {
    const div = document.createElement("a");
    div.className = "cards";
    div.href = `/category-2.html?id=${product.id}`;
    div.innerHTML = `
    <img src="${product["images"][0]}" alt="">
    <h3>${product[`description`]}</h3>
    <p> price : ${product["price"]}$  </p>
<h6> Categoriy : ${product["category"]["name"]}</h6>
<p>  About pruduct : ${product["title"]} </p>
<p>  id  : ${product["id"]} </p>
        `;
    console.log(category);
    fragment.appendChild(div);
  });
  result.appendChild(fragment);
}
