import { CallHandler, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

interface Data<T> {
  data: T;
}

@Injectable()
export class Response<T> implements NestInterceptor {
  intercept(context: any, next: CallHandler): Observable<Data<T>> {
    return next.handle().pipe(
      map((data) => {
        return {
          code: 200,
          data,
          message: '成功',
          ok: true,
        };
      }),
    );
  }
}
