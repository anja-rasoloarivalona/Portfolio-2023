import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        box: {
            spacing: {
                xxl: string;
                xl: string;
                lg: string;
                md: string;
                sm: string;
                xs: string;
                xxs: string;
            };
            shadow: {
                main: string;
                light: string;
                dark: string;
            };
        };
        colors: {
            primary: {
                main: string;
                mainHover: string;
                dark: string;
                darkHover: string;
                layer: string;
                layerDark: string;
            };
            background: string;
            onBackground: string;
            onBackgroundDark: string;
            surface: string;
            onSurface: string;
            onSurfaceDark: string;
            onSurfaceHighlighted: string;
        };
        config: {
            header: {
                height: {
                    default: string;
                };
            };
            grid: {
                default: FlattenInterpolation<ThemeProps<DefaultTheme>>;
            };
        };
        font: {
            size: {
                xxl: string;
                xl: string;
                lg: string;
                md: string;
                sm: string;
                xs: string;
                xxs: string;
            };
            weight: {
                bold: string;
                semiBold: string;
                normal: string;
            };
        };
        breakpoints: {
            desktop: string;
            tablet: string;
            midsize: string;
            mobile: string;
        };
    }
}
