import { ITheme } from '../components/ThemeProvider/types';

export const defaultTheme: ITheme = {
  background: {
    default: '#fff',
  },
  default: {
    dark: '#667085',
    main: '#C7CCD3',
    light: '#E4E7EC',
    extraLight: '#F9FAFB',
  },
  text: {
    primary: '#101828',
    secondary: '#344054',
    disabled: '#D2D2D2',
    hint: '#667085',
  },
  primary: {
    main: '#003CB8',
    light: '#E7EAF9',
    dark: '#001D9A',
    contrast: '#fff',
  },
  secondary: {
    main: '#58329A',
    light: '#EDE7F4',
    dark: '#3D2181',
    contrast: '#fff',
  },
  error: {
    main: '#EC726B',
    light: '#FBDCDA',
    dark: '#D92C20',
    contrast: '#000',
  },
  font: 'Inter, sans-serif',
}
