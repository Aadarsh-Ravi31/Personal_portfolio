import {Funnel_Display,Roboto_Mono,Lexend_Deca  } from 'next/font/google';

export const funnelDisplay = Funnel_Display({
    subsets: ['latin'],
    weight: ['400', '600', '800'],
    variable: '--font-funnel-display',
  });

  export const roboto = Roboto_Mono({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-roboto',
  });

  export const lexend = Lexend_Deca({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-lexend-deca',
  });