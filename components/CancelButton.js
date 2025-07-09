import { Button } from "react-native";

export default function CancelButton({ onCancel: endAddGoalHandler }) {
  return (
    <Button title='Cancel' onPress={endAddGoalHandler} color={"#8174A0"} />
  );
}
