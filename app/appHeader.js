import React, {Component} from 'react';
import {Image} from 'react-native';
import {Header, Left, Button, Icon, Title, Body, Right} from 'native-base';

export default class AppHeader extends Component {
render() {
return (
  <Header>
  <Body>
   <Title> News App </Title>
   </Body>
  </Header>
);
}
}

module.export = AppHeader;
