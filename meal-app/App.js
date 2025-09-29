import { StyleSheet, Text, View } from 'react-native';

import CategoruyScreen from './screens/CategoryScreen';

export default function App() {
  return (
    <CategoruyScreen />
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
