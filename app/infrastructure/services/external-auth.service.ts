
import { UnauthorizedException } from "@/app/core/exceptions/base.exception";
import { logger } from "@/app/core/utils/logger";
import { LoginInput } from "@/app/domain/entity/auth/login-schema";
import { User, UserSchema } from "@/app/domain/entity/user/user-schema";
import { IAuthExternalService } from "@/app/domain/repository/auth-external.service.interface";
import { cookies } from "next/headers";


export class ExternalAuthService implements IAuthExternalService {
    private readonly apiUrl = process.env.EXTERNAL_API_URL;

    async login(data: LoginInput): Promise<User | undefined> {
        const response = await fetch(`${this.apiUrl}/users.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new UnauthorizedException();
        }

        const users = await response.json();


        for (let index = 0; index < users.length; index++) {
            const user = users[index];
            if (data.email === user.email && data.password === user.password) {
                const u = UserSchema.parse(user)
                u.password = "********"
                return u
            }
        }

        return undefined
    }

}