import React, {forwardRef} from 'react';
import {Platform, Pressable, StyleProp, ViewStyle} from 'react-native';
import Reanimated from 'react-native-reanimated';
import {ButtonConfigProps} from '../Button.types';
import BorderlessButtonStyle from './BorderlessButton.style';

/**
 * Use BorderlessButton if you want to display a circular Button.
 * Default content Container is width = height and center-middle alignment.
 * Expect only a single child component.
 */

export interface BorderlessButtonProps extends ButtonConfigProps {
  size?: number;
}

const BorderlessButton = forwardRef((props: BorderlessButtonProps, ref) => {
  const {
    children,
    underlayColor,
    size = 32,
    backgroundColor,
    style,
    ...rest
  } = props;

  return (
    <Pressable
      android_ripple={{
        foreground: true,
        color: underlayColor,
        borderless: true,
        radius: size / 2,
      }}
      style={({pressed}) => [
        BorderlessButtonStyle.defaultStyle,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          ...Platform.select({
            ios: {
              opacity: pressed ? 0.2 : 1,
            },
          }),
        },
        style as StyleProp<ViewStyle>,
      ]}
      {...rest}>
      {children}
    </Pressable>
  );
});

export default BorderlessButton;

export const ReanimatedBorderlessButton =
  Reanimated.createAnimatedComponent(BorderlessButton);
