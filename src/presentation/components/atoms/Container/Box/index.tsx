import React, {forwardRef} from 'react';
import {FlexStyle} from 'react-native';
import Reanimated from 'react-native-reanimated';
import Column from '../Column';
import {ContainerConfigProps} from '../Container.types';
import BoxStyle from './Box.style';

/**
 * Use Box to display a z-index stack Layout.
 */

export interface BoxProps extends ContainerConfigProps {
  top?: FlexStyle['top'];
  left?: FlexStyle['left'];
  right?: FlexStyle['right'];
  bottom?: FlexStyle['bottom'];
}
export const Box = forwardRef((props: BoxProps, ref) => {
  const {children, style, top, left, bottom, right, ...rest} = props;

  return (
    <Column
      contentStyle="fitContent"
      style={[BoxStyle.defaultStyle, {top, left, bottom, right}, style]}
      {...rest}>
      {children}
    </Column>
  );
});

export default Box;

export const ReanimatedBox = Reanimated.createAnimatedComponent(Box);
