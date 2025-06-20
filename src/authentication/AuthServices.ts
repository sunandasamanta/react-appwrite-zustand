import { Account, Client, ID } from "appwrite";

const APPWRITE_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;
const APPWRITE_PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

class AuthService {
  account: Account;
  private client: Client;
  constructor() {
    this.client = new Client()
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID);
    this.account = new Account(this.client);
  }

  signup(name: string, email: string, password: string) {
    this.account.create(ID.unique(), email, password, name);
    return this.login(email, password);
  }

  login(email: string, password: string) {
    return this.account.createEmailPasswordSession(email, password);
  }

  logout() {
    this.account.deleteSession("current");
  }

  logoutAllDevices() {
    this.account.deleteSessions();
  }

  getCurrentUser() {
    return this.account.get();
  }
}

const authService = new AuthService();

export default authService;
