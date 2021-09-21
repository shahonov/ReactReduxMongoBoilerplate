import { endpoints } from "constants/endpoints";
import { httpService } from "./httpService";

export const cryptoService = {
    getEncryptionInfo: () => httpService.get(endpoints.crypto.publicRSAKey)
}
