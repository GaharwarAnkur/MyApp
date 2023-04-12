import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MyImagePicker from './MyImagePicker';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MyImagePicker />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
