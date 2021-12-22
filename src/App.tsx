import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {theme} from "./config/theme";
import {Home} from "./pages/Home";
import {Home2} from "./pages/NewHome";
import Teams from "./pages/Teams";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/home" component={Home2} />
					<Route exact path="/team" component={Teams} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
