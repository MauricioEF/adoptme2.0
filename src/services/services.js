import Dao from "../model/Dao.js";
import UserService from "./users.js";
import PetService from "./pets.js";
import config from "../config/config.js";

const dao = new Dao(config.mongo);

export const userService = new UserService(dao);
export const petService = new PetService(dao);