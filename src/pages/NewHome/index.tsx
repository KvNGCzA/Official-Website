import React from "react";
import {Introduction} from "./components/Introduction";
import {PhotoSlide} from "./components/PhotoSlide";
import "./index.scss";

export const Home2 = () => {
	return (
		<div>
			<div className="stroked-background">
				<Introduction />
				<PhotoSlide />
			</div>
		</div>
	);
};
