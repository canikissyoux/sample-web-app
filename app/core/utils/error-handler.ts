import { BaseException, EmailAlreadyExistsException, UnauthorizedException } from "../exceptions/base.exception";

export function handleActionError(error: any) {

    if (error instanceof EmailAlreadyExistsException) {
        return {
            success: error.success,
            error: error.message,
            code: error.code
        };
    }

    if (error instanceof UnauthorizedException) {
        return {
            success: error.success,
            error: error.message,
            code: error.code
        };
    }

    if (error instanceof BaseException) {
        return { error: error.message, code: error.code };
    }

    return {
        success: false,
        error: "เกิดข้อผิดพลาดภายในระบบ",
        code: "INTERNAL_SERVER_ERROR"
    };
}