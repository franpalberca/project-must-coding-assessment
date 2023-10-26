import {RouterApp} from './routes/Routes';
import styled from 'styled-components'

function App() {
	return (
		<GlobalStyles>
			<RouterApp />
		</GlobalStyles>
	);
}

const GlobalStyles = styled.div`
background-color: #aaf1f6;
border: 3px solid #218bff;
border-radius: 2rem;

`
export default App;

