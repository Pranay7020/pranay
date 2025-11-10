// Build API URL
const apiFunc = (param) => {
  return `https://api.tvmaze.com/search/shows?q=${param || "girls"}`;
};

// Fetch data
const api_fetch = async () => {
  const datasearch = document.getElementById("search").value;
  let url = apiFunc(datasearch);

  try {
    let res = await fetch(url);
    let data = await res.json();
    Render_UI(data);
  } catch (error) {
    console.log("Error fetching:", error);
  }
};

// Render UI
const Render_UI = (infoData) => {
  let mainDiv = document.getElementById("maincontainer");
  mainDiv.innerHTML = ""; // Clear previous results

  infoData.forEach(element => {
    let show = element.show;

    let cardDiv = document.createElement("div");
    cardDiv.className = "card-Div";

    let img = document.createElement("img");
    img.src = show.image ? show.image.medium : "https://via.placeholder.com/150";

    let id = document.createElement("h5");
    id.innerText = `ID: ${show.id}`;

    let genres = document.createElement("h5");
    genres.innerText = `Genres: ${show.genres.join(", ")}`;

    let language = document.createElement("p");
    language.innerText = `Language: ${show.language}`;

    let premiered = document.createElement("p");
    premiered.innerText = `Premiered: ${show.premiered}`;

    let runtime = document.createElement("p");
    runtime.innerText = `Runtime: ${show.runtime || "N/A"} mins`;

    let rating = document.createElement("p");
    rating.innerText = `Rating: ${show.rating.average ?? "N/A"}`;

    let status = document.createElement("p");
    status.innerText = `Status: ${show.status}`;

    cardDiv.append(img, id, genres, language, premiered, runtime, rating, status);
    mainDiv.append(cardDiv);
  });
};
