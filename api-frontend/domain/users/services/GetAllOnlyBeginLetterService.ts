import { Injectable } from "@nestjs/common";
import UserDataProvider from "../dataproviders/UserDataProvider";
import { User } from "../entities";
import GetAllOnlyBeginLetterUseCase from "../usecases/GetAllOnlyBeginLetterUseCase";


@Injectable()
export default class GetAllOnlyBeginLetterService implements GetAllOnlyBeginLetterUseCase {
    constructor(private readonly dataProvider : UserDataProvider){}
    
    async execute(letter: string): Promise<User[]> {
        return this.dataProvider.GetAllOnlyBeginsNameWithLetter(letter);
    }
}