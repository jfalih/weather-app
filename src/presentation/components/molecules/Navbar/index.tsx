import {Row, Spacing} from '@atoms';
import type {ContainerConfigProps} from '@atoms/Container/Container.types';
import React from 'react';
import Reanimated, {Easing, FadeInRight} from 'react-native-reanimated';
import {NavbarProps} from './Navbar.types';

const DEFAULT_DELAY_INTERVAL = 50;
const DEFAULT_ANIMATION_DURATION = 300;

const Navbar: React.FC<NavbarProps & ContainerConfigProps> = ({
  items,
  itemsPadding = Spacing.Standard,
  padding = {h: Spacing.High},
  fillContainerIndexes = [1],
  height = 56,
  ...rest
}) => {
  return (
    <Row height={height} padding={padding} {...rest}>
      {items.map((item, index) => {
        const defaultDelay =
          index * DEFAULT_DELAY_INTERVAL + DEFAULT_DELAY_INTERVAL;
        const entering = FadeInRight.easing(Easing.exp)
          .duration(DEFAULT_ANIMATION_DURATION)
          .springify();
        const paddingLeft = index > 0 ? itemsPadding : 0;
        const flex = fillContainerIndexes.includes(index) ? 1 : undefined;

        return (
          <Reanimated.View
            key={`item-${index}`}
            entering={entering.delay(defaultDelay)}
            style={{
              paddingLeft,
              flex,
            }}>
            {item as React.ReactNode}
          </Reanimated.View>
        );
      })}
    </Row>
  );
};

export default Navbar;
