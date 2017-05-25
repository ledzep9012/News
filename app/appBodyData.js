import React, { Component } from 'react';
import { Text, Image } from 'react-native';

import { Content, Card, CardItem, Body, Left, Thumbnail, Button, Icon } from 'native-base';
import FitImage from 'react-native-fit-image';

export default class AppBodyData extends Component {

    render() {
        console.log("In AppBodyData", this.props.data);
        let articles = this.props.data.map(function (articleData, index) {
            return (
                <Card key={index}>
                    <CardItem>
                        <Left>
                            <Body>
                                <Text>{articleData.title}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <FitImage source={{ uri: articleData.urlToImage }} />
                    </CardItem>

                    <CardItem>
                        <Text source={{ uri: articleData.url }} />
                    </CardItem>
                    <CardItem content>
                        <Body>
                            <Text>{articleData.description}</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>
                                Author : {articleData.author}
                            </Text>
                        </Button>
                    </CardItem>
                </Card>
            )
        });

        return (
            <Content style = {{padding : 5}}>
                {articles}
            </Content>
        );

    }
}
module.export = AppBodyData;
