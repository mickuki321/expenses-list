import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {ChakraProvider, extendBaseTheme, theme as defaultTheme} from '@chakra-ui/react';

import App from './App';

const root = createRoot(document.getElementById('root')!);

const theme = extendBaseTheme({
	...defaultTheme,
	fonts: {
		heading: '"Lato", sans-serif',
		body: '"Lato", sans-serif',
	},
});

root.render(
	<StrictMode>
		<ChakraProvider theme={theme}>
			<App/>
		</ChakraProvider>
	</StrictMode>,
);
