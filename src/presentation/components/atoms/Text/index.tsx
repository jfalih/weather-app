import React, {forwardRef} from 'react';
import {Text as RNText} from 'react-native';
import Reanimated from 'react-native-reanimated';
import {Color} from '../Color';
import TextStyle, {
  createPaddingStyle,
  createTextMarginStyle,
} from './Text.style';
import {TextProps} from './Text.types';

const Text = forwardRef((props: TextProps, ref) => {
  const {
    style,
    text,
    type = 'b1',
    weight = 'regular',
    color = Color.Neutral10,
    align,
    margin,
    padding,
    textDecorationLine,
    children,
    inheritFromParent,
    ...rest
  } = props;

  const textType =
    typeof inheritFromParent === 'boolean' || inheritFromParent?.type
      ? undefined
      : type;

  const textWeight =
    typeof inheritFromParent === 'boolean' || inheritFromParent?.weight
      ? undefined
      : weight;

  const textColor =
    typeof inheritFromParent === 'boolean' || inheritFromParent?.color
      ? undefined
      : color;

  const textMarginStyle = createTextMarginStyle(margin);
  const textPaddingStyle = createPaddingStyle(padding);
  return (
    <RNText
      style={[
        TextStyle({
          type: textType,
          weight: textWeight,
          color: textColor,
          textDecorationLine: textDecorationLine,
          align,
        }).text,
        textMarginStyle?.margin,
        textPaddingStyle?.padding,
        style,
      ]}
      {...rest}>
      {text || children}
    </RNText>
  );
});

export default Text;

export const ReanimatedText = Reanimated.createAnimatedComponent(Text);
