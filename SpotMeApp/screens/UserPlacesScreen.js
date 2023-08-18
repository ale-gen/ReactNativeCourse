import PlacesList from "../components/Places/PlacesList";
import { mockPlaces } from "../models/mocks/MockPlaces";

function UserPlacesScreen() {
  return <PlacesList places={mockPlaces} />;
}

export default UserPlacesScreen;
