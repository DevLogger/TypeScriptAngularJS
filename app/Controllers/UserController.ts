import {UserService} from "../Services/UserService";
import {Nocttuam} from "../User/Nocttuam";
/**
 * Created by beto_ on 27/03/2016.
 */
export class UserController {
    public greet : any;
    static $inject = [UserService.IID];
    
    constructor(service : UserService){
        this.greet = service.greet(new Nocttuam());
    }
}
