import { View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Spacer from "./Spacer";

function LargeTitleHeaderContainer({ children }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <Spacer
        style={{
          height: insets.top,
          backgroundColor: GlobalStyles.colors.darkPurple,
        }}
      />
      {children}
    </View>
  );
}

export default LargeTitleHeaderContainer;
