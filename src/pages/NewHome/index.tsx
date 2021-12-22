import {Introduction} from "./components/Introduction";
import {PhotoSlide} from "./components/PhotoSlide";
import {PrivateAccessPad} from "./components/PrivateAccessPad";
import "./index.scss";

export const Home2 = () => {
	return (
		<div>
			<div className="stroked-background">
				<Introduction />
				<PhotoSlide />
			</div>

			<PrivateAccessPad />
		</div>
	);
};
