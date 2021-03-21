import { endpoints } from "constants/endpoints";
import { httpService } from "./httpService";

export const usersService = {
    getUser: (email, password) => httpService.post(endpoints.getUser, { email, password })
}
