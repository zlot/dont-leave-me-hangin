import React from 'react'
import {
  AppRegistry,
  Text,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Image
} from 'react-native'
import Interactable from 'react-native-interactable'


export default class DontLeaveMeHangin extends React.Component {
  render() {
    const {width, height} = Dimensions.get('window')

    return (
      <View style={styles.container}>
        <Image source={require('./bg.png')} style={{
          resizeMode: 'cover',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',          
        }}>
          <Interactable.View
            snapPoints={[]}
            frictionAreas={[{damping: 0.85}]}
            boundaries={{
              top: -height/2,
              left: -width/2,
              bottom: height/2,
              right: width/2,
              bounce: 0.5
            }}
            initialPosition={{x: 0, y: 0}}
            animatedNativeDriver={true}
          >
            <View style={{
              width: 85, 
              height: 85, 
              backgroundColor: '#0c64e8', 
              borderRadius: 43,
              flex: 0,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Text style={{fontSize: 20, color: 'white'}}>Luke</Text>
            </View>
          </Interactable.View>

        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('DontLeaveMeHangin', () => DontLeaveMeHangin);
