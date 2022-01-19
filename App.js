import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./Components/GoalInput";
import GoalItem from "./Components/GoalItem";

export default function App() {
  // to show all the added goals including the new one INTO an array //
  const [allGoals, setAllGoals] = useState([]);

  // handle modal visibility onClick ADD Goal Button//
  const [isModalVisible, setIsModalVisible] = useState(false);

  // add goal handler //
  const addGoalHandler = (goalTitle) => {
    // on click add the goal and save it with previous goals
    // to have guaranteed updated goals snapshot//
    setAllGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  // delete items handler//
  const removeGoalHandler = (goalID) => {
    // filter using id, if do not match both id, then keep it. Otherwise Delete//
    setAllGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalID);
    });
  };

  return (
    <View style={styles.screen}>
      {/* BUTTON To activate modal */}
      <Button title="Add a Goal" onPress={() => setIsModalVisible(true)} />
      {/* render goal INPUT here */}
      <GoalInput visible={isModalVisible} onAddGoal={addGoalHandler} />

      {/* render all added goals here from GoalItem component*/}
      <FlatList
        data={allGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 60 },
});
