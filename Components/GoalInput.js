import { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

const GoalInput = (props) => {
  // capture the entered goal //
  const [enteredGoal, setEnteredGoal] = useState("");

  //onChange input handler //
  const goalInputHandler = (goalDescription) => {
    setEnteredGoal(goalDescription);
  };

  // add goal handler = ADD GOAL button onPress //
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    // clear the goal input field after adding a goal //
    setEnteredGoal("");
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
        <View style={styles.buttonsContainer}>
          {/* cancel button closes the modal, doesn't add a goal */}
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>

          {/* onAddGoal is received as props from App.js */}
          <View style={styles.button}>
            <Button title="ADD GOAL" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonsContainer: {
    width: "60%",
    marginTop: 10,
    flexDirection: "row", // to make button horizontal aligned//
    justifyContent: "space-around",
  },
  button: {
    width: "40%",
  },
});
