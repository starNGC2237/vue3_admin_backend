import { Injectable } from '@nestjs/common';
import { LoginAclDto } from './dto/login-acl.dto';

@Injectable()
export class AclService {
  indexLogin(loginDto: LoginAclDto) {
    console.log(loginDto);
    return 'eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAKtWKi5NUrJSCjAK0A0Ndg1S0lFKrShQsjI0NzAyNzYwMjDRUSotTi3yTAGKQZh-ibmpQB2JKbmZeUq1AJXppdJBAAAA.4zDITGLYsZZt7_oz591uIwM82ibNIVMXOazBiCF0w73P_wA4EOKS9tKxVh3YXpsbya7ytLcvomwGGDjLdwXitg';
  }
}
