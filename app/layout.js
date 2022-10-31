import localFont from '@next/font/local';
import '../styles/globals.css';

const tintinTalkingFont = localFont({
  src: '../styles/fonts/tintin_talking.woff2',
  variable: '--font',
});

const RootLayout = ({ children }) => (
  <html lang="es">
    <head>
      <title>Insultador Haddock</title>
      <meta name="description" content="El capitán Haddock te insulta" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </head>
    <body className={tintinTalkingFont.className}>{children}</body>
  </html>
);

export default RootLayout;
