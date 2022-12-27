import React, {forwardRef} from 'react';
import Reanimated from 'react-native-reanimated';
import Text from '../../Text';
import {TextProps} from '../../Text/Text.types';
import RectButton, {RectButtonProps} from '../RectButton';

/**
 * Use TextButton to display a RectButton with a Text as the only default child component.
 * Since TextButton inherits RectButton, so RectButton props can also be applied here.
 */

export interface TextButtonProps extends RectButtonProps {
  textProps: TextProps;
}

const TextButton = forwardRef((props: TextButtonProps, ref) => {
  const {textProps, ...rest} = props;

  return (
    <RectButton {...rest}>
      <Text {...textProps}>{textProps.children}</Text>
    </RectButton>
  );
});

export default TextButton;

export const ReanimatedTextButton =
  Reanimated.createAnimatedComponent(TextButton);
