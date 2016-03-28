/**
 * Created by beto_ on 27/03/2016.
 */
export class User {
    private _name : string;
    private _like : string;

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }

    get like():string {
        return this._like;
    }

    set like(value:string) {
        this._like = value;
    }
}