import { StyleSheet, View, TextInput } from "react-native";
import AddButton from "./AddButton";

export default function GoalInput({
  onChangeText: goalInputHandler,
  onPressed: addGoalHandler,
  value: enteredGoalText,
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredGoalText}
        style={styles.textInput}
        placeholder='What is your goal?'
        onChangeText={goalInputHandler}
      />
      <AddButton onPressed={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "75%",
    marginLeft: 3,
  },
});
