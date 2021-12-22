import {Accessibility} from "./components/Accessibility";
import {Aggregator} from "./components/Aggregator";
import {ContactForm} from "./components/ContactForm";
import {Introduction} from "./components/Introduction";
import {Partners} from "./components/Partners";
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

			<div className="stroked-background" style={{backgroundPosition: "center 170px"}}>
				<PlayToEarn />
			</div>

			<Aggregator />
			<Partners />
			<Accessibility />

			<div
				className="stroked-background" style={{backgroundPosition: "center 247px"}}>
				<ContactForm />
			</div>
		</div>
	);
};
