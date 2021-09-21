/* istanbul ignore file */

import { endpoints } from "constants/endpoints";
import { httpService } from "./httpService";

export const usersService = {
    signIn: (email, encryptedPassword, encryptionId) => httpService.post(endpoints.users.signIn, { email, encryptedPassword, encryptionId }),
    signUp: (email, password) => httpService.post(endpoints.users.signUp, { email, password }),
    signOut: () => httpService.post(endpoints.users.signOut),
}
