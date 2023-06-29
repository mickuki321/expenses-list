import {Expenses} from './components/views';
import {BodyWrapper} from './components/atoms';
import {Header} from './components/templates/header';

const App = (): JSX.Element => (
	<BodyWrapper>
		<Header/>
		<Expenses/>
	</BodyWrapper>
);

export default App;
