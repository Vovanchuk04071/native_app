import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import { LogOutIcon } from '../../../assets/icons';
import { useDimensions } from '../../../hooks/useDimensions';
import { PostsScreenDetail } from './PostsScreenDetail';

const DefaultScreenPosts = ({ navigation, route }) => {
  // console.log('DefaultPostsScreen', route);
  const dimensions = useDimensions();

  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    if (route.params) {
      setPosts([...posts, route.params]);
    }
  }, [route.params]);
  console.log('DefaultPostsScreen', posts);
  return (
    <View style={styles.container}>
      <View style={{ ...styles.wrapper, width: dimensions.width }}>
        <View style={styles.titleWrap}>
          <Text style={styles.title}>Публікації</Text>
        </View>
        <TouchableOpacity style={styles.logout} onPress={() => navigation.navigate('Login')}>
          <LogOutIcon />
        </TouchableOpacity>
      </View>
      <Text style={styles.line}></Text>
      <View style={{ ...styles.wrapper, width: dimensions.width }}>
        <View style={styles.userCard}>
          <Image style={styles.image} source={require('../../../assets/images/background.jpg')} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>Іван Іванов</Text>
            <Text style={styles.email}>Студент</Text>
          </View>
        </View>
      </View>
      <View style={{ ...styles.wrapper, width: dimensions.width }}>
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => PostsScreenDetail(item, navigation)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },
  wrapper: {
    position: 'relative',
    marginBottom: 15,
    justifyContent: 'center',
  },
  titleWrap: {
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    fontFamily: 'Roboto-Medium',
  },
  logout: {
    position: 'absolute',
    right: 0,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#E8E8E8',
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginVertical: 30,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userInfo: {
    marginLeft: 15,
  },
  name: {
    fontSize: 13,
    fontFamily: 'Roboto-Bold',
    color: '#212121',
  },
  email: {
    fontSize: 11,
    fontFamily: 'Roboto-Regular',
    color: '#212121',
  },
});
export default DefaultScreenPosts;
