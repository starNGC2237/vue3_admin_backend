import { Controller, Post, Body } from '@nestjs/common';
import { AclService } from './acl.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginAclDto } from './dto/login-acl.dto';

@Controller('/admin/acl')
export class AclController {
  constructor(private readonly aclService: AclService) {}

  @ApiTags('index-controller: 后台登录与权限管理')
  @ApiBody({
    type: LoginAclDto,
  })
  @Post('/index/login')
  login(@Body() loginDto: LoginAclDto) {
    return this.aclService.indexLogin(loginDto);
  }
}
