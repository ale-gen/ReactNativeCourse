import { View, StyleSheet, TextInput, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, style, textInputConfig }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.multiline);
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{label}</Text>
      <TextInput {...textInputConfig} style={styles.input} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 8,
  },
  text: {
    color: GlobalStyles.colors.navy,
    fontWeight: "400",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: GlobalStyles.colors.navy,
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 15,
    color: GlobalStyles.colors.navy,
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
