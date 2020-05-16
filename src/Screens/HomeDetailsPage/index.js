
import React, { Component } from 'react'
import { View, StyleSheet, Image,FlatList, Text, TouchableOpacity, ScrollView, Dimensions, SafeAreaView } from 'react-native'
import Modal from 'react-native-modal';

import YouTubePlayer from "react-native-youtube-sdk";

import { WebView } from 'react-native-webview';

import StatusBar from '../../Config/StatusBar';
import Colors from '../../Config/Color/Colors.js';
const { height } = Dimensions.get('window');
var TamilImageArray = [];

export default  class HomeDetailsPage extends Component {
      static navigationOptions = {
    header: null
  };
    state = {
        screenHeight: 0,
        Images:null,
        Title:'',
        TamilImageArray:[],
        status:'False',
        isVisible:false,
        Isvimeo:false,
        fullScreen: false,
        Descriotion:'',
        ContactArray:[],
        Barcode:'',
    }
    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight })
    }
componentDidMount(){

const CatName = this.props.navigation.getParam('ImageArray');
const FullyArray = this.props.navigation.getParam('FullyArray');
//const Type = this.props.navigation.getParam('Type');

     this.setState({
       Images:CatName,
       
     })
     FullyArray.reverse().map(item=>{
       
         this.setState({
             Title:item.title,
             Descriotion:item.body_html,
             ContactArray:item.variants,
             })
     })
     this.state.ContactArray.map(item=>{
       console.log('jjjjjjjjjjjjjj'+item.barcode)
       if(item.barcode == null){

       }else{
this.setState({
  barcode:item.barcode
})
       }
     })

     FullyArray.map(item=>{
    if(item.image == null){
    }else{
   this.state.TamilImageArray.push(item.image)
    }
})
    }
    // renderData=()=>{
    //     if(this.state.status == 'True'){
    //          return (
    //              <View style={{flex:2}}>
    //              <Text>Hi djhkjh</Text>
    //              </View>
    //          )
    //     }
    // }

    onFullScreen = (fullScreen) => {
        console.log('fullscreen ', fullScreen);
        this.setState({fullScreen});
      };
 
  play = () => {
    this.play.playVideo();
  };
  pause = () => {
      console.log('hdjhcd')
    this.play.pauseVideo();
  };
 
  seekTo = s => {
    this.player.seekTo(s);
  };
    render() {
        const scrollEnabled = this.state.screenHeight > height
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}
                    scrollEnabled={scrollEnabled}
                    onContentSizeChange={this.onContentSizeChange}
                >
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo}
                            source={{uri:this.state.Images}} />
                    </View>

                    <View style={{ marginHorizontal: 10, marginVertical: 15 }}>
                        <Text style={[styles.movietext, { fontWeight: 'bold' }]}>{this.state.Title}</Text>

                      <View style={{alignItems:'center'}}>
                         <TouchableOpacity
                                hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                                style={[styles.buttonContainer]}
                                onPress={() => this.setState({isVisible:true})
                            
                        }>
                            <Text style={styles.text1}>PLAY TRAILER</Text>
                        </TouchableOpacity>
                           <TouchableOpacity
                                hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                                style={[styles.buttonContainer]}
                                onPress={() => this.setState({Isvimeo:true})
                        }>
                            <Text style={styles.text1}>PLAY VIDEO</Text>
                        </TouchableOpacity>
                    </View>
    
                    </View>

                    <FlatList
                        data={this.state.TamilImageArray}
                        horizontal={true}
                         contentContainerStyle={{ paddingBottom: 10}}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                        <TouchableOpacity
                                hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                                onPress={() => this.props.navigation.navigate('HomeDetails',{
                                ImageArray:item.src,
                               // FullyArray:TamilArray,
                        })}>

                        <View style={{padding:4}}>
                        <Image style={{ height: 160, width: 160, marginRight:4 }}
                        source = {{ uri: item.src }}
                        />
                        </View>
                        </TouchableOpacity>
                        }>
                        </FlatList>


                </ScrollView>
                <StatusBar />               
                <Modal isVisible={this.state.isVisible}>
<View style={{paddingTop: 60,alignItems:'center',justifyContent:'center'}}>
<YouTubePlayer
  ref={ref => (this.youTubePlayer = ref)}
  videoId="rsisl10lHbA"
  autoPlay={true}
  fullscreen={true}
  showFullScreenButton={true}
  showSeekBar={true}
  showPlayPauseButton={true}
  startTime={5}
  style={{ width: "100%", height: 200 }}
  onError={e => console.log(e)}
  onChangeState={e => console.log(e)}
  onChangeFullscreen={e => console.log(e)}
/>
</View>


        </Modal>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: Colors.primary,
    },
    logo: {
        height: '100%',
        width: '100%',
    },

    
      button: {
        backgroundColor: "red",
        margin: 12,
        padding: 12,
        borderRadius: 4,
      },
    logoContainer: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    },
    movietext: {
        fontSize: 26,
        color: Colors.fontColor
    },
    text: {
        fontSize: 15,
        //padding:10,
        color: Colors.fontColor
    },
     text1: {
        fontSize: 18,
        //padding:10,
        color: Colors.fontColor
    },
    buttonContainer: {
        flexDirection: 'row',
        height: 48,
        width:'80%',
        backgroundColor: '#f31a38',
        borderRadius: 8,
        justifyContent:'center',
        padding:10,
        color: 'white',
        alignItems: 'center',
        marginVertical: 10

    },
    smallButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10
    },
    smallButton: {
        alignItems: 'center',
        height: 70,
        width: 70
    },
    buttonText: {
        fontSize: 12
    }
});
