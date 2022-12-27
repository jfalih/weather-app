import React from 'react';

export interface NavbarProps {
  items: React.ReactNode[];
  itemsPadding?: number;
  fillContainerIndexes?: number[];
  animationDelay?: number;
}
