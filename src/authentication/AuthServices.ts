import { Account, Client, ID } from "appwrite";

class AuthService {
  account: Account;
  private client: Client;
  constructor() {
    this.client = new Client();
    this.account = new Account(this.client);
  }

  signup(name: string, email: string, password: string) {
    this.account.create(ID.unique(), name, email, password);
    return this.login(email, password);
  }

  login(email: string, password: string) {
    return this.account.createEmailPasswordSession(email, password);
  }

  logout() {
    this.account.deleteSession("current");
  }

  logoutAllDevices() {
    this.account.deleteSession("all");
  }

  getCurrentUser() {
    return this.account.get();
  }
}

const authService = new AuthService();

export default authService;
