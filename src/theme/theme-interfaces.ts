export interface IThemeColor {
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
}

export interface IThemeColors {
  white: string;
  black: string;
  yellow: IThemeColor;
  green: IThemeColor;
  blue: IThemeColor;
  gray: IThemeColor;
}

export interface IThemeBreakpoints {
  lg: string;
}
