import {Table, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react';
import {observer} from 'mobx-react-lite';

type IGenericColumns = Record<string, string | number | JSX.Element>;

interface IProps <TData> {
	dataList: TData[];
	labelsHeader: string[];
	nameVariableInColumns: Array<keyof TData | keyof IGenericColumns>;
	genericColumns: (record: TData) => IGenericColumns;
}

export const GenericTable = observer(<TData extends Record<'id', number | string> & Record<keyof TData, number | string | JSX.Element>>({nameVariableInColumns, dataList, labelsHeader, genericColumns}: IProps<TData>) => (
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
