import { StyleSheet, View, StatusBar } from 'react-native';
import Title from './src/components/Title'
import Form from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
      <StatusBar barStyle={'default'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
