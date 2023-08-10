import React from 'react';
import { useDimensions } from '../../../hooks/useDimensions';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { AddIcon, DeleteIcon, LogOutIcon } from '../../../assets/icons';
import { Feather, AntDesign, EvilIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { mockInitialData, PostDetail } from './PostDetail';

const ProfileScreen = ({ navigation }) => {
  const dimensions = useDimensions();

  const [state, setState] = React.useState({
    image: '',
  });

  const [isShowKeyboard, setIsShowKeyboard] = React.useState(false);
  const [hasUserPhoto, setHasUserPhoto] = React.useState(false);

  const deletePhoto = () => setState({ ...state, image: null });
  const addPhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      return setState({ ...state, image: result.assets[0].uri });
    }

    return;
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background.jpg')}
        style={styles.imageBackground}
      >
        <KeyboardAvoidingView
          style={styles.registryContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View
            style={{
              width: dimensions.width,
            }}
          >
            <View
              style={{
                ...styles.userPhotoWrap,
                backgroundColor: hasUserPhoto ? 'transparent' : '#F6F6F6',
              }}
            >
              {hasUserPhoto ? (
                <Image source={{ uri: state.image }} style={styles.userPhoto} />
              ) : null}
              <TouchableOpacity
                style={styles.addIcon}
                activeOpacity={0.7}
                onPress={hasUserPhoto ? deletePhoto : addPhoto}
              >
                <View>{hasUserPhoto ? <DeleteIcon /> : <AddIcon />}</View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.logout} onPress={() => navigation.navigate('Login')}>
              <LogOutIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <Text style={styles.title}>Профіль</Text>
          </View>
          <ScrollView style={{ width: dimensions.width }}>
            {new Array(10).fill(mockInitialData).map((value, index) => PostDetail(value))}
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  userPhotoWrap: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
    alignSelf: 'center',
    position: 'absolute',
    top: -60,
    zIndex: 1,
  },
  userPhoto: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  addIcon: {
    position: 'absolute',
    top: 80,
    right: -12,
    zIndex: 2,
  },
  registryContainer: {
    flex: 1,
    marginTop: 160,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'relative',
    width: '100%',
    alignItems: 'center',
  },
  logout: {
    position: 'absolute',
    right: 0,
    top: 20,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    color: '#212121',
  },
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

export default ProfileScreen;
