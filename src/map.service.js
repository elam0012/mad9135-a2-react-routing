const API_TOKEN = 'pk.0b1f8e9fd94ce33e86b94aa0a279c212';
const BASE_URL = 'https://us1.locationiq.com/v1';

export async function getGeolocation(location) {
  const url = `${BASE_URL}/search.php?key=${API_TOKEN}&q=${location}&format=json`;

  const response = await fetch(url);
  if (!response.ok) {
      throw new Error(response.statusText);
  }
  const data = await response.json();
  return { lon: data[0].lon, lat: data[0].lat };
}