import { Image, Text, View, StyleSheet } from 'react-native';
import { AntDesign, EvilIcons, Feather } from '@expo/vector-icons';
import React from 'react';

export const mockInitialData = {
  photoUrl: require('../../../assets/images/photo.jpg'),
  commentCount: 8,
  likeCount: 8,
  location: 'Львів',
};

export const PostDetail = (data = mockInitialData) => {
  const { photoUrl, commentCount, likeCount, location } = data;

  return (
    <View style={styles.form}>
      <View style={styles.photoWrap}>
        <Image style={styles.photo} source={photoUrl} />
      </View>
      <Text style={styles.label}>Ім'я</Text>
      <View style={styles.reactionsWrap}>
        <View style={styles.reaction}>
          <Feather name="message-circle" size={24} color="#FF6C00" />
          <Text style={styles.text}>{commentCount}</Text>
          {likeCount && (
            <>
              <AntDesign name="like2" size={24} color="#FF6C00" />
              <Text style={styles.text}>{likeCount}</Text>
            </>
          )}
        </View>
        <View style={styles.location}>
          <EvilIcons name="location" size={24} color="#BDBDBD" />
          <Text style={styles.text}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '100%',
    marginBottom: 20,
  },
  photoWrap: {
    width: '100%',
  },
  photo: {
    resizeMode: 'cover',
    width: '100%',
    height: 240,
    borderRadius: 8,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: '#212121',
    textAlign: 'left',
    marginBottom: 10,
  },
  reactionsWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reaction: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    justifyContent: 'space-between',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: '#212121',
  },
});
