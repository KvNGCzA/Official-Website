import {useState} from "react";
import RegularButton from "../../../../components/Button/Regular";
import Flex from "../../../../components/Flex";
import Spacing from "../../../../components/Spacing";
import TextField from "../../../../components/TextField";
import Text from "../../../../components/Typography";

export const ContactForm = () => {
	const [email, setEmail]             = useState<string>("");
	const [companyName, setCompanyName] = useState<string>("");
	return (
		<Spacing paddingTop="70px" paddingBottom="80px" paddingHorizontal="20px">
			<Flex itemsFlex={0.45} itemsFlexMd={1}>
				<form>
					<Text fontWeight={800} fontSize={48} mb="60px" color="#fff" textAlign="center" fontFamily={"Space Grotesk"}>
						Get in touch with the Team
					</Text>

					<TextField
						type="email"
						onChange={({target: {value}}) => setEmail(value)}
						value={email}
						label="Email Address"
					/>

					<TextField
						value={companyName}
						onChange={({target: {value}}) => setCompanyName(value)}
						label="Company Name"
					/>

					<RegularButton fullWidth>Submit</RegularButton>
				</form>
			</Flex>
		</Spacing>
	);
};
