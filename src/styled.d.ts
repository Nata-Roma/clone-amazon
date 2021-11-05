import 'styled-components';
import { IThemeBreakpoints, IThemeColors } from './theme/theme-interfaces';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IThemeColors;
    breakpoints: IThemeBreakpoints;
  }
}