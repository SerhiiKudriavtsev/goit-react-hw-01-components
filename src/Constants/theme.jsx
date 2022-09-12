export const theme = Object.freeze({
  widths: {
    s: '400px',
    m: '800px',
    l: '1200px',
  },
  colors: {
    primaryBg: '#ffffff',
    secondaryBg: '#e0e0e0',
    primaryText: '#212121',
    secondaryText: '#a1a1a1',
    whiteText: '#ffffff',
    bgWindow: '#b1c6cc',
    border: '#c4c4c4',
  },
  spacing: value => `${4 * value}px`,
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '18px',
    l: '24px',
    xl: '32px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '8px',
    round: '50%',
  },
});