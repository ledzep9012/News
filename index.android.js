/**
 * Sample app to demonstrate React-Native features.
 * This app would parse the contents fetched from newsapi.org and bind the views in the ui
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Container,
  StyleProvider,
  Badge
} from 'native-base';

import AppHeader from './app/appHeader';
import AppBody from './app/appBody';
import apiNews from './app/newsapi';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: "",
      articles: []
    }
  }

  componentWillMount() {
    apiNews.getNews().then((newsResponse) => {
      this.setState({
        source: newsResponse.source,
        articles: newsResponse.articles
      })
    });
  }

  render() {
    return (
      <Container>
        <AppHeader />

        <Text style={styles.headline}>{this.state.source}</Text>
        <AppBody data={this.state.articles} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
  }
});


AppRegistry.registerComponent('News', () => News);
