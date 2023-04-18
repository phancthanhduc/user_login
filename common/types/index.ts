import { EScreen } from "../enum";

export interface User {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  isValidated: boolean;
  gender: string;
}

export type RootStackParamList = {
  [EScreen.LAUNCH]: undefined;
  [EScreen.LOGIN]: undefined;
  [EScreen.OTP_PHASE]: { phoneNumber: string };
  [EScreen.PROFILE]: { phoneNumber: string; isValidated: boolean };
};
