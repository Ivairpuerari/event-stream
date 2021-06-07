import { User } from "../entities/User";

export default abstract class UserDataProvider {
    abstract GetAll(): Array<User>
    abstract GetAllOnlyBeginsNameWithLetter(letter: string) : Array<User>
}