import {useState} from 'react';
import RegularButton from '../../../../components/Button/Regular';
import Flex from '../../../../components/Flex';
import Spacing from '../../../../components/Spacing';
import TextField from '../../../../components/TextField';
import Text from '../../../../components/Typography';
import './index.scss';

export const ContactForm = () => {
	const [email, setEmail]             = useState<string>('');
	const [companyName, setCompanyName] = useState<string>('');
	return (
		<Spacing className="contact-form-wrapper" paddingHorizontal="20px">
			<Flex itemsFlex={0.45} itemsFlexMd={1}>
				<form>
					<Text className="title">
						Contact The Team
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
