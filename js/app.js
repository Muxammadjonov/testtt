// const api_url = "https://api.escuelajs.co/api/v1/categories";

// async function getData() {
//   const { data } = await axios(api_url);
//   return data;
// }
// const result = document.getElementById("result");

// getData().then((data) => {
//   for (let i = 0; i < data.length; i++) {
//     const element = data[i];
//     result.innerHTML += `<div>
//   <img src=${"https://picsum.photos/200/300"}>
//   </div>`;
//   }
// });

const container = document.getElementById("container");

//https://jsonplaceholder.typicode.com/users

axios("https://api.escuelajs.co/api/v1/categories")
  .then((response) => render(response.data))
  .catch((err) => err);

function render(userDAta) {
  console.log(userDAta);
  console.log(userDAta);
  const userFRagment = document.createDocumentFragment();
  userDAta.map((user) => {
    const div = document.createElement("a");
    div.className = "user-card";
    div.href = `/pages/category.html?id=${user.id}`;
    div.innerHTML = `
    <img src="${user["image"]}" alt="" style="image-fit: cover">
    <h3>${user.name}</h3>
    `;
    userFRagment.appendChild(div);
  });

  container.appendChild(userFRagment);
}

axios("https://api.escuelajs.co/api/v1/products")
  .then((categories) => renderData(categories.data))
  .catch((error) => error);

const resultat = document.querySelector("#categoryy");

function renderData(categories) {
  const fragmentData = document.createDocumentFragment();
  categories.map((elements) => {
    const divv = document.createElement("div");
    divv.className = "catigories-div";
    divv.innerHTML = `
        <img src="${elements["images"][0]}" alt="">
<p>${elements["id"]}</p>
<p> category : ${elements["category"]["name"]}</p>
<p></p>
        `;
    fragmentData.appendChild(divv);
    console.log(divv);
  });
  resultat.appendChild(fragmentData);
}
