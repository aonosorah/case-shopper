import { BaseError } from "./BaseError";

export class RequestError extends BaseError {
    constructor(
        message: string = "Todos os campos precisam ser preenchidos!"
    ) {
        super(400, message)
    }
}