// @flow

import React from 'react';
import { Image , View} from 'react-native';
import * as flags from './flags';

type Props = {
  code: string,
  style?: any,
};

const Flag = ({ size = 64, code, type = 'shiny', style, responsive = false }: Props) => {
  const flag = flags[`icons${size}`][code];
  const unknownFlag = flags[`icons${size}`]['unknown'];

  return (responsive) ? (
    <View
      style={{flex:1,flexDirection: 'row'}}>
      <Image
        resizeMode='contain'
        source={flag || unknownFlag}
        style={[{ flex:1, aspectRatio: 1 }, style]}
      />
    </View>
  ) : (
    <Image
      source={flag || unknownFlag}
      style={[{ width: size, height: size }, style]}
    />
  );
};

export default Flag;
