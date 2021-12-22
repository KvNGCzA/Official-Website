import {useCallback, useEffect, useRef, useState} from "react";
import Spacing from "../Spacing";
import Text from "../Typography";
import "./index.scss";

export interface Slide {
	caption: string;
	image: string;
}

interface Props {
	slides: Slide[];
}

const INTERVAL = 5000;

export const PhotoSlider = ({slides}: Props) => {
	const intervalRef                     = useRef<NodeJS.Timeout>();
	const [currentIndex, setcurrentIndex] = useState<number>(0);

	const initSlider = useCallback(() => {
		intervalRef.current = setInterval(() => {
			setcurrentIndex(current => {
				const newIndex = current === slides.length - 1 ? 0 : current + 1;

				return newIndex;
			});
		}, INTERVAL);
	}, [slides.length]);

	useEffect(() => {
		initSlider();
		return () => clearInterval(intervalRef.current as NodeJS.Timeout);
	}, [initSlider]);

	const selectImage = (index: number) => {
		setcurrentIndex(index);
		clearInterval(intervalRef.current as NodeJS.Timeout);
		initSlider();
	};

	return (
		<Spacing
			style={{
				padding: "75px 20px"
			}}>
			<div
				className={"slider-images"}
				style={{backgroundImage: `url("${slides[currentIndex].image}")`}}></div>
			<Text
				fontWeight={500}
				fontSize={24}
				color="#fff"
				textAlign="center"
				fontFamily="Space Grotesk"
				mb={"18px"}
				mt={"18px"}
			>
				{slides[currentIndex].caption}
			</Text>
			<Spacing className={"dot-cont"}>
				{slides.map((slide, index) => <div
					className={`dot ${index === currentIndex ? "dot__active" : ""}`}
					onClick={() => selectImage(index)}
					key={index} />)}
			</Spacing>
		</Spacing>
	);
};
