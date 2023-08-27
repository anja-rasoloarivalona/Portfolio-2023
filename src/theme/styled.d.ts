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
            };
            background: string;
            onBackground: string;
            surface: string;
            onSurface: string;
            onSurfaceHighlighted: string;
        };
        config: {
            header: {
                height: {
                    default: string;
                };
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
    }
}
