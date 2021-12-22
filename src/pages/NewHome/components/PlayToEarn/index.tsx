import RegularButton from "../../../../components/Button/Regular";
import Spacing from "../../../../components/Spacing";
import Text from "../../../../components/Typography";

export const PlayToEarn = () => {
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
				fontFamily={"Furore"}
				transform={"uppercase"}
				fontWeight={400}
				textAlign={"center"}
			>PLAY2EARn metaverse with a twist</Text>
			<Text
				fontSize={36}
				color="#FFF"
				fontFamily={"Furore"}
				mb={"18px"}
				mt={"18px"}
				fontWeight={400}
				textAlign={"center"}
			>Introducing Deftify’s MetaCurse</Text>
			<Text
				fontSize={18}
				fontFamily={"Space Grotesk"}
				maxWidth={780}
				textAlign={"center"}
				fontWeight={500}
				mb={"43px"}
				color={"#979EAF"}>
				Deftify’s first incubated project is its own gaming project, MetaCurse - this is a P2E metaverse where you
				will need to stake Deftify token (DFTY) to use the NFT characters. You will then be able to earn MetaCurse
				token which serves as in-game currency.
			</Text>
			<RegularButton
				background={"rgba(25, 28, 30, 1)"}
				color={"#FFFFFF"}
			>Coming Soon</RegularButton>
		</Spacing>
	);
};
