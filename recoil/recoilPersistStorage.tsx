import AsyncStorage from "@react-native-async-storage/async-storage";
import { AtomEffect, DefaultValue } from "recoil";

export const persistAtom: AtomEffect<any> = ({ node, setSelf, onSet }) => {
  setSelf(
    AsyncStorage.getItem(node.key).then((savedValue) =>
      savedValue != null ? JSON.parse(savedValue) : new DefaultValue()
    )
  );

  onSet((newValue) => {
    if (newValue instanceof DefaultValue) {
      AsyncStorage.removeItem(node.key);
    } else {
      AsyncStorage.setItem(node.key, JSON.stringify(newValue));
    }
  });
};

// <Form elements={elements| />}

// [
//   {
//     label:"fristName",
//     value: userState.value.,
//     inputTy[e]: Text
//     error: 'not empty'
//   }
// ]
