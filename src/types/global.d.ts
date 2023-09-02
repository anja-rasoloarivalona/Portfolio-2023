declare module '*.png' {
    const value: string; // or whatever type is appropriate for your use case
    export default value;
}

declare module '*.mp4' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare namespace JSX {
    interface IntrinsicElements {
        'dotlottie-player': any;
    }
}

declare module '*.lottie' {
    const content: any; // Replace 'any' with the expected type of your Lottie file
    export default content;
}
