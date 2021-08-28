/* istanbul ignore file */

import { createTheme } from '@material-ui/core/styles';

import { palette } from './palette';
import { spacing } from './spacing';
import { typography } from './typography';
import { breakpoints } from './breakpoints';

const theme = createTheme({
    palette,
    typography,
    breakpoints,
    spacing,
});

export default theme;
