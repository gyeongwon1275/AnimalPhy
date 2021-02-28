import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
};

export const darkTheme = {
  body: '#202124',
  text: '#FAFAFA',
};

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    outline: none;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
display: block;
}
body {
  overflow-y: hidden;
  background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
}
body,html,#root {
  height: 100%;
}
ol, ul {
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
button {
  border-radius: 0;
  border: 0;
  background-color:unset;

}
a {
  text-decoration: none;
  color: inherit;
}

li {
  list-style: none;
}

`;
