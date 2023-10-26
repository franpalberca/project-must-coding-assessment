import {RouterApp} from './routes/Page.routes';
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
height: 95vh;
color: #218bff;
max-width: 100%;
max-height: 100vh;
overflow-x: hidden;
`
export default App;

