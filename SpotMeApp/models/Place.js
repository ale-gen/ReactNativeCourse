class Place {
  constructor(imageUri, location, locationTip, id) {
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = location;
    this.locationTip = locationTip;
    this.id = id;
  }
}

export default Place;
