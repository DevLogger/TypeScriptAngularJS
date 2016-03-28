import {UserController} from "./Controllers/UserController";
import {UserService} from "./Services/UserService";
/**
 * Created by beto_ on 21/03/2016.
 */
angular.module('moduleTest', [])
    .controller('UserController', UserController)
    .service(UserService.IID,UserService);

angular.bootstrap(document, ['moduleTest']);
console.log("Loaded!");





