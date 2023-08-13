import { useNavigation } from "@react-navigation/native";
import { Text, Pressable, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getFormattedDate } from "../../util/date";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Spacer from "../ui/Spacer";

function ExpenseItem({ id, name, amount, date }) {
  const navigation = useNavigation();
  function navigateToExpenseManagement() {
    navigation.navigate("ManageExpense", {
      title: "Edit expense",
      expenseId: id,
    });
  }
  Icon;

  return (
    <View style={styles.rootContainer}>
      <Pressable
        onPress={navigateToExpenseManagement}
        android_ripple={{ color: "white" }}
        style={({ pressed }) => [
          styles.container,
          styles.border,
          styles.shadow,
          pressed ? styles.pressed : null,
        ]}
      >
        <MaterialCommunityIcons
          name={name.toLowerCase()}
          size={50}
          color={GlobalStyles.colors.navy}
          style={styles.icon}
        />
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{getFormattedDate(date)}</Text>
        </View>
        <Spacer />
        <Text style={styles.title}>{amount.toFixed(2)}zł</Text>
      </Pressable>
    </View>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    width: "80%",
    backgroundColor: GlobalStyles.colors.lightBlue,
    marginLeft: 5,
    marginVertical: 10,
    padding: 15,
  },
  border: {
    borderColor: GlobalStyles.colors.lightBlue,
    borderLeftWidth: 2,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  shadow: {
    elevation: 0.5,
    shadowOpacity: 0.5,
    shadowColor: GlobalStyles.colors.lightBlue,
    shadowRadius: 5,
    shadowOffset: { width: -2, height: 4 },
  },
  icon: {
    height: 50,
    width: 50,
    textAlign: "center",
    marginRight: 10,
  },
  title: {
    color: "black",
    fontWeight: "bold",
  },
  subtitle: {
    color: "gray",
    fontWeight: "200",
    maxWidth: 150,
  },
  pressed: {
    opacity: 0.5,
  },
});
