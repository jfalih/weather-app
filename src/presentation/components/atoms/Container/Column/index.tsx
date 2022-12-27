import React, {forwardRef} from 'react';
import {View} from 'react-native';
import Reanimated from 'react-native-reanimated';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import {
  ContainerAlignmentStyle,
  ContainerArrangementStyle,
  ContainerContentStyle,
  createBorderRadiusStyle,
  createContainerMarginStyle,
  createContainerPaddingStyle,
} from '../Container.style';
import {ContainerConfigProps, ContainerContentType} from '../Container.types';

/**
 * Use Column to display a vertical stack Layout.
 */
const Column = forwardRef((props: ContainerConfigProps, ref) => {
  const {
    children,
    contentStyle = 'fillContainer',
    alignment = 'start',
    arrangement = 'leading',
    borderRadius = 0,
    padding,
    margin,
    backgroundColor,
    width,
    height,
    minHeight,
    overflow = 'visible',
    withSafeArea,
    style,
    ...rest
  } = props;

  const selectedContentStyle: ContainerContentType = height
    ? 'fixed'
    : contentStyle;
  const ContainerPaddingStyle = createContainerPaddingStyle(padding);
  const ContainerMarginStyle = createContainerMarginStyle(margin);
  const BorderRadiusStyle = createBorderRadiusStyle(borderRadius);
  const styles = [
    ContainerContentStyle[selectedContentStyle],
    ContainerAlignmentStyle[alignment],
    ContainerArrangementStyle[arrangement],
    ContainerPaddingStyle?.padding,
    ContainerMarginStyle?.margin,
    BorderRadiusStyle?.borderRadius,
    {
      backgroundColor,
      width,
      height,
      minHeight,
      overflow,
    },
    style,
  ];

  if (withSafeArea) {
    const edges: Edge[] | undefined =
      withSafeArea === 'topOnly'
        ? ['top']
        : withSafeArea === 'bottomOnly'
        ? ['bottom']
        : undefined; // Apply to all edges.

    return (
      <SafeAreaView style={styles} edges={edges} {...rest}>
        {children}
      </SafeAreaView>
    );
  }

  return (
    <View style={styles} {...rest}>
      {children}
    </View>
  );
});

export default Column;

export const ReanimatedColumn = Reanimated.createAnimatedComponent(Column);
