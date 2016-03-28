import {User} from "../User/User";
/**
 * Created by beto_ on 27/03/2016.
 */
export class UserService{
    static IID = "UserService";
    constructor(){

    }
    public greet(user : User) : string{
        return "Hi! My name is " + user.name + ". I like " + user.like;
    }
}
