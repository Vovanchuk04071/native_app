import { Image, Text, View, StyleSheet } from 'react-native';
import React from 'react';

export const mockInitialData = {
  isUser: true,
  photoUrl: require('../../../assets/images/photo.jpg'),
  comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.',
  commentData: '12.12.2021',
};

export const CommentsDetail = data => {
  const { isUser, photoUrl, comment, commentData } = data;

  return (
    <>
      {isUser ? (
        <View style={styles.user}>
          <View style={styles.userInfo}>
            <Text style={styles.userText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.
            </Text>
            <Text style={styles.userDateComment}>12.12.2021</Text>
          </View>
          <View style={styles.userIcon}>
            <Image style={styles.userPhoto} source={require('../../../assets/images/photo.jpg')} />
          </View>
        </View>
      ) : (
        <View style={styles.guest}>
          <View style={styles.guestIcon}>
            <Image style={styles.guestPhoto} source={photoUrl} />
          </View>
          <View style={styles.guestInfo}>
            <Text style={styles.guestText}>{comment}</Text>
            <Text style={styles.dateComment}>{commentData}</Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  guest: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  guestIcon: {
    width: 28,
    height: 28,
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 10,
  },
  guestPhoto: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  guestInfo: {
    flexShrink: 1,
    backgroundColor: '#F6F6F6',
    padding: 10,
    borderRadius: 6,
  },
  guestText: {
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    color: '#212121',
  },
  dateComment: {
    fontSize: 10,
    fontFamily: 'Roboto-Regular',
    color: '#BDBDBD',
    marginTop: 5,
    textAlign: 'right',
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  userIcon: {
    width: 28,
    height: 28,
    borderRadius: 50,
    overflow: 'hidden',
    marginLeft: 10,
  },
  userPhoto: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  userInfo: {
    flexShrink: 1,
    backgroundColor: '#F6F6F6',
    padding: 10,
    borderRadius: 6,
  },
  userText: {
    flexShrink: 1,
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    color: '#212121',
  },
  userDateComment: {
    fontSize: 10,
    fontFamily: 'Roboto-Regular',
    color: '#BDBDBD',
    marginTop: 5,
    textAlign: 'left',
  },
});
