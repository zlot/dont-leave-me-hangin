import React from 'react'
import {
  AppRegistry,
  Text,
  StyleSheet,
  View,
  Dimensions
} from 'react-native'
import Interactable from 'react-native-interactable'


export default class DontLeaveMeHangin extends React.Component {
  render() {
    const {width, height} = Dimensions.get('window')

    return (
      <View style={styles.container}>
        <Interactable.View
          snapPoints={[]}
          frictionAreas={[{damping: 0.82}]}
          boundaries={{
            top: -height/2,
            left: -width/2,
            bottom: height/2,
            right: width/2,
            bounce: 0.5
          }}
          initialPosition={{x: 0, y: 0}}
        >
          <View
            style={{width: 70, height: 70, backgroundColor: 'aqua', borderRadius: 35}}
          />
        </Interactable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('DontLeaveMeHangin', () => DontLeaveMeHangin);
