
import { Module } from '@nestjs/common';
import UserDataProvider from 'domain/users/dataproviders/UserDataProvider';
import GetAllOnlyBeginLetterService from 'domain/users/services/GetAllOnlyBeginLetterService';
import GetAllOnlyBeginLetterUseCase from 'domain/users/usecases/GetAllOnlyBeginLetterUseCase';
import GetAllUseCase from 'domain/users/usecases/GetAllUseCase';
import GetAllService from '../../domain/users/services/GetAllService';
import UserProvider from './dataproviders/UserProvider';
import UsersController from './entrypoints/UsersController';


@Module({
    controllers: [UsersController],
    providers: [
       {
           provide: GetAllUseCase,
           useClass: GetAllService
       },
       {
           provide: UserDataProvider,
           useClass: UserProvider
       },
       {
           provide: GetAllOnlyBeginLetterUseCase,
           useClass: GetAllOnlyBeginLetterService
       },
    ]
})

export class UsersModule {}