const GOOGLE_API_KEY = "";

export function getMapPreview(lat, lng) {
  if (GOOGLE_API_KEY === "") {
    return "../../assets/images/mapPreview.png";
  }
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=12&size=400x400&key=${GOOGLE_API_KEY}`;
}

export async function getAddress(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&location_type=ROOFTOP&result_type=street_address&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch address!");
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
}
