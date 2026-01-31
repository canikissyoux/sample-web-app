import { LoginInput } from "../entity/auth/login-schema";
import { User } from "../entity/user/user-schema";

export interface IAuthExternalService {
    login(data: LoginInput): Promise<User | undefined>;
}
