import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Spacer from "./Spacer";

function LargeTitleHeaderContainer({ children }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Spacer style={[styles.header, { height: insets.top }]} />
      {children}
    </View>
  );
}

export default LargeTitleHeaderContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: GlobalStyles.colors.darkPurple,
    shadowColor: GlobalStyles.colors.darkPurple,
    shadowOpacity: 1,
    shadowRadius: 20,
  },
});
