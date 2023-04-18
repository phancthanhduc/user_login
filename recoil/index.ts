import { atom } from "recoil";
import { persistAtom } from "./recoilPersistStorage";
import { User } from "../common/types";

export const userState = atom<User>({
  key: "userState",
  default: {
    phoneNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    isValidated: false,
  } as User,
  effects_UNSTABLE: [persistAtom],
});
