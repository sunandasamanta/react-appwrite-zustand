import { Account, Client, ID } from "appwrite";

const APPWRITE_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;
const APPWRITE_PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

const account = new Account(client);

class AuthServices {
  

  async signup(name: string, email: string, password: string) {
    await account.create(ID.unique(), email, password, name);
    return this.login(email, password);
  }

  async login(email: string, password: string) {
    return await account.createEmailPasswordSession(email, password);
  }

  async logout() {
    await account.deleteSession("current");
  }

  async logoutAllDevices() {
    await account.deleteSessions();
  }

  async getCurrentUser() {
    return await account.get();
  }
}

const authServices = new AuthServices();

export default authServices;
