export const BUTTON_TYPES: { [key: string]: string } = {
  ROUNDED_BUTTON_PRIMARY: 'ROUNDED_BUTTON_PRIMARY',
  TRANSPARENT_BUTTON: 'TRANSPARENT_BUTTON',
  ROUNDED_BUTTON_BIG_PRIMARY: 'ROUNDED_BUTTON_BIG_PRIMARY',
};

export const BUTTON_CLASSES = {
  [BUTTON_TYPES.ROUNDED_BUTTON_PRIMARY]:
    'button button-rounded button-rounded__primary',
  [BUTTON_TYPES.TRANSPARENT_BUTTON]: 'button button-transparent',
  [BUTTON_TYPES.ROUNDED_BUTTON_BIG_PRIMARY]:
    'button button-rounded__big-primary',
};
