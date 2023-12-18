import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {Data} from './Datas';

export default function App() {
  return (
    <View style={styles.container}>
   <Data/>
      <StatusBar style="auto" />
    </View>
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
