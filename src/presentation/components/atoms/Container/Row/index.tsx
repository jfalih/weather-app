import React, {forwardRef} from 'react';
import Reanimated from 'react-native-reanimated';
import Column from '../Column';
import {ContainerConfigProps} from '../Container.types';
import RowStyle from './Row.style';

/**
 * Use Row to display a horizontal stack Layout.
 */
const Row = forwardRef((props: ContainerConfigProps, ref) => {
  const {children, style, ...rest} = props;

  return (
    <Column
      contentStyle="fitContent"
      alignment="center"
      style={[RowStyle.defaultStyle, style]}
      {...rest}>
      {children}
    </Column>
  );
});

export default Row;

export const ReanimatedRow = Reanimated.createAnimatedComponent(Row);
