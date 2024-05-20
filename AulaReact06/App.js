import { StatusBar } from 'expo-status-bar';
import { ScrollView, ScrollViewComponent, StyleSheet, Text, View,Image } from 'react-native';
import Header from './components/Header';
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Header/>
      <View style={styles.box1}>
      <Image
      source={{uri: "https://wallpapercave.com/wp/wp6358087.jpg"}}
      style={{widht:300, height:300}}
      />
      </View>
       <View style={styles.box2}>
      <Image
      source={{uri: "https://w0.peakpx.com/wallpaper/861/958/HD-wallpaper-lofi-pixel-pixel-cafe.jpg"}}
      style={{widht:300, height:300}}
      />
      </View>
       <View style={styles.box3}>
      <Image
      source={{uri: "https://moewalls.com/wp-content/uploads/2023/02/lofi-cozy-house-rainy-night-thumb-728x410.jpg"}}
      style={{widht:300, height:300}}
      />
      </View>
      <View style={styles.box4}>
      <Image
      source={{uri: "https://wallpapercave.com/wp/wp8231626.jpg"}}
      style={{widht:300, height:300}}
      />
      </View>
      <View style={styles.box5}>
      <Image
      source={{uri: "https://i.redd.it/ytkkbowirm061.jpg"}}
      style={{widht:300, height:300}}
      />
      </View>
      <View style={styles.box6}>
       <Image
        source={{uri: "https://wallpapercave.com/wp/wp7892902.jpg"}}
        style={{widht:300, height:300}}
      />
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  box1: 
  {
   padding: 5,
   backgroundColor: '#454545'
  },

  box2: 
  {
   padding: 5,
   backgroundColor: '#454545'
  },

  box3: 
  {
   padding: 5,
   backgroundColor: '#454545'
  },

  box4: 
  {
   padding: 5,
   backgroundColor: '#454545'
  },

  box5: 
  {
   padding: 5,
   backgroundColor: '#454545'
  },

  box6: 
  {
   padding: 5,
   backgroundColor: '#454545'
  },

});
