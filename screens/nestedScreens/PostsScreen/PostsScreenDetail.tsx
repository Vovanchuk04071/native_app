import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, EvilIcons, Feather } from '@expo/vector-icons';
import React from 'react';

export const PostsScreenDetail = (data, navigation) => {
  console.log('data', data);
  const { photo, commentCount = 0, location, name } = data;

  return (
    <View key={name} style={styles.form}>
      <View style={styles.photoWrap}>
        <Image style={styles.photo} source={{ uri: photo.uri }} />
      </View>
      <Text style={styles.label}>{name}</Text>
      <View style={styles.reactionsWrap}>
        <View style={styles.reaction}>
          <TouchableOpacity onPress={() => navigation.navigate('CommentsScreen')}>
            <Feather name="message-circle" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <Text style={styles.text}>{commentCount}</Text>
        </View>

        <View style={styles.location}>
          <TouchableOpacity onPress={() => navigation.navigate('MapsScreen')}>
            <EvilIcons name="location" size={24} color="#BDBDBD" />
          </TouchableOpacity>
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
    width: '10%',
    justifyContent: 'space-between',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#212121',
  },
});
