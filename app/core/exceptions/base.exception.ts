export class BaseException extends Error {
    constructor(public success: boolean, public message: string, public code: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

export class BadRequestException extends BaseException {
    constructor() {
        super(false, "ข้อมูลไม่ถูกต้อง", "BAD_REQUEST");
    }
}


export class UserNotFoundException extends BaseException {
    constructor() {
        super(false, "ไม่พบผู้ใช้", "USER_NOT_FOUND");
    }
}

export class UnauthorizedException extends BaseException {
    constructor() {
        super(false, "อีเมลหรือรหัสผ่านไม่ถูกต้อง", "AUTH_UNAUTHORIZED");
    }
}

export class EmailAlreadyExistsException extends BaseException {
    constructor() {
        super(false, "อีเมลนี้ถูกใช้งานไปแล้ว", "AUTH_EMAIL_EXISTS");
    }
}