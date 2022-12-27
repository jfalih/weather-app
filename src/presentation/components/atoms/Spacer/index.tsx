import React from 'react';
import {Column} from '../Container';
import {LayoutSpacerProps} from './Spacer.types';

/**
 * Use Spacer to display a space/padding vertically or horizontally.
 * @param param0 length, minLength, horizontal = should the Spacer span horizontally?
 * @returns
 */
const Spacer: React.FC<LayoutSpacerProps> = ({
  length,
  minLength,
  horizontal,
}) => {
  if (horizontal) {
    return <Column width={length} height="100%" />;
  }

  return <Column height={length} minHeight={minLength} />;
};

export default Spacer;
