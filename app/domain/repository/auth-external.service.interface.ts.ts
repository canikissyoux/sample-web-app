import { LoginInput } from "../entity/auth/login-schema";

export interface IAuthExternalService {
    login(data: LoginInput): Promise<{ uid: string; email: string; name?: string, access_token?: string }>;
}
