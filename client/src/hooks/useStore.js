import { create } from "zustand";
import { shallow } from "zustand/shallow";
import { mountStoreDevtool } from "simple-zustand-devtools";

const testContact = {
  id: 1,
  name: "John Doe",
};

const initialState = {
  loggedIn: true,
  user: null,
  contacts: [testContact],
};

const useStoreImpl = create((set) => ({
  ...initialState,
  logout: () => set(() => ({ loggedIn: false })),
}));

export const useStore = (selector) => useStoreImpl(selector, shallow);

mountStoreDevtool("Store", useStoreImpl);
