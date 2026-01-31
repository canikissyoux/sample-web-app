// use-cases/auth/login-factory.ts

import { LoginInput } from "@/app/domain/entity/auth/login-schema";
import { login } from "./login.use-case";
import { container } from "@/app/infrastructure/di-container";

export const loginUseCase = (data: LoginInput) =>
    login(data, container.authExternalService);