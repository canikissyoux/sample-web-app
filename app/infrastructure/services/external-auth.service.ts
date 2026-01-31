
import { UnauthorizedException } from "@/app/core/exceptions/base.exception";
import { logger } from "@/app/core/utils/logger";
import { LoginInput } from "@/app/domain/entity/auth/login-schema";
import { IAuthExternalService } from "@/app/domain/repository/auth-external.service.interface.ts";


export class ExternalAuthService implements IAuthExternalService {
    private readonly apiUrl = process.env.EXTERNAL_API_URL;

    async login(data: LoginInput) {
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

        const result = {
            uid: '',
            email: '',
            full_name: '',
            access_token: ''
        };

        for (let index = 0; index < users.length; index++) {
            const user = users[index];
            if (data.email === user.email && data.password === user.password) {
                result.uid = user.uid;
                result.email = user.email;
                result.full_name = user.full_name;
                result.access_token = user.access_token;
                break;
            }
        }

        // Map ข้อมูลจาก API ภายนอกให้กลับมาเป็นรูปแบบที่ระบบเราต้องการ
        return {
            uid: result.uid,
            email: result.email,
            name: result.full_name,
            access_token: result.access_token
        };
    }

}