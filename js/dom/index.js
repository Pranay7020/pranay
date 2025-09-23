const API_URL = "https://fakestoreapi.com/products";

const product_Fetch = () => {
    fetch(API_URL)
        .then((res) => res.json())
        .then((res) => render_ui(res))
        .catch((err) => console.log(err))
        .finally(() => console.log("API fetch finally executed"));
};

const render_ui = (value) => {
    let main_div = document.getElementById("maincontainer");
    value.map((element, index) => {
        let card_div = document.createElement("div");

        let img = document.createElement("img");
        let id = document.createElement("h5");
        let title = document.createElement("h3");
        let price = document.createElement("h4");
        let category = document.createElement("p");
        let description = document.createElement("p");

        img.src = element.image;
        id.innerText = `ID : ${element.id}`;
        title.innerText = `Title : ${element.title}`;
        price.innerText = `Price : $${element.price}`;
        category.innerText = `Category : ${element.category}`;
        description.innerText = `Description : ${element.description}`;

        // class name assign
        card_div.className = "card_div";
        card_div.append(img, id, title, price, category, description);
        main_div.appendChild(card_div);
    });
};
