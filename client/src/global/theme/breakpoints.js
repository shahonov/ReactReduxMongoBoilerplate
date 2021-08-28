/* istanbul ignore file */

export const getScreenSize = () => {
    if (window.innerWidth <= breakpoints.xs) {
        return 'xs';
    } else if (window.innerWidth <= breakpoints.sm) {
        return 'sm';
    } else if (window.innerWidth <= breakpoints.md) {
        return 'md';
    } else if (window.innerWidth <= breakpoints.lg) {
        return 'lg';
    } else {
        return 'xl';
    }
}

export const breakpoints = {
    xs: 0,
    sm: 425,
    md: 800,
    lg: 1280,
    xl: 1680
}
