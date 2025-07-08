import { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random() },
    ]);
    console.log(enteredGoalText);
    setEnteredGoalText("");
    console.log(enteredGoalText);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput
        value={enteredGoalText}
        onChangeText={goalInputHandler}
        onPressed={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    marginTop: 50,
  },
  goalsContainer: {
    flex: 12,
    marginTop: 10,
    padding: 5,
  },
});
