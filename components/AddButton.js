import { Button } from "react-native";

export default function AddButton({ onPressed: addGoalHandler }) {
  return <Button title='Add Goal' onPress={addGoalHandler} color={"#3B1E54"} />;
}
