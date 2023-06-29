import {Table, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react';
import {observer} from 'mobx-react-lite';

interface IProps <TData, TGenericColumns> {
	dataList: TData[];
	labelsHeader: string[];
	nameVariableInColumns: Array<keyof TData | keyof TGenericColumns>;
	genericColumns: (record: TData) => TGenericColumns;
}

export const GenericTable = observer(<TData extends Record<'id', number | string> & Record<keyof TData, number | string | JSX.Element>, TGenericColumns>({nameVariableInColumns, dataList, labelsHeader, genericColumns}: IProps<TData, TGenericColumns>) => (
	<Table>
		<Thead>
			<Tr>
				{labelsHeader.map((label, i) => (
					<Th key={i}>{label}</Th>
				))}
			</Tr>
		</Thead>
		<Tbody>
			{dataList.map(record => (
				<Tr key={record.id}>
					{nameVariableInColumns.map((name, i) =>
						<Td key={`${record.id}-${i}`}>{{...record, ...genericColumns(record)}[name] as string}</Td>,
					)}
				</Tr>
			))}
		</Tbody>
	</Table>
));
