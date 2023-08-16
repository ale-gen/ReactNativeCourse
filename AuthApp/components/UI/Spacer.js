import { View } from "react-native";

function Spacer({ style }) {
  return <View style={[!style && { flex: 1 }, style]} />;
}

export default Spacer;
