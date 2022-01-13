import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  // capture the entered goal //
  const [enteredGoal, setEnteredGoal] = useState("");

  // to show all the added goals including the new one INTO an array //
  const [allGoals, setAllGoals] = useState([]);

  //onChange input handler //
  const goalInputHandler = (goalDescription) => {
    setEnteredGoal(goalDescription);
  };

  // add goal click console log //
  const addGoalHandler = () => {
    // console.log(enteredGoal);
    // on click add the goal and save it with previous goals
    // to have guaranteed updated goals snapshot//
    setAllGoals((currentGoals) => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Think about a Goal"
          onChangeText={goalInputHandler}
        />
        <Button title="ADD GOAL" onPress={addGoalHandler} />
      </View>

      {/* render all added goals here */}
      <FlatList
        data={allGoals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item}</Text>
          </View>
        )}
        keyExtractor={(itemData) => itemData.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 60 },
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
  listItem: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#faebd7",
  },
});
