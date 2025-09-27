const API_base_url = 'https://api.tvmaze.com/search/shows?q=girls';

const api_fetch = async () => {
  try {
    const response = await fetch(API_base_url);
    let data = await response.json();
    Render_UI(data)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
const Render_UI = (infoData) => {
    console.log(infoData);
    

}