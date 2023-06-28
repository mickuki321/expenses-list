import {Table, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react';
import {observer} from 'mobx-react-lite';

interface IProps <TData> {
	dataList: TData[];
	labelsHeader: string[];
}

export const GenericTable = observer(<TData extends Record<string, any>>({dataList, labelsHeader}: IProps<TData>) => (
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
));
