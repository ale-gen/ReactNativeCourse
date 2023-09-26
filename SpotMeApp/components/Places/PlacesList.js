import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PlaceItem from "./PlaceItem";
import Spacer from "../UI/Spacer";

function PlacesList({ places }) {
  const navigation = useNavigation();

  function selectPlaceHandler(place) {
    navigation.navigate("PlaceDetails", { place: place });
  }

  return (
    <FlatList
      data={places}
      numColumns={2}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={selectPlaceHandler} />
      )}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => {
        return <Spacer style={{ height: 20 }} />;
      }}
      ListFooterComponent={() => {
        return <Spacer style={{ height: 60 }} />;
      }}
    />
  );
}

export default PlacesList;
