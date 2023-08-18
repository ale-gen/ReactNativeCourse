class Place {
  constructor(name, imageUri, address, location) {
    this.name = name;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
    this.id = new Date().toString() + Math.random();
  }
}

export default Place;
