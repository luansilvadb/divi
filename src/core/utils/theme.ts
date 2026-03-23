import {
  argbFromHex,
  themeFromSourceColor,
  hexFromArgb,
  type Theme,
  type Scheme
} from '@material/material-color-utilities';

export interface DynamicScheme {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  outline: string;
  outlineVariant: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
  shadow: string;
  scrim: string;
  surfaceDim: string;
  surfaceBright: string;
  surfaceContainerLowest: string;
  surfaceContainerLow: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  surfaceContainerHighest: string;
}

function schemeToHex(scheme: Scheme): DynamicScheme {
  const hexScheme = {} as Record<string, string>;
  for (const [key, value] of Object.entries(scheme.toJSON())) {
    hexScheme[key] = hexFromArgb(value);
  }
  return hexScheme as unknown as DynamicScheme;
}

export function generateThemeFromHex(hex: string) {
  const sourceColor = argbFromHex(hex);
  const theme: Theme = themeFromSourceColor(sourceColor);

  return {
    light: schemeToHex(theme.schemes.light),
    dark: schemeToHex(theme.schemes.dark),
  };
}

/**
 * Converts camelCase M3 color name to kebab-case for CSS variables
 * e.g. primaryContainer -> primary-container
 */
export function toKebabCase(str: string): string {
  return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}
