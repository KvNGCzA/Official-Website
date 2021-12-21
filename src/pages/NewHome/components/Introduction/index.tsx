import React from "react";
import {PlayIcon} from "../../../../assets/Icons";
import OutlinedButton from "../../../../components/Button/Outlined";
import RegularButton from "../../../../components/Button/Regular";
import Flex from "../../../../components/Flex";
import Spacing from "../../../../components/Spacing";
import Text from "../../../../components/Typography";
import "./index.scss";

export const Introduction = () => (
	<Spacing margin="auto" padding="20px" className="intro-wrapper">
		{/* Intro text */}
		<Text
			fontWeight={500}
			fontSize={36}
			color="#fff"
			textAlign="center"
			fontFamily="Space Grotesk"
		>
			Deftify - crypto without compromise
		</Text>

		<Text
			textAlign="center"
			maxWidth={819}
			mt="16px"
			mb="16px"
		>
			The world’s first Africa-focused crypto <b>incubator</b> and <b>launchpad</b> offering investors <b>private round
			                                                                                                    access</b> to
			cutting-edge African innovation. In addition, our diverse index funds and integrated portfolio management tools
			give investors an edge not available on other launchpads.
		</Text>

		{/*buttons*/}
		<Spacing fullWidth>
			<Flex flexDirectionSm="column">
				<a
					href="https://docsend.com/view/pkxf3t4dy9bjyjt6"
					target="_blank"
					rel="noreferrer"
				>
					<RegularButton stretch mr="40px" marginRightSm="0px" marginBottomSm="20px">
						Whitepaper
					</RegularButton>
				</a>

				<Spacing>
					<OutlinedButton>
						<PlayIcon style={{marginRight: 10}} />
						Watch Demo
					</OutlinedButton>
				</Spacing>
			</Flex>
		</Spacing>
	</Spacing>
);
