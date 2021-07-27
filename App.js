import React, {useState} from 'react'; // how do we declare state

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const Appy = () => {
  // just after this line we define our state it's almost like defining a variable

  const [randomColor, setRandomColor] = useState('rgb(32,0,126)');

  const changeBackground = () => {
    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';

    setRandomColor(color);
  };

  const resetbg=()=>{
    setRandomColor("#020202");
  };

  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBackground}>
          <Text style={styles.text}>Change it</Text>
        </TouchableOpacity>

        {/* reset button */}
        <TouchableOpacity onPress={resetbg}>
          <Text style={styles.reset}>Reset It</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default Appy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c1c1c1',
  },
  text: {
    fontSize: 30,
    backgroundColor: '#62F700',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#FFFFFF',
    borderRadius: 15,
    shadowColor: '#ffffff',
  },
  reset: {
    marginTop:30,
    fontSize: 30,
    alignItems:'center',
    backgroundColor: '#c1c1c1',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#FFFFFF',
    borderRadius: 15,
    shadowColor: '#ffffff',
  },
});
