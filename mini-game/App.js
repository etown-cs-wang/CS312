import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const GameOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (!gameIsOver && userNumber) {
    screen = <GameScreen userNumber={Number(userNumber)} onGameOver={GameOverHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} />;
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
