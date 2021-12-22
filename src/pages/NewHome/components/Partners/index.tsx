import Spacing from "../../../../components/Spacing";
import Text from "../../../../components/Typography";
import "./index.scss";

const PARTNERS = [
	"social-capital.svg",
	"social-capital.svg",
	"social-capital.svg",
	"social-capital.svg",
	"social-capital.svg",
	"social-capital.svg",
	"social-capital.svg",
	"social-capital.svg"
];

export const Partners = () => {
	return (
		<Spacing
			style={{
				display:        "flex",
				flexDirection:  "column",
				alignItems:     "center",
				justifyContent: "center"
			}}>
			<Text
				fontSize={18}
				color="#FDDB92"
				fontFamily={"Space Grotesk"}
				transform={"uppercase"}
				fontWeight={500}
				textAlign={"center"}
			>Our Partners</Text>

			<Text
				fontSize={18}
				fontFamily={"Space Grotesk"}
				maxWidth={780}
				textAlign={"center"}
				fontWeight={500}
				color={"#979EAF"}
				mb={"18px"}
				mt={"7px"}>List of our partners</Text>

			<Spacing className={"partner-cont"}>
				{PARTNERS.map(partner => <div className={"partner"}>
					<img src={`./images/${partner}`} alt={""} />
				</div>)}
			</Spacing>
		</Spacing>
	);
};
