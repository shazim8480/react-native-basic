import { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

const GoalInput = (props) => {
  // capture the entered goal //
  const [enteredGoal, setEnteredGoal] = useState("");

  //onChange input handler //
  const goalInputHandler = (goalDescription) => {
    setEnteredGoal(goalDescription);
  };

  return (
    <Modal animationType="slide" visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Think about a Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        {/* onAddGoal is received as props from App.js */}
        <Button title="ADD GOAL" onPress={() => props.onAddGoal(enteredGoal)} />
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
