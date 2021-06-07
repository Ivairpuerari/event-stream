import { Injectable } from "@nestjs/common";
import UserDataProvider from "../../../domain/users/dataproviders/UserDataProvider";
import { User } from "../../../domain/users/entities/User";


@Injectable()
export default class UserProvider implements UserDataProvider {
    
    protected readonly usersSaved = [
        new User(1,  "João"),
        new User(2,  "Maria")
    ];

    GetAllOnlyBeginsNameWithLetter(letter: string): User[] {
       return [new User(1,  "BeginWith"),];
    }
    
    GetAll(): User[] {
        return this.usersSaved;
    }

}