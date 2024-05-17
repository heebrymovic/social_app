import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

	:root{
		--color-white:#fff;
		--color-main:#207ecf;
		--color-main--0:#216baa;
		--color-gray--0:#f1f1f1;
		--color-gray--1:#d1cccc;
		--color-gray--2:#ebe3e3;
		--color-green:#3dbd3d;
		--color-error:#ff4040
	}
	
	/*CSS RESETS*/
	::-webkit-scrollbar{width:5px;}
	::-webkit-scrollbar-track{background: var(--color-gray--0);}
	::-webkit-scrollbar-thumb{background: var(--color-gray--1); border-radius:10px;}
	*{box-sizing:border-box;color:currentColor;outline:none;resize:none;text-decoration:none; font-family: "Roboto", sans-serif;}
	html{-webkit-tap-highlight-color:transparent}
	body{overflow-x:hidden;}
	*,html, body {margin:0;padding:0; }
	span{display:inline-block}
	img{width:100%;}
	button, input, textarea {border:none}
	input:disabled {background:var(--color-light--3);}
	ul{list-style:none;padding:0}

`;
