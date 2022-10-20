import { create } from '@storybook/theming';
import logo from './logo.png';

export default create({
    base: 'light',
    //
    colorSecondary: '#404040',
    //
    // // UI
    // appBg: 'white',
    // appContentBg: 'silver',
    // appBorderColor: 'grey',
    // appBorderRadius: 4,
    //
    // // Typography
    fontBase: '"Poppins", sans-serif',
    // fontCode: 'monospace',
    //
    // // Text colors
    textColor: '#404040',
    // textInverseColor: 'rgba(255,255,255,0.9)',
    //
    // // Toolbar default and active colors
    // barTextColor: 'white',
    barSelectedColor: '#58b947',
    // barBg: 'black',
    //
    // // Form colors
    // inputBg: 'white',
    // inputBorder: 'silver',
    // inputTextColor: 'black',
    // inputBorderRadius: 4,

    brandTitle: 'Sépaq',
    brandUrl: 'https://sepaq.com',
    brandImage: `/${logo}`

});

