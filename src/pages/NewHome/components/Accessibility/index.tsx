import {ReactComponent as Polygon} from "../../../../assets/Icons/polygon.svg";
import {ReactComponent as Wave} from "../../../../assets/images/wave.svg";
import Spacing from "../../../../components/Spacing";
import Text from "../../../../components/Typography";
import "./index.scss";

export const Accessibility = () => {
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
				fontSize={18}
				color="#FDDB92"
				fontFamily={"Space Grotesk"}
				transform={"uppercase"}
				fontWeight={500}
				textAlign={"center"}
			>BUILT FOR ACCESSIBILITY</Text>

			<Text
				className={"powered-by-text"}
				fontSize={32}
				color="#FFF"
				fontFamily={"Gilroy"}
				mb={"18px"}
				mt={"18px"}
				fontWeight={500}
				textAlign={"center"}
			>
				<span
					style={{
						marginRight: "8px",
						fontWeight:  800
					}}>Powered by</span> <Polygon />
			</Text>

			<Text
				fontSize={18}
				fontFamily={"Space Grotesk"}
				maxWidth={780}
				textAlign={"center"}
				fontWeight={500}
				color={"#979EAF"}>
				Deftify is utilizing Polygon’s fast blockchain. Deftly will benefit from Polygon’s low cost transaction and
				ultra fast transaction speed.
			</Text>

			<Wave style={{maxWidth: "90%", height: "auto", marginTop: "29px"}} />
		</Spacing>
	);
};
