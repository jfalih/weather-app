import {Color} from '@atoms/Color';
import React, {forwardRef} from 'react';
import Reanimated from 'react-native-reanimated';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import {Icon as RNVIcon} from 'react-native-vector-icons/Icon';
import {IconProps} from './Icon.types';
import IconJson from './icon.json';

const IconComponent = createIconSetFromIcoMoon(
  IconJson,
  'icomoon',
  'icomoon.ttf',
);

const Icon = forwardRef<RNVIcon, IconProps>((props, ref) => {
  const {color = Color.Neutral10, ...rest} = props;
  return <IconComponent ref={ref} color={color} size={16} {...rest} />;
});

export default Icon;

export const ReanimatedIcon = Reanimated.createAnimatedComponent(Icon);
