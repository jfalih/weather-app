import {FlexStyle, PressableProps} from 'react-native';
import {
  ContainerAlignmentType,
  ContainerArrangementType,
  ContainerPaddingType,
} from '../Container/Container.types';

export interface ButtonConfigProps extends PressableProps {
  underlayColor?: string;
  borderRadius?: number;
  backgroundColor?: string;
  alignSelf?: FlexStyle['alignSelf'];
  padding?: ContainerPaddingType;
  borderWidth?: number;
  borderColor?: string;
  alignment?: ContainerAlignmentType;
  arrangement?: ContainerArrangementType;
  foregroundRipple?: boolean;
}
