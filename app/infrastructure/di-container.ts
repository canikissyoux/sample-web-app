
import { ExternalAuthService } from "./services/external-auth.service";
import { ExternalProductService } from "./services/external-product.service";

export const container = {
    authExternalService: new ExternalAuthService(),
    productExternalService: new ExternalProductService(),
};