import { createStackNavigator } from '@react-navigation/stack';
import DefaultScreenPosts from '../../nestedScreens/PostsScreen/DefaultScreenPosts';
import CommentsScreen from '../../nestedScreens/CommentsScreen/CommentsScreen';
import MapScreen from '../../nestedScreens/MapScreen/MapScreen';

const NestedNavigator = createStackNavigator();
const PostsScreen = () => (
  <NestedNavigator.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <NestedNavigator.Screen name="DefaultScreenPosts" component={DefaultScreenPosts} />
    <NestedNavigator.Screen name="CommentsScreen" component={CommentsScreen} />
    <NestedNavigator.Screen name="MapsScreen" component={MapScreen} />
  </NestedNavigator.Navigator>
);

export default PostsScreen;
