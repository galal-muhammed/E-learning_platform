export default class AppError extends Error{
    statusCode :number=500;
    constructor(message:string ,statusCode:number){
        super(message)
        this.statusCode=statusCode
    }
}