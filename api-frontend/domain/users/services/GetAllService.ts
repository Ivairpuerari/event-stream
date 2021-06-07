import { Injectable } from "@nestjs/common";
import UserDataProvider from "../dataproviders/UserDataProvider";
import { User } from "../entities/User";
import GetAllUseCase from "../usecases/GetAllUseCase";

@Injectable()
export default class GetAllService implements GetAllUseCase {

    constructor(private readonly dataProvider: UserDataProvider) {}

    async execute(): Promise<User[]> {
        return this.dataProvider.GetAll();
    }

}