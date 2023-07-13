import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
  Button,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { AddIcon, DeleteIcon } from '../assets/icons';

const initialState = {
  login: '',
  email: '',
  password: '',
  image: null,
};

enum Fields {
  Login = 'login',
  Email = 'email',
  Password = 'password',
}

export const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isViewPassword, setIsViewPassword] = useState(true);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState({ width: Dimensions.get('window').width - 15 * 2 });
  const [activeField, setActiveField] = useState<Fields>(null);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width - 15 * 2;
      setDimensions({ width });
    };
    const subscription = Dimensions.addEventListener('change', onChange);

    return () => {
      subscription?.remove();
    };
  }, []);

  const hideKeyboard = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
    setActiveField(null);
  };

  const submitForm = () => {
    console.log(state);
    hideKeyboard();
    setState(initialState);
  };

  const handleFocus = (field: Fields) => {
    setActiveField(field);
    setIsShowKeyboard(true);
  };

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

  const deletePhoto = () => setState({ ...state, image: null });

  const hasUserPhoto = state.image;

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/background.jpg')}
          style={styles.imageBackground}
        >
          <KeyboardAvoidingView
            style={styles.registryContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <View
              style={{
                width: dimensions.width,
                marginBottom: isShowKeyboard ? -190 : 0,
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

              <View style={styles.header}>
                <Text style={styles.title}>Реєстрація</Text>
              </View>
              <View style={{ marginTop: 30 }}>
                <TextInput
                  style={
                    activeField === Fields.Login || state.login
                      ? { ...styles.input, ...styles.activeInput }
                      : styles.input
                  }
                  placeholder="Логін"
                  value={state.login}
                  onChangeText={text => setState({ ...state, login: text })}
                  onFocus={() => handleFocus(Fields.Login)}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <TextInput
                  style={
                    activeField === Fields.Email || state.email
                      ? { ...styles.input, ...styles.activeInput }
                      : styles.input
                  }
                  placeholder="Адреса електронної пошти"
                  value={state.email}
                  onChangeText={text => setState({ ...state, email: text })}
                  onFocus={() => handleFocus(Fields.Email)}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <TextInput
                  style={
                    activeField === Fields.Password || state.password
                      ? { ...styles.input, ...styles.activeInput }
                      : styles.input
                  }
                  placeholder="Пароль"
                  value={state.password}
                  onChangeText={text => setState({ ...state, password: text })}
                  onFocus={() => handleFocus(Fields.Password)}
                  secureTextEntry={isViewPassword}
                />
                {isViewPassword ? (
                  <Text
                    style={styles.viewPassword}
                    onPress={() => setIsViewPassword(!isViewPassword)}
                  >
                    Показати
                  </Text>
                ) : (
                  <Text
                    style={styles.viewPassword}
                    onPress={() => setIsViewPassword(!isViewPassword)}
                  >
                    Приховати
                  </Text>
                )}
              </View>
              <View style={{ marginTop: 30 }}>
                <TouchableOpacity style={styles.register} activeOpacity={0.7} onPress={submitForm}>
                  <Text style={styles.registerTitle}>Зареєструватися</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.loginWrapper}>
                <Text style={styles.loginTitle}>Вже є акаунт?</Text>
                <TouchableOpacity activeOpacity={0.7} onPress={hideKeyboard}>
                  <Text style={styles.loginTitle}> Увійти</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'relative',
    width: '100%',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  title: {
    color: '#212121',
    fontSize: 30,
    fontWeight: 500,
    fontFamily: 'Roboto-Medium',
    marginTop: 80,
  },
  input: {
    backgroundColor: '#F6F6F6',
    color: '#E8E8E8',
    borderColor: '#E8E8E8',
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 16,
    position: 'relative',
  },
  activeInput: {
    backgroundColor: '#ffffff',
    color: '#212121',
    borderColor: '#FF6C00',
  },
  viewPassword: {
    position: 'absolute',
    right: 36,
    top: 15,
  },
  register: {
    color: '#FFFFFF',
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  registerTitle: {
    color: '#FFFFFF',
  },
  loginWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 100,
  },
  loginTitle: {
    color: '#1B4371',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
});
