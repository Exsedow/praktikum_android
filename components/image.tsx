import React from 'react';
import { ScrollView, Image, StyleSheet, View } from 'react-native';

const images = [
  require('../assets/images/XL1.png'),
  require('../assets/images/XL2.png'),
  require('../assets/images/XL3.png'),
  require('../assets/images/XL4.png'),
];

const App = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageContainer}>
      {images.map((image, index) => (
        <View key={index} style={styles.imageWrapper}>
          <Image source={image} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  imageWrapper: {
    marginHorizontal: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default App;
