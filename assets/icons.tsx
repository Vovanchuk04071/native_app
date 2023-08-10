import Svg, { Path, Circle, Text, G, Defs, ClipPath, Rect } from 'react-native-svg';

export const AddIcon = () => (
  <Svg width="25" height="25" fill="none">
    <Circle cx="12.5" cy="12.5" r="12" fill="#fff" stroke="#FF6C00" />
    <Path
      fill="#FF6C00"
      fill-rule="evenodd"
      d="M13 6h-1v6H6v1h6v6h1v-6h6v-1h-6V6Z"
      clip-rule="evenodd"
    />
  </Svg>
);

export const DeleteIcon = () => (
  <Svg width="25" height="25" fill="none">
    <G>
      <Text>Layer 1</Text>
      <Circle
        transform="rotate(-45 12.5 12.5)"
        id="svg_1"
        stroke="#E8E8E8"
        fill="#fff"
        r="12"
        cy="12.5"
        cx="12.5"
      />
      <Path
        id="svg_2"
        clip-rule="evenodd"
        d="m8.257,7.55l-0.707,0.707l4.243,4.243l-4.243,4.243l0.707,0.707l4.243,-4.243l4.243,4.243l0.707,-0.707l-4.243,-4.243l4.243,-4.243l-0.707,-0.707l-4.243,4.243l-4.243,-4.243z"
        fill-rule="evenodd"
        fill="#BDBDBD"
      />
    </G>
  </Svg>
);

export const LogOutIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
      stroke="#BDBDBD"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path d="M17 16L21 12L17 8" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round" />
    <Path d="M21 12H9" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round" />
  </Svg>
);

export const BackIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M20 12H4"
      stroke="#212121"
      stroke-opacity="0.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M10 18L4 12L10 6"
      stroke="#212121"
      stroke-opacity="0.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
