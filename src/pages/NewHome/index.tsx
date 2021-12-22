import {PhotoSlider, Slide} from "../../components/PhotoSlider";
import {Accessibility} from "./components/Accessibility";
import {Aggregator} from "./components/Aggregator";
import {ContactForm} from "./components/ContactForm";
import {Introduction} from "./components/Introduction";
import {Partners} from "./components/Partners";
import {PlayToEarn} from "./components/PlayToEarn";
import {PrivateAccessPad} from "./components/PrivateAccessPad";
import "./index.scss";

export const slides: Slide[] = [
	{
		caption: "Deftify’s Launchpad will grant access to untapped markets, especially in Africa",
		image:   "/images/slide-one.svg"
	}, {
		caption: "Our game will launch in Q2 2022",
		image:   "/images/slide-two.svg"
	},
	{
		caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
		image:   "/images/slide-one.svg"
	}, {
		caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
		image:   "/images/slide-two.svg"
	}
];

export const Home2 = () => {
	return (
		<div>
			<div className="stroked-background">
				<Introduction />
				<PhotoSlider slides={slides} />
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
