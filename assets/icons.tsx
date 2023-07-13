import Svg, { Path, Circle, Text, G } from 'react-native-svg';

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
