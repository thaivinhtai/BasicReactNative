import React, {Component} from "react";
import {
  View, Text, TouchableOpacity, StyleSheet, Image, Linking
} from "react-native";

export default class Stylish extends React.Component {
  render() {
    return (
      <View style={MovieStyle.Container}>
        <View style={MovieStyle.Title}>
          <Text style={MovieStyle.TitleContent}>{this.props.TitleImage}</Text>
        </View>
        <View style={MovieStyle.ImageFrame}>
          <Image source={{uri: this.props.LinkImage}} style={MovieStyle.ImageContent} />
        </View>
        <View style={MovieStyle.Info}>
          <TouchableOpacity style={MovieStyle.InfoButton} onPress={() => Linking.openURL(this.props.LinkMovie)}>
            <Text style={MovieStyle.InfoText}>More Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

Stylish.propType = {
  TitleImage: React.PropTypes,
  LinkImage: React.PropTypes,
  LinkMovie: React.PropTypes
}

var MovieStyle = StyleSheet.create({
  Container: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#D6D7DA',
    marginVertical: 5,
    alignSelf: 'stretch',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  Title: {
    margin: 5,
    fontSize: 18,
  },
  TitleContent: {
    margin: 5,
    fontSize: 18,
  },
  ImageFrame: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
  ImageContent: {
    flex: 1,
    width: '100%',
    height: 300,
  },
  Info: {
    borderTopWidth: 1,
    borderColor: '#D6D7DA',
  },
  InfoButton: {
    borderRadius: 4,
    borderWidth: 1,
    marginHorizontal: 15,
    marginVertical: 5,
    borderColor: '#478DFF',
    padding: 10,
  },
  InfoText: {
    color: '#007AFA',
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center',
  }
})