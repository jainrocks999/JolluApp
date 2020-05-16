import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import StatusBar from '../../Config/StatusBar';
import Colors from '../../Config/Color/Colors.js';


const DATA = [
    {
        id: '1',
        images: "https://source.unsplash.com/1024x768/?water",
    },
    {
        id: '2',
        images: 'https://source.unsplash.com/1024x768/?girl',
    },
    {
        id: '3',
        images: 'https://source.unsplash.com/1024x768/?tree',
    }, {
        id: '4',
        images: 'https://source.unsplash.com/1024x768/?tree',
    },
    {
        id: '5',
        images: 'https://source.unsplash.com/1024x768/?girl',
    },
    {
        id: '6',
        images: 'https://source.unsplash.com/1024x768/?tree',
    },
    {
        id: '4',
        images: 'https://source.unsplash.com/1024x768/?tree',
    },
    {
        id: '5',
        images: 'https://source.unsplash.com/1024x768/?girl',
    },
    {
        id: '6',
        images: 'https://source.unsplash.com/1024x768/?tree',
    },
    {
        id: '4',
        images: 'https://source.unsplash.com/1024x768/?tree',
    },
    {
        id: '5',
        images: 'https://source.unsplash.com/1024x768/?girl',
    },
    {
        id: '6',
        images: 'https://source.unsplash.com/1024x768/?tree',
    },
];

export default class CategoryName extends Component {
    static navigationOptions = {
    header: null
  };
    constructor(props) {
        super(props);
        this.state = {
            TamilImageArray:[],
            Type:'',
        };
    }
    componentDidMount(){
const CatName = this.props.navigation.getParam('ArrayData');
const Type = this.props.navigation.getParam('Type');
     this.setState({
       TamilImageArray:CatName,
       Type:Type,
     })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{flex:1}}>

                   <View style={{ marginTop: 10, justifyContent: 'space-between', alignItems: 'center', height: 32, width: '100%', flexDirection: 'row' }}>
              <View style={{width:'94%',alignItems:'center'}}>
               <Image
                    style={{height: '80%', width:100,padding:10 }} resizeMode={'stretch'}
                    source={require('../../Assets/Images/logo_small.png')}>
               </Image>
               </View>
               </View>
                    <View style={{ marginTop: 10,width:'99%',justifyContent:'center' }}>
                        <Text style={[styles.text, { fontWeight: 'bold', marginVertical: 10,alignSelf:'center',width:'99%' }]}>{this.state.Type}</Text>

                        <FlatList
                    data={this.state.TamilImageArray}
                   // horizontal={true}
                    //index={5}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                    <View style={{padding:4}}>
                        <Image style={{ height: 160, width: 112, marginRight:4 }}
                        source = {{ uri: item.src }}
                        />
                        </View>
                    }>
                </FlatList>
                
                    </View>
                </ScrollView>
                <StatusBar/>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent:'center',alignItems:'center'
    },
    text: {
        fontSize: 16,
        color: Colors.fontColor,
        padding:8
    },
});
