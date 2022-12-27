import {TextProps as RNTextProps, TextStyle as RNTextStyle} from 'react-native';

export type TextMarginType =
  | {
      t?: number;
      r?: number;
      b?: number;
      l?: number;
      h?: number;
      v?: number;
    }
  | number;

export type TextPaddingType =
  | {
      t?: number;
      r?: number;
      b?: number;
      l?: number;
      h?: number;
      v?: number;
    }
  | number;

export interface TextProps extends RNTextProps {
  weight?: TextWeight;
  text?: string;
  type?: TextType;
  textDecorationLine?: RNTextStyle['textDecorationLine'];
  style?: RNTextStyle;
  align?: RNTextStyle['textAlign'];
  color?: RNTextStyle['color'];
  margin?: TextMarginType;
  padding?: TextPaddingType;
  /**
   * Inherit the type, weight, color, or even the all three from it's parent.
   */
  inheritFromParent?:
    | {
        type?: boolean;
        weight?: boolean;
        color?: boolean;
      }
    | boolean;
}

export interface TextStyleProps {
  weight?: TextWeight;
  type?: TextType;
  textDecorationLine?: RNTextStyle['textDecorationLine'];
  color?: RNTextStyle['color'];
  align?: RNTextStyle['textAlign'];
}

export type TextWeight = 'light' | 'regular' | 'medium' | 'bold';
export type TextType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 's1'
  | 's2'
  | 's3'
  | 'b1'
  | 'b2'
  | 'l1'
  | 'l2';

export type RecordTextStyleWeight = Record<TextWeight, RNTextStyle>;

export type RecordTextStyleType = Record<TextType, RNTextStyle>;
export type RecordTextStyle = Record<
  'TextStyleType' | 'TextStyleWeight',
  RecordTextStyleType | RecordTextStyleWeight
>;