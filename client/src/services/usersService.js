import { endpoints } from "constants/endpoints";
import { httpService } from "./httpService";

export const usersService = {
    signIn: (email, password) => httpService.post(endpoints.users.signIn, { email, password }),
    signUp: (email, password) => httpService.post(endpoints.users.signUp, { email, password })
}
