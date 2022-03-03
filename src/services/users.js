import User from "../model/User.js";
import GenericQueries from "./genericQueries.js";


export default class UserService extends GenericQueries{
    constructor(dao){
        super(dao,User.model);
    }
}