import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from './mainScreens/PostScreen/PostsScreen';
import CreatePostsScreen from './mainScreens/CreatePostsScreen/CreatePostsScreen';
import { Octicons, Feather } from '@expo/vector-icons';
import ProfileScreen from './mainScreens/ProfileScreen/ProfileScreen';

const Tabs = createBottomTabNavigator();
const Home = () => (
  <Tabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        paddingTop: 10,
        paddingHorizontal: 50,
      },
    }}
  >
    <Tabs.Screen
      name="Posts"
      component={PostsScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Octicons name="apps" size={size} color={color} />,
      }}
    />
    <Tabs.Screen
      name="CreatePostsScreen"
      component={CreatePostsScreen}
      options={{
        tabBarIconStyle: {
          backgroundColor: '#FF6C00',
          height: 40,
          width: 70,
          borderRadius: 50,
        },
        tabBarIcon: ({ color, size }) => <Feather name="plus" size={size} color="#fff" />,
      }}
    />
    <Tabs.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />,
      }}
    />
  </Tabs.Navigator>
);

export default Home;
