import { FlatList } from "react-native";
import PlaceItem from "./PlaceItem";
import Spacer from "../UI/Spacer";

function PlacesList({ places }) {
  return (
    <FlatList
      data={places}
      numColumns={2}
      renderItem={({ item }) => <PlaceItem place={item} />}
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
