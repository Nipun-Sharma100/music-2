import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,Image } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from './config'


export default class MusicLinks extends Component{
  constructor(){
    super()
    this.state = {
      userId  : firebase.auth().currentUser.email,
     
    }
  this.requestRef= null
  }

  
   
  copyCodeToClipboard = () => {
      const el = this.textArea
      el.select()
      document.execCommand("copy")
  }  

 
  render(){
    return(
     <View style={styles.subcontainer}> 
       <Text style={styles.musiclinks}>      
         Music Links
       </Text>
       <View>
       <textarea
            ref={(textarea) => this.textArea = textarea}
            value="https://www.radioart.com/radioart-player/play?channel=1"
          />
          <TouchableOpacity
          style={styles.button}
           onPress={() => this.copyCodeToClipboard()}>
            <Text style={styles.buttonText}>Copy to Clipboard</Text>

          </TouchableOpacity>
       </View>
       <View>
       <textarea
            ref={(textarea) => this.textArea = textarea}
            value="https://www.radioart.com/radioart-player/play?channel=37"
          />
          <TouchableOpacity
          style={styles.button}
           onPress={() => this.copyCodeToClipboard()}>
            <Text style={styles.buttonText}>Copy to Clipboard</Text>

          </TouchableOpacity>
       </View>
       <View>
       <textarea
            ref={(textarea) => this.textArea = textarea}
            value="https://www.radioart.com/radioart-player/play?channel=34"
          />
          <TouchableOpacity
          style={styles.button}
           onPress={() => this.copyCodeToClipboard()}>
            <Text style={styles.buttonText}>Copy to Clipboard</Text>

          </TouchableOpacity>
       </View>
       <View>
       <textarea
            ref={(textarea) => this.textArea = textarea}
            value="https://www.radioart.com/radioart-player/play?channel=15"
          />
          <TouchableOpacity
          style={styles.button}
           onPress={() => this.copyCodeToClipboard()}>
            <Text style={styles.buttonText}>Copy to Clipboard</Text>

          </TouchableOpacity>
       </View>
       <View>
       <textarea
            ref={(textarea) => this.textArea = textarea}
            value="https://www.radioart.com/radioart-player/play?channel=25"
          />
          <TouchableOpacity
          style={styles.button}
           onPress={() => this.copyCodeToClipboard()}>
            <Text style={styles.buttonText}>Copy to Clipboard</Text>

          </TouchableOpacity>
       </View>
       <View>
       <textarea
            ref={(textarea) => this.textArea = textarea}
            value="https://www.radioart.com/radioart-player/play?channel=28"
          />
          <TouchableOpacity
          style={styles.button}
           onPress={() => this.copyCodeToClipboard()}>
            <Text style={styles.buttonText}>Copy to Clipboard</Text>

          </TouchableOpacity>
       </View>
       <View>
       <textarea
            ref={(textarea) => this.textArea = textarea}
            value="https://www.radioart.com/radioart-player/play?channel=41"
          />
          <TouchableOpacity
          style={styles.button}
           onPress={() => this.copyCodeToClipboard()}>
            <Text style={styles.buttonText}>Copy to Clipboard</Text>

          </TouchableOpacity>
       </View>
       <View>
       <textarea
            ref={(textarea) => this.textArea = textarea}
            value="https://www.radioart.com/radioart-player/play?channel=114"
          />
          <TouchableOpacity
          style={styles.button}
           onPress={() => this.copyCodeToClipboard()}>
            <Text style={styles.buttonText}>Copy to Clipboard</Text>

          </TouchableOpacity>
       </View>    
       <View>
       <textarea
            ref={(textarea) => this.textArea = textarea}
            value="https://www.radioart.com/radioart-player/play?channel=6"
          />
          <TouchableOpacity
          style={styles.button}
           onPress={() => this.copyCodeToClipboard()}>
            <Text style={styles.buttonText}>Copy to Clipboard</Text>

          </TouchableOpacity>
       </View>
       <View>
       <textarea
            ref={(textarea) => this.textArea = textarea}
            value="https://www.radioart.com/radioart-player/play?channel=38"
          />
          <TouchableOpacity
          style={styles.button}
           onPress={() => this.copyCodeToClipboard()}>
          <Text style={styles.buttonText}>Copy to Clipboard</Text>

          </TouchableOpacity>
       </View>
     </View>
     
    )
  }
}

const styles = StyleSheet.create({
  musiclinks:{
    fontSize: 20,
    width:150,
    length:80,
    color:"lime",

  },
  subContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:150,
    height:70,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"blue",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     },
   //  marginLeft:300,
     borderWidth:1,
     borderRadius:20
  },
  buttonText:{
    color:"white",
    fontSize:"15"
  }
})
