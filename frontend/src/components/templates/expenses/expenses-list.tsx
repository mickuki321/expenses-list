import {Table, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react';

interface IProps <TData> {
	dataList: TData[];
	labelsHeader: string[];
}

export const ExpensesList = <TData extends Record<string, string | number | JSX.Element> >({dataList, labelsHeader}: IProps<TData>) => (
	<Table>
		<Thead>
			<Tr>
				{labelsHeader.map((label, i) => (
					<Th key={i}>{label}</Th>
				))}
			</Tr>
		</Thead>
		<Tbody>
			{dataList.map((record, i) => (
				<Tr key={i}>
					{Object.values(record).map((data, i) =>
						<Td key={i}>{data}</Td>,
					)}
				</Tr>
			))}
		</Tbody>
	</Table>
);
