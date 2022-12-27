import {FlexStyle, ViewProps} from 'react-native';

export type ContainerContentType = 'fitContent' | 'fillContainer' | 'fixed';

export type ContainerAlignmentType = 'start' | 'center' | 'end';

export type ContainerArrangementType =
  | 'leading'
  | 'center'
  | 'trailing'
  | 'between'
  | 'around';

export type ContainerPaddingType =
  | {
      t?: number;
      r?: number;
      b?: number;
      l?: number;
      h?: number;
      v?: number;
    }
  | number;

export type ContainerMarginType =
  | {
      t?: number;
      r?: number;
      b?: number;
      l?: number;
      h?: number;
      v?: number;
    }
  | number;

export type ContainerBorderRadiusType =
  | {
      tl?: number;
      tr?: number;
      bl?: number;
      br?: number;
    }
  | number;

export interface ContainerConfigProps extends ViewProps {
  contentStyle?: ContainerContentType;
  alignment?: ContainerAlignmentType;
  arrangement?: ContainerArrangementType;
  padding?: ContainerPaddingType;
  margin?: ContainerMarginType;
  borderRadius?: ContainerBorderRadiusType;
  backgroundColor?: string;
  width?: FlexStyle['width'];
  height?: FlexStyle['height'];
  minHeight?: FlexStyle['minHeight'];
  overflow?: FlexStyle['overflow'];
  withSafeArea?: 'topOnly' | 'bottomOnly' | boolean;
}
