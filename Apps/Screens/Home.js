import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BannerComponent from '../Components/BannerComponent';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>Stavans</Text>
       <BannerComponent/>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
