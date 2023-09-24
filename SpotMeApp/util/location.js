const GOOGLE_API_KEY = "";

export function getMapPreview(lat, lng) {
  if (GOOGLE_API_KEY === "") {
    return "../../assets/images/mapPreview.png";
  }
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=12&size=400x400&key=${GOOGLE_API_KEY}`;
}
