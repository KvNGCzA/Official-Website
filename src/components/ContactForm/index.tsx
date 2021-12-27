import {ChangeEvent, useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {MAIL_REGEX} from './index.constants';
import RegularButton from '../Button/Regular';
import Flex from '../Flex';
import Spacing from '../Spacing';
import TextField from '../TextField';
import Text from '../Typography';
import './index.scss';

export const ContactForm = () => {
  const [formDetails, setFormDetails] = useState<{
    email: string;
    message: string;
    captchaPassed: boolean;
  }>({
    email:         '',
    message:       '',
    captchaPassed: false
  });

  const onCaptchaChange = (verified: any): void => {
    if (verified) {
      setCaptchaPassed(true);
      return;
    }

    handleCaptchaError();
  };

  const setCaptchaPassed = (captchaPassed: boolean): void => {
    setFormDetails({...formDetails, captchaPassed});
  }

  const handleCaptchaError = (): void => {
    setCaptchaPassed(false);
  };

  const disableSubmitButton = (): boolean =>
    formDetails.message.trim() === '' ||
    formDetails.email.trim() === '' ||
    !MAIL_REGEX.test(formDetails.email) ||
    !formDetails.captchaPassed;

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormDetails({...formDetails, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
  };

  return (
    <Spacing className="contact-form-wrapper" paddingHorizontal="20px">
      <Flex itemsFlex={0.45} itemsFlexMd={1}>
        <form>
          <Text className="title">
            Contact The Team
          </Text>

          <TextField
            type="email"
            onChange={onInputChange}
            value={formDetails.email}
            label="Email Address"
            name="email"
          />

          <TextField
            value={formDetails.message}
            onChange={onInputChange}
            label="Message"
            name="message"
          />

          <Spacing marginBottom="48px">
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY ?? ''}
              onChange={onCaptchaChange}
              onErrored={handleCaptchaError}
              onExpired={handleCaptchaError}
            />
          </Spacing>

          <RegularButton
            fullWidth
            disabled={disableSubmitButton()}
            onClick={handleSubmit}
          >Submit</RegularButton>
        </form>
      </Flex>
    </Spacing>
  );
};
