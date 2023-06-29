import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {ChakraProvider} from '@chakra-ui/react';

import App from './App';
import './index.css';
import {StoreProvider} from './store';
import {theme} from './theme';

const root = createRoot(document.getElementById('root')!);

root.render(
	<StrictMode>
		<ChakraProvider theme={theme}>
			<StoreProvider>
				<App/>
			</StoreProvider>
		</ChakraProvider>
	</StrictMode>,
);
