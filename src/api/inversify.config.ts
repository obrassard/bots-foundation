import {Container} from "inversify";
import TYPES from "./constant/Types";

import "./controllers/HomeController";

let container = new Container;

// container.bind<UserService>(TYPES.UserService).to(UserService);

export {container}
