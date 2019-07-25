import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';

import Stylish from './components/Stylish';

const MovieData = require('./assets/Info.json');

export default class App extends React.Component {
  
  RenderMovieInfo = ({item}) => {

    const {title, image, url} = item;

    return(<Stylish TitleImage={title} LinkImage={image} LinkMovie={url} />);
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.header}>Basic React Native App</Text>
        </View>
        <View>
          <Text style={styles.title}>Top Ten Movies of IMDb</Text>
          <FlatList data={MovieData} renderItem={this.RenderMovieInfo} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0097D6',
    color: '#FFF',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 15,
  },
});
