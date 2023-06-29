import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {ChakraProvider, extendTheme, theme as defaultTheme} from '@chakra-ui/react';

import App from './App';
import {StoreProvider} from './store';

const root = createRoot(document.getElementById('root')!);

export const buttons = {
	baseStyle: {
		borderRadius: '4px',
	},
	variants: {
		apply: {
			color: 'white',
			bgColor: 'green.500',
			_hover: {
				bgColor: 'green.600',
			},
			_focus: {
				bgColor: 'green.600',
			},
		},
		error: {
			color: 'white',
			bgColor: 'red.500',
			_hover: {
				bgColor: 'red.600',
			},
			_focus: {
				bgColor: 'red.600',
			},
		},
		warn: {
			color: 'white',
			bgColor: 'orange.500',
			_hover: {
				bgColor: 'orange.600',
			},
			_focus: {
				bgColor: 'orange.600',
			},
		},
		info: {
			color: 'white',
			bgColor: 'blue.500',
			_hover: {
				bgColor: 'blue.600',
			},
			_focus: {
				bgColor: 'blue.600',
			},
		},
	},
};

const theme = extendTheme({
	...defaultTheme,
	fonts: {
		heading: '"Lato", sans-serif',
		body: '"Lato", sans-serif',
	},
	components: {
		Button: {
			...buttons,
		},
	},
});

root.render(
	<StrictMode>
		<ChakraProvider theme={theme}>
			<StoreProvider>
				<App/>
			</StoreProvider>
		</ChakraProvider>
	</StrictMode>,
);
