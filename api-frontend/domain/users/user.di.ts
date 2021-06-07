export class UserDI {
    public static readonly GetAllUsersUseCase: unique symbol  = Symbol('GetAllUsers');
    public static readonly UserDataProvider: unique symbol  = Symbol('UserDataProvider');
}