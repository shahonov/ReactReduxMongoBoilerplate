import { endpoints } from "constants/endpoints";
import { httpService } from "./httpService";

export const cryptoService = {
    /**
     * 
     * @returns publicRSAKey and encryptionId
     */
     getEncryptionInfo: () => httpService.get(endpoints.crypto.publicRSAKey)
}
