import {UserProvider} from './context/UserContext';
import {RouterApp} from './routes/Routes';

function App() {
	return (
		<>
			<UserProvider>
				<RouterApp />
			</UserProvider>
		</>
	);
}

export default App;
