import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
    Keyboard.dismiss();
  }

  const handleDeleteTask = (index) => {
    let allTasksCopy = [...taskItems];
    allTasksCopy.splice(index, 1);
    setTaskItems(allTasksCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Take a Note</Text>
        <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
        {taskItems.length !=0 && <Text style={styles.sectionInfo}>(Click any task to delete it)</Text>}
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => handleDeleteTask(index)} key={index}>
                  <Task text={item} index={index}></Task>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      {/* Taking task input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder='Write a new task' value={task} onChangeText={task => setTask(task)}></TextInput>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionInfo: {
    fontSize: 12,
    color: '#ee4748'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText: {
    textAlign: 'center',
  },
});
