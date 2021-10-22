import { AnotherInterface } from "../types";
// import { binarySearch } from "../utils/binarySearch";

interface User extends AnotherInterface {
  address: string;
  isConnected: boolean;
}

class UserPool {
  private users: User[] = [];

  public getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  public getAllUsersExcept(id: number) {
    return this.users.filter((user) => user.id !== id);
  }

  public addUser(user: User) {
    this.users.push(user);
  }

  public updateUser(id: number, user: Partial<User>) {
    let oldUser = this.getUserById(id);
    if (oldUser?.id === id) {
      oldUser = { ...oldUser, ...user };
    }
  }
}

export default new UserPool();
