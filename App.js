import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { CarProvider } from './components/CarContext';

import CarCountComponent from './components/CarCountComponent';
import CarinputComponent from './components/CarinputComponent';
import CarListComponent from './components/CarListComponent';

export default function App() {
  return (
    <CarProvider>
      <View style={styles.container}>
        <CarCountComponent />
        <CarinputComponent />
        <CarListComponent />
        <StatusBar style="auto" />
      </View>
    </CarProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
