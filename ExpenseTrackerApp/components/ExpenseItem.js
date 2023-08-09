import { useNavigation } from "@react-navigation/native";
import { Text, Pressable } from "react-native";

function ExpenseItem({ name }) {
  const navigation = useNavigation();
  function navigateToExpenseManagement() {
    navigation.navigate("ManageExpense", {
      title: name,
    });
  }

  return (
    <Pressable onPress={navigateToExpenseManagement}>
      <Text>{name}</Text>
    </Pressable>
  );
}

export default ExpenseItem;
