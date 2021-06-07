import { Controller, Get, Sse } from "@nestjs/common";
import { interval, Observable } from "rxjs";
import { map } from "rxjs/operators";
import GetAllOnlyBeginLetterUseCase from "../../../domain/users/usecases/GetAllOnlyBeginLetterUseCase";
import GetAllUseCase from "../../../domain/users/usecases/GetAllUseCase";
import { User } from './../../../domain/users/entities/User';

@Controller('users')
export default class UsersController {
    constructor(
        private readonly getAllUseCase: GetAllUseCase,
        private readonly getAllOnlyBeginLetterUseCase: GetAllOnlyBeginLetterUseCase
        ) {}

    @Get()
    async getAll(): Promise<User[]> {
        return this.getAllUseCase.execute();
    }

    @Get('/:letter')
    async getAllWithLetter(letter: string): Promise<User[]> {
        return this.getAllOnlyBeginLetterUseCase.execute(letter);
    }
    
    //server-source-event
    @Sse('/sseconnect/stream')
    sse(): Observable<string> {
        const ss = [
            new User(1, "teste")
        ]

        return interval(5000).pipe(map((n) => ("stream data " + n.toString())));
    }      
}