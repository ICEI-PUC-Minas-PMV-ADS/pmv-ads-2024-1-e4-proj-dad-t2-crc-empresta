
import {
    createTheme,
    DEFAULT_THEME,
    MantineBreakpointsValues,
    mergeMantineTheme,
} from '@mantine/core';

export const themeOverride = createTheme({
    primaryColor: 'puc-blue',
    colors: {
        'puc-blue': [
            "#5497cf",
            "#0070ab",
            "#006090",
            "#005070",
            "#004050",
            "#5497cf",
            "#0070ab",
            "#006090",
            "#005070",
            "#004050",

        ],
    },
    defaultRadius: 0,
    other: {
        maxApplicationWidth: 1440,
    },

});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);


/** Theme media query helper for use in TSS syntax
 * @returns
 * ```
 * {
 *  xs: '@media (max-width: 36em)',
 *  sm: '@media (max-width: 48em)',
 *  md: '@media (max-width: 62em)',
 *  lg: '@media (max-width: 75em)',
 *  xl: '@media (max-width: 88em)'
 * }
 * ```
 * Use in TSS css syntax like this:
 * ```
 *  [`${mq.sm}`]: {
 *    margin: 12px
 *  }
 * ```
 */