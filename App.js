import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Main } from './src/views/main';

export default function App() {
  return (
    <View >
      <Main />
      <StatusBar style="auto" />
    </View>
  );
}


