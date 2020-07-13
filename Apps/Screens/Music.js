import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Audio } from 'expo-av';

export default class Music extends Component {

  async componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true,

    });
    this.sound = new Audio.Sound();
    const status = {
      shouldPlay: false,
    }
    this.sound.loadAsync(require('../../assets/1.mp3'), status, false);
  }

  playSound(){
    this.sound.playAsync();
  }
  
  stopSound(){
    this.sound.stopAsync();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button 
        title='Play Sound'
        onPress={this.playSound.bind(this)}/>
        <Button 
        title='Stop Sound'
        onPress={this.stopSound.bind(this)}/>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
