import { useDimensions } from '../../../hooks/useDimensions';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import { BackIcon } from '../../../assets/icons';
import { Ionicons } from '@expo/vector-icons';
import { CommentsDetail, mockInitialData } from './CommentsDetail';
import { useNavigation } from '@react-navigation/native';

const CommentsScreen = () => {
  const dimensions = useDimensions();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ ...styles.wrapper, width: dimensions.width }}>
        <Text style={styles.title}>Коментарі</Text>
        <TouchableOpacity style={styles.comeBack} onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
      </View>
      <Text style={styles.line}></Text>
      <View style={{ ...styles.wrapperContent, width: dimensions.width }}>
        <View style={styles.photoWrap}>
          <Image style={styles.photo} source={require('../../../assets/images/photo.jpg')} />
        </View>
        <ScrollView style={{ width: dimensions.width }}>
          <View style={{ width: dimensions.width }}>
            {new Array(10).fill(mockInitialData).map((value, index) =>
              CommentsDetail({
                ...value,
                isUser: index % 2 === 0,
              }),
            )}
          </View>
        </ScrollView>
      </View>
      <View style={{ ...styles.addComment, width: dimensions.width }}>
        <TextInput style={styles.input} placeholder="Коментувати ..." />
        <Ionicons name="arrow-up-circle-sharp" size={30} color="#FF6C00" />
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
    flex: 0.1,
    alignItems: 'center',
    position: 'relative',
    marginBottom: 15,
  },
  wrapperContent: {
    flex: 2,
    alignItems: 'center',
    position: 'relative',
    marginBottom: 15,
  },
  title: {
    fontSize: 17,
    fontFamily: 'Roboto-Medium',
    color: '#212121',
  },
  comeBack: {
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
    alignItems: 'center',
  },
  photo: {
    resizeMode: 'cover',
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
  addComment: {
    flex: 0.1,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6',
    padding: 10,
    borderRadius: 50,
    borderColor: '#E8E8E8',
  },
  input: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
  },
});

export default CommentsScreen;
