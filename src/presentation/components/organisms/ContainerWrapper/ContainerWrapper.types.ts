import {ContainerConfigProps} from '@atoms/Container/Container.types';
import {NavbarProps} from '@molecules/Navbar/Navbar.types';
import {ReactNode} from 'react';
import {ScrollViewProps, StatusBarProps, ViewProps} from 'react-native';

export type ContainerWrapperType = ViewProps &
  ContainerConfigProps & {
    statusBarProps?: StatusBarProps;
    navbarProps?: NavbarProps & ContainerConfigProps;
    contentType?: 'fixed' | 'scrollable';
    contentProps?: ScrollViewProps | ContainerConfigProps;
    footer?: ReactNode[];
  };
