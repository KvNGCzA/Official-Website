import {Aggregator} from "./components/Aggregator";
import {Introduction} from "./components/Introduction";
import {PhotoSlide} from "./components/PhotoSlide";
import {PlayToEarn} from "./components/PlayToEarn";
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

			<div className="stroked-background">
				<PlayToEarn />
			</div>
			<Aggregator />
		</div>
	);
};
