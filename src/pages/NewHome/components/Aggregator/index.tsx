import Spacing from "../../../../components/Spacing";
import Text from "../../../../components/Typography";
import "./index.scss";

export const Aggregator = () => {
	return (
		<Spacing
			style={{
				display:        "flex",
				flexDirection:  "column",
				alignItems:     "center",
				justifyContent: "center",
				padding:        "75px 20px"
			}}>
			<Text
				fontSize={36}
				color="#FFF"
				fontFamily={"Space Grotesk"}
				mb={"18px"}
				mt={"18px"}
				fontWeight={500}
				textAlign={"center"}
			>Deftify’s Market Data Aggregator</Text>
			<Text
				fontSize={18}
				fontFamily={"Space Grotesk"}
				maxWidth={780}
				textAlign={"center"}
				fontWeight={500}
				mb={"43px"}
				color={"#979EAF"}>
				Market data aggregator is a powerful resource for investors who are looking for a deeper understanding of the
				cryptocurrency market and want to analyze specific events. Deftify will provide huge resources under its Market
				Data Aggregator platform called Instant Watch.
			</Text>

			<Spacing
				className={"aggregator-images"}>
				<img
					src="./images/instant-watch-2.svg" style={{
					marginRight: "44px"
				}} />
				<img src="./images/instant-watch.svg" />
			</Spacing>
		</Spacing>
	);
};
