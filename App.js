import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Main } from './src/views/main';
import { Task } from './src/components/task'

export default function App() {
  return (
    <View >
      <Task />
      <StatusBar style="auto" />
    </View>
  );
}


