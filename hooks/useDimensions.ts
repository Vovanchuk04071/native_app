import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

interface Dimensions {
  width: number;
  height?: number;
}

export const useDimensions = (): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: Dimensions.get('window').width - 15 * 2,
  });

  React.useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width - 15 * 2;

      setDimensions({ width });
    };
    const subscription = Dimensions.addEventListener('change', onChange);

    return () => {
      subscription?.remove();
    };
  }, []);

  return dimensions;
};
