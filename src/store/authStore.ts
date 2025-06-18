import { create } from "zustand";
import { ID } from "appwrite";

type User = {
  ID: ID;
  name: string;
  username: string;
  email: string;
}

type State = {
  user: User;
}

type Actions = {
  signup: (name:User['name'], username: User['username'], email: User['email']) => void;
  login: (username: User['username'], password: string) => void;
  logout: () => void;
}

const useAuthStore = create<State & Actions>()


export default useAuthStore;