
import { ExternalAuthService } from "./services/external-auth.service";

export const container = {
    authExternalService: new ExternalAuthService(),
};