import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList, View, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const setAddGoalsHandler = () => {
    setModalIsVisible(true);
  };
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const deleteGoalHandler = (id) => {
    console.log("delete");
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setEnteredGoalText("");
    endAddGoalHandler();
  };

  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color={"#5e0acc"}
          onPress={setAddGoalsHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          value={enteredGoalText}
          onChangeText={goalInputHandler}
          onPressed={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem data={itemData.item} onPress={deleteGoalHandler} />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
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
