import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('screen');

export const CARD = {
  CARD_WIDTH: width * 1,
  CARD_HEIGHT: height * 0.8,
  CARD_OUT_WIDTH: width + width * 0.9,
  CARD_BORDER_RADIUS: 0,
};

export const VERTICAL_MARGIN = height * 0.022;

export const ACTION_OFFSET = 100;
