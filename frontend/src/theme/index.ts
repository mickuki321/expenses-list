import {extendTheme} from '@chakra-ui/react';
import {theme as defaultTheme} from '@chakra-ui/theme';
import {buttons} from './buttons';
import {table} from './table';

export const theme = extendTheme({
	...defaultTheme,
	fonts: {
		heading: '"Lato", sans-serif',
		body: '"Lato", sans-serif',
	},
	components: {
		Button: buttons,
		Table: table,
	},
});
