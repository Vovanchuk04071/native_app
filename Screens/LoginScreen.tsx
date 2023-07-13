import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';

enum Fields {
  Email = 'email',
  Password = 'password',
}

const initialState = {
  [Fields.Email]: '',
  [Fields.Password]: '',
};

export const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isViewPassword, setIsViewPassword] = useState(true);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState(Dimensions.get('window').width + 2);
  const [activeField, setActiveField] = useState<Fields>(null);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width + 5 * 2;
      setDimensions(width);
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

  const handleFocus = (field: Fields) => {
    setActiveField(field);
    setIsShowKeyboard(true);
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/background.jpg')} style={styles.image}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View
              style={{
                ...styles.loginWrap,
                marginBottom: isShowKeyboard ? -240 : 0,
                width: dimensions,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.title}>Увійти</Text>
              </View>
              <View style={{ marginTop: 30 }}>
                <TextInput
                  style={
                    activeField === Fields.Email || state.email
                      ? { ...styles.inputText, ...styles.activeInput }
                      : styles.inputText
                  }
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor="#003f5c"
                  onChangeText={text => setState({ ...state, [Fields.Email]: text })}
                  onFocus={() => handleFocus(Fields.Email)}
                />
              </View>
              <View style={{ marginTop: 15 }}>
                <TextInput
                  style={{
                    ...styles.inputText,
                    ...(activeField === Fields.Password || state.password
                      ? { ...styles.inputText, ...styles.activeInput }
                      : styles.inputText),
                  }}
                  placeholder="Пароль"
                  placeholderTextColor="#003f5c"
                  onChangeText={text => setState({ ...state, [Fields.Password]: text })}
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
                <TouchableOpacity style={styles.login}>
                  <Text style={styles.loginTitle}>Увійти</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.registerWrap}>
                <Text style={styles.registerTitle}>Немає акаунту?</Text>
                <TouchableOpacity activeOpacity={0.7} onPress={hideKeyboard}>
                  <Text style={styles.registerTitle}> Зареєструватись</Text>
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
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
  loginWrap: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'relative',
  },
  header: {
    alignItems: 'center',
  },
  title: {
    color: '#212121',
    fontSize: 30,
    fontWeight: 500,
    fontFamily: 'Roboto-Medium',
    marginTop: 30,
  },
  inputText: {
    backgroundColor: '#F6F6F6',
    color: '#E8E8E8',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    marginHorizontal: 16,
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
  login: {
    color: '#FFFFFF',
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  loginTitle: {
    color: '#FFFFFF',
  },
  registerWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 150,
  },
  registerTitle: {
    color: '#1B4371',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
});
