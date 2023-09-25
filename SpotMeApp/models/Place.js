class Place {
  constructor(imageUri, location, locationTip) {
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = location;
    this.locationTip = locationTip;
    this.id = new Date().toString() + Math.random();
  }
}

export default Place;
