import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch()
export class HttpFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const ctxRequest = ctx.getRequest();
    const ctxResponse = ctx.getResponse();
    const status = exception.getStatus();
    const message =
      typeof exception.getResponse() === 'string'
        ? exception.getResponse()
        : exception.getResponse()['message']?.join(',');
    ctxResponse.status(status).json({
      status: 201,
      data: null,
      message,
      time: new Date(),
      success: false,
      path: ctxRequest.url,
    });
  }
}
