import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useDimensions } from '../../../hooks/useDimensions';
import { BackIcon } from '../../../assets/icons';
import { EvilIcons, AntDesign } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

const CreatePostsScreen = ({ navigation }) => {
  const dimensions = useDimensions();

  const [cameraRef, setCameraRef] = React.useState(null);
  const [type, setType] = React.useState(Camera.Constants.Type.back);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [state, setState] = React.useState({
    photo: null,
    location: null,
    name: '',
  });

  const updateState = (key, value) => setState({ ...state, [key]: value });

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let { status: locationStatus } = await Location.requestForegroundPermissionsAsync();

      if (locationStatus !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();

      updateState('photo', photo);
    }
  };

  const editPhoto = () => updateState('photo', null);
  const addPhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      return updateState('photo', result.assets[0]);
    }
  };

  const getLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});

    updateState('location', location);
  };

  const handleCreatePost = () => navigation.navigate('DefaultScreenPosts', { ...state });

  const hasPhoto = state.photo !== null;

  return (
    <View style={styles.container}>
      <View style={{ ...styles.wrapper, width: dimensions.width }}>
        <Text style={styles.title}>Створити публікацію</Text>
        <View style={styles.back}>
          <BackIcon />
        </View>
      </View>
      <Text style={styles.line}></Text>
      <View style={{ ...styles.wrapper, width: dimensions.width }}>
        <View style={styles.photoWrap}>
          <Camera style={styles.addPhoto} ref={setCameraRef}>
            {hasPhoto && (
              <View style={styles.viewPhoto}>
                <Image
                  source={{ uri: state.photo.uri }}
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
            )}
            <TouchableOpacity
              style={{
                ...styles.addPhotoIcon,
                backgroundColor: hasPhoto ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 1)',
              }}
              onPress={takePhoto}
            >
              {state.photo ? (
                <Ionicons name="camera" size={24} color="#FFFFFF" />
              ) : (
                <Ionicons name="camera" size={24} color="#BDBDBD" />
              )}
            </TouchableOpacity>
          </Camera>
          <View style={styles.addPhotoText}>
            {hasPhoto ? (
              <TouchableOpacity onPress={editPhoto}>
                <Text style={styles.addPhotoText}>Редагувати фото</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={addPhoto}>
                <Text>Завантажити фото</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            placeholder="Назва ..."
            onChange={e => updateState('name', e.nativeEvent.text)}
          />
        </View>
        <View style={{ ...styles.inputWrap, marginBottom: 30 }}>
          <EvilIcons name="location" size={24} color="#BDBDBD" />
          <TextInput style={styles.input} placeholder="Місцевість ..." onChange={getLocation} />
        </View>
        <TouchableOpacity style={styles.sendBtn} onPress={handleCreatePost} activeOpacity={0.7}>
          <Text style={styles.button}>Опублікувати</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.deleteBtn}>
        <AntDesign name="delete" size={24} color="#BDBDBD" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
    position: 'relative',
  },
  wrapper: {
    alignItems: 'center',
    position: 'relative',
    marginBottom: 15,
  },
  title: {
    fontSize: 17,
    fontFamily: 'Roboto-Medium',
    color: '#212121',
  },
  back: {
    position: 'absolute',
    left: 0,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#E8E8E8',
    marginBottom: 30,
  },
  photoWrap: {
    width: '100%',
    marginBottom: 30,
  },
  addPhoto: {
    position: 'relative',
    height: 240,
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhotoIcon: {
    position: 'absolute',
    zIndex: 2,
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewPhoto: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 240,
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    zIndex: 1,
  },
  addPhotoText: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#BDBDBD',
  },
  inputWrap: {
    width: '100%',
    marginBottom: 15,
    height: 50,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  sendBtn: {
    width: '100%',
    height: 50,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  button: {
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  deleteBtn: {
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    width: 70,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
  },
});

export default CreatePostsScreen;
