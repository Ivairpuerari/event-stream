import { User } from './../entities/User';

export default abstract class GetAllUseCase {
    abstract execute(): Promise<Array<User>>
}   