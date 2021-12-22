import {Fragment} from "react";
import {ReactComponent as Fund} from "../../../../assets/Icons/fund.svg";
import {ReactComponent as Incubator} from "../../../../assets/Icons/incubator.svg";
import {ReactComponent as Invest} from "../../../../assets/Icons/invest.svg";
import {ReactComponent as PapImage} from "../../../../assets/images/pap-image.svg";
import Spacing from "../../../../components/Spacing";
import Text from "../../../../components/Typography";
import "./index.scss";

interface Props {
	body: string;
	image: string;
	title: string;
}

const whatWeDoData = [
	{
		image: "../../../../assets/Icons/fund.svg",
		title: "Early-Stage Incubator",
		body:  `Incubates promising crypto startups from around the world, with a focus on Africa, and connects projects with an experienced network of entrepreneurs and experts.`
	}, {
		image: "../../../../assets/Icons/incubator.svg",
		title: "Seed Fund Raising",
		body:  `Raises early-stage capital for these projects by allowing Deftify token holders to invest in them before the public.`
	}, {
		image: "../../../../assets/Icons/invest.svg",
		title: "Investment Opportunities",
		body:  `Early-stage investment opportunities are available to users who are looking for the next hidden gems. We present the projects for our loyal token holders.`
	}
];

const getWhatWeDoImage = (title: string): JSX.Element => {
	switch (title) {
		case whatWeDoData[0].title:
			return <Incubator height={72} width={72} />;
		case whatWeDoData[1].title:
			return <Fund height={72} width={72} />;
		default:
			return <Invest height={72} width={72} />;
	}
};

const WhatWeDo = (props: Props): JSX.Element => <Spacing display={"flex"}>
	{getWhatWeDoImage(props.title)}
	<div className={"content"}>
		<p className={"title"}>{props.title}</p>
		<p className={"body"}>{props.body}</p>
	</div>
</Spacing>;

const SectionOne = () => <Spacing
	fullWidth
	paddingHorizontal="60px"
	paddingHorizontalSm="20px"
	paddingTop="73px"
	paddingBottom="73px"
	background="#151515">
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
		>coming soon</Text>
		<Text
			fontSize={36}
			color="#FFF"
			fontFamily={"Space Grotesk"}
			mb={"18px"}
			mt={"18px"}
			fontWeight={500}
			textAlign={"center"}
		>Deftify’s Private Access Pad (PAP)</Text>
		<Text
			fontSize={18}
			fontFamily={"Space Grotesk"}
			maxWidth={780}
			textAlign={"center"}
			fontWeight={500}
			color={"#979EAF"}>
			Deftify’s Private Access Pad (PAP) focuses on incubating early-stage blockchain startups from emerging
			economies, especially Africa. Our team has wide and direct connections to untapped potential. Through PAP,
			Deftify is going to incubate promising blockchain projects that are not reachable by the usual launchpads.
		</Text>
	</Spacing>
</Spacing>;

const SectionTwo = (): JSX.Element => <Spacing
	display={"flex"}
	fullWidth={true}
	className={"wwd-wrapper"}
>
	<div className="subsection subsection__left">
		{whatWeDoData.map(what => <WhatWeDo
			{...what} key={what.title}
		/>)}
	</div>

	<div className="subsection subsection__right">
		<PapImage className={"pap-image"} />
	</div>
</Spacing>;

export const PrivateAccessPad = (): JSX.Element => {
	return (
		<Fragment>
			<SectionOne />
			<SectionTwo />
		</Fragment>
	);
};
