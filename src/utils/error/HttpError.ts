export default class HTTPError extends Error {
    statusCode: number;

    constructor(msg: string, statusCode: number) {
        super(msg);
        this.name = 'HTTPError';
        this.statusCode = statusCode;
    }
}
