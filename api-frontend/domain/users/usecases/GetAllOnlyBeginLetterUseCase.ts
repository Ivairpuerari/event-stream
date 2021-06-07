import { User } from "../entities/User";

export default abstract class GetAllOnlyBeginLetterUseCase {
    abstract execute(letter: string) : Promise<User[]>
}