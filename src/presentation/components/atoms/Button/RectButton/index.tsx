import React, {forwardRef} from 'react';
import {Platform, Pressable, StyleProp, View, ViewStyle} from 'react-native';
import Reanimated from 'react-native-reanimated';
import {Color} from '../../Color';
import {
  ContainerAlignmentStyle,
  ContainerArrangementStyle,
  createContainerPaddingStyle,
} from '../../Container/Container.style';
import {ButtonConfigProps} from '../Button.types';
import RectButtonStyle from './RectButton.style';

/**
 * Use RectButton if you want a full flexibility on Button customization.
 * Default content Container is flex row.
 */

export interface RectButtonProps extends ButtonConfigProps {
  width?: number;
  height?: number;
  shrinkOnPress?: boolean;
}

const RectButton = forwardRef((props: RectButtonProps, ref) => {
  const {
    children,
    underlayColor = Color.Neutral04o30,
    borderRadius = 0,
    width,
    height,
    alignSelf,
    backgroundColor,
    padding,
    borderWidth,
    borderColor,
    alignment = 'center',
    arrangement = 'center',
    foregroundRipple,
    style,
    shrinkOnPress = false,
    ...rest
  } = props;

  const ContainerPaddingStyle = createContainerPaddingStyle(padding);

  return (
    <View
      style={[
        RectButtonStyle.defaultContainerStyle,
        {
          borderRadius,
          alignSelf,
        },
      ]}>
      <Pressable
        android_ripple={{
          foreground: foregroundRipple,
          color: underlayColor,
          borderless: false,
        }}
        style={({pressed}) => [
          RectButtonStyle.defaultButtonStyle,
          ContainerPaddingStyle?.padding,
          ContainerAlignmentStyle[alignment],
          ContainerArrangementStyle[arrangement],
          {
            borderRadius,
            width,
            height,
            borderWidth,
            borderColor,
            backgroundColor,
            ...Platform.select({
              ios: {
                opacity: pressed ? 0.2 : 1,
              },
            }),
            transform: [{scale: pressed && shrinkOnPress ? 0.9 : 1}],
          },
          style as StyleProp<ViewStyle>,
        ]}
        {...rest}>
        {children}
      </Pressable>
    </View>
  );
});

export default RectButton;

export const ReanimatedRectButton =
  Reanimated.createAnimatedComponent(RectButton);
