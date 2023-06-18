export default function generateAuthError(message) {
    const messageError = "Email или пароль введены некорректно";
    switch (message) {
        case "INVALID_PASSWORD":
            return messageError;
        case "EMAIL_NOT_FOUND":
            return messageError;
        case "EMAIL_EXISTS":
            return "Пользователь с таким Аккаунтом уже существует";
        default:
            return "Слишком много попыток входа. Попробуйте позднее";
    }
}
