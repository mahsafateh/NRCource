import { StyleSheet, View, TextInput, Modal, Image } from "react-native";
import AddButton from "./AddButton";
import CancelButton from "./CancelButton";

export default function GoalInput({
  onChangeText: goalInputHandler,
  onPressed: addGoalHandler,
  value: enteredGoalText,
  visible: modalIsVisible,
  onCancel: endAddGoalHandler,
}) {
  return (
    <Modal animationType='slide' visible={modalIsVisible}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          placeholder='What is your goal?'
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <AddButton onPressed={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <CancelButton onCancel={endAddGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b5b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    color: "#120438",
    padding: 10,
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius:6,
    width: "85%",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    padding: 5,
  },
  button: {
    width: "41.5%",
    marginHorizontal: 8,
  },
});
