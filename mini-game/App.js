import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }


  return (
    <ImageBackground
      source={require('./assets/images/background.png')}
      resize="cover"
      style={styles.rootScreen}
    >
      <SafeAreaView>
        {screen}
      </SafeAreaView>


    </ImageBackground>
  );
  return (
    <ImageBackground
      source={require('./assets/images/background.png')}
      resize="cover"
      style={styles.rootScreen}
    >
      <StartGameScreen />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: '#ddb52f',
    flex: 1
  }
});
