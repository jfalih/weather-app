import {StyleSheet} from 'react-native';
import {
  RecordTextStyleType,
  TextMarginType,
  TextPaddingType,
  TextStyleProps,
} from './Text.types';

export const TextStyleWeight = StyleSheet.create({
  light: {
    fontWeight: '300',
  },
  regular: {
    fontWeight: '400',
  },
  medium: {
    fontWeight: '500',
  },
  bold: {
    fontWeight: '600',
  },
});

export const createTextMarginStyle = (margin?: TextMarginType) => {
  if (typeof margin === 'undefined') {
    return undefined;
  }

  if (typeof margin === 'number') {
    return StyleSheet.create({
      margin: {margin},
    });
  }

  return StyleSheet.create({
    margin: {
      marginTop: margin.t,
      marginRight: margin.r,
      marginBottom: margin.b,
      marginLeft: margin.l,
      marginHorizontal: margin.h,
      marginVertical: margin.v,
    },
  });
};

export const createPaddingStyle = (padding?: TextPaddingType) => {
  if (typeof padding === 'undefined') {
    return undefined;
  }

  if (typeof padding === 'number') {
    return StyleSheet.create({
      padding: {padding},
    });
  }

  return StyleSheet.create({
    padding: {
      paddingTop: padding.t,
      paddingRight: padding.r,
      paddingBottom: padding.b,
      paddingLeft: padding.l,
      paddingHorizontal: padding.h,
      paddingVertical: padding.v,
    },
  });
};

export const TextStyleType: RecordTextStyleType = StyleSheet.create({
  h1: {
    fontSize: 72,
    lineHeight: 72,
  },
  h2: {
    fontSize: 32,
    lineHeight: 44,
  },
  h3: {
    fontSize: 28,
    lineHeight: 36,
  },
  s1: {
    fontSize: 24,
    lineHeight: 30,
  },
  s2: {
    fontSize: 20,
    lineHeight: 26,
  },
  s3: {
    fontSize: 20,
    lineHeight: 26,
  },
  b1: {
    fontSize: 16,
    lineHeight: 24,
  },
  b2: {
    fontSize: 14,
    lineHeight: 20,
  },
  l1: {
    fontSize: 12,
    lineHeight: 16,
  },
  l2: {
    fontSize: 10,
    lineHeight: 14,
  },
});

const TextStyle = (props: TextStyleProps) => {
  let weightStyle;
  if (props.weight) {
    weightStyle = TextStyleWeight[props.weight];
  }

  let typeStyle;
  if (props.type) {
    typeStyle = TextStyleType[props.type];
  }
  return StyleSheet.create({
    text: {
      ...weightStyle,
      ...typeStyle,
      color: props.color,
      textAlign: props.align,
      textDecorationLine: props.textDecorationLine,
    },
  });
};

export default TextStyle;
