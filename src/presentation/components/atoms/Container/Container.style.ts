import {StyleSheet, ViewStyle} from 'react-native';
import {
  ContainerAlignmentType,
  ContainerArrangementType,
  ContainerBorderRadiusType,
  ContainerContentType,
  ContainerMarginType,
  ContainerPaddingType,
} from '../Container/Container.types';

export const ContainerContentStyle = StyleSheet.create<
  Record<ContainerContentType, ViewStyle>
>({
  fitContent: {},
  fillContainer: {flex: 1},
  fixed: {},
});

export const ContainerAlignmentStyle = StyleSheet.create<
  Record<ContainerAlignmentType, ViewStyle>
>({
  center: {
    alignItems: 'center',
  },
  start: {
    alignItems: undefined,
  },
  end: {
    alignItems: 'flex-end',
  },
});

export const ContainerArrangementStyle = StyleSheet.create<
  Record<ContainerArrangementType, ViewStyle>
>({
  leading: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
  trailing: {
    justifyContent: 'flex-end',
  },
  between: {
    justifyContent: 'space-between',
  },
  around: {
    justifyContent: 'space-around',
  },
});

export const createContainerPaddingStyle = (padding?: ContainerPaddingType) => {
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

export const createContainerMarginStyle = (margin?: ContainerMarginType) => {
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

export const createBorderRadiusStyle = (
  borderRadius?: ContainerBorderRadiusType,
  defaultValue?: number,
) => {
  if (typeof borderRadius === 'undefined') {
    return StyleSheet.create({
      borderRadius: {
        borderRadius: defaultValue,
      },
    });
  }

  if (typeof borderRadius === 'number') {
    return StyleSheet.create({
      borderRadius: {
        borderRadius,
      },
    });
  }

  return StyleSheet.create({
    borderRadius: {
      borderTopLeftRadius: borderRadius.tl,
      borderTopRightRadius: borderRadius.tr,
      borderBottomLeftRadius: borderRadius.bl,
      borderBottomRightRadius: borderRadius.br,
    },
  });
};
