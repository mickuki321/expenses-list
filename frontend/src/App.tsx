import {Expenses} from './components/views';
import {BodyWrapper} from './components/atoms/wrappers/body-wrapper';

const App = (): JSX.Element => (
	<BodyWrapper>
		<Expenses/>
	</BodyWrapper>
);

export default App;
