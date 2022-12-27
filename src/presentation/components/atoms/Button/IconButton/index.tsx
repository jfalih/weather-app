import React, {forwardRef} from 'react';
import Reanimated from 'react-native-reanimated';
import Icon from '../../Icon';
import {IconProps} from '../../Icon/Icon.types';
import BorderlessButton, {BorderlessButtonProps} from '../BorderlessButton';

/**
 * Use IconButton if you want to display Button with
 * Icon only child component.
 */

export interface IconButtonProps extends BorderlessButtonProps {
  iconProps: IconProps;
}

const IconButton = forwardRef((props: IconButtonProps, ref) => {
  const {iconProps, ...rest} = props;

  return (
    <BorderlessButton {...rest}>
      <Icon {...iconProps} />
    </BorderlessButton>
  );
});

export default IconButton;

export const ReanimatedIconButton =
  Reanimated.createAnimatedComponent(IconButton);
