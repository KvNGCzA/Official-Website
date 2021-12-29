import {FormDetails} from '../../config/interfaces/form-details.interface';

export const MAIL_REGEX                = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const initialState: FormDetails = {
  email:         '',
  message:       '',
  captchaPassed: false
};
