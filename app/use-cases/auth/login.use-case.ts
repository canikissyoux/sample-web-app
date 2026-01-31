// use-cases/auth/login.use-case.ts
import { UnauthorizedException } from '@/app/core/exceptions/base.exception';
import { LoginInput } from '@/app/domain/entity/auth/login-schema';
import { IAuthExternalService } from '@/app/domain/repository/auth-external.service.interface';

export async function login(
    data: LoginInput,
    authService: IAuthExternalService
) {
    const user = await authService.login(data);

    if (!user) throw new UnauthorizedException();

    return user
}