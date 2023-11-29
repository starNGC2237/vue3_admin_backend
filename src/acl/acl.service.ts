import { Injectable } from '@nestjs/common';
import { CreateAclDto } from './dto/create-acl.dto';
import { UpdateAclDto } from './dto/update-acl.dto';
import { LoginAclDto } from './dto/login-acl.dto';

@Injectable()
export class AclService {
  create(createAclDto: CreateAclDto) {
    console.log(createAclDto);
    return 'This action adds a new acl';
  }

  findAll() {
    return `This action returns all acl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} acl`;
  }

  update(id: number, updateAclDto: UpdateAclDto) {
    console.log(updateAclDto);
    return `This action updates a #${id} acl`;
  }

  remove(id: number) {
    return `This action removes a #${id} acl`;
  }

  indexLogin(loginDto: LoginAclDto) {
    console.log(loginDto);
    return 'eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAKtWKi5NUrJSCjAK0A0Ndg1S0lFKrShQsjI0NzAyNzYwMjDRUSotTi3yTAGKQZh-ibmpQB2JKbmZeUq1AJXppdJBAAAA.4zDITGLYsZZt7_oz591uIwM82ibNIVMXOazBiCF0w73P_wA4EOKS9tKxVh3YXpsbya7ytLcvomwGGDjLdwXitg';
  }
}
