const defaultVariantTable = {
	table: {
		tableLayout: 'fixed',
		borderCollapse: 'collapse',
		color: 'gray.700',
		td: {
			padding: {base: '10px', md: '10px 0px 10px 10px'},
			textAlign: 'left',
			position: {base: 'relative', md: 'auto'},

			display: {base: 'block', md: 'table-cell'},
			w: {base: '100%', md: 'auto'},

			fontSize: 14,
			lineHeight: 1.2,
			whiteSpace: 'pre-wrap',
			overflowWrap: 'break-word',

			borderLeft: '0px solid',
			_before: {
				content: {base: 'attr(data-label)', md: 'none'},
				position: 'absolute',
				left: 0,
				top: 2,
				width: '150px',
				paddingLeft: 4,
				fontSize: 14,
				textAlign: 'left',
				fontWeight: 'bold',
				marginTop: 2,
			},
		},
		tr: {
			borderBottom: '1px solid',
			borderColor: {base: 'gray.300', md: '0px solid transparent'},
			marginBottom: {base: 7, md: '0px'},
			borderRadius: {base: 2, md: '0px'},
			padding: {base: 2, md: '0px'},
			display: {base: 'block', md: 'table-row'},
			w: {base: '100%', md: 'auto'},
			fontSize: 14,
		},
		thead: {
			color: 'gray.500',
			display: {base: 'none', md: 'table-header-group'},
		},
	},
};

export const table = {
	variants: {
		defaultVariantTable,
	},
};
