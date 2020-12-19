import { breakpoints } from 'config/breakpointsConfig';

const mediaQ = (size: number): string => `@media only screen and (max-width: ${size}px)`;

export const mediaQueriesHelper = {
  extraSmall: mediaQ(breakpoints.extraSmall),
  small: mediaQ(breakpoints.small),
  medium: mediaQ(breakpoints.medium),
  large: mediaQ(breakpoints.large),
  extraLarge: mediaQ(breakpoints.extraLarge),
  huge: mediaQ(breakpoints.huge),
};
