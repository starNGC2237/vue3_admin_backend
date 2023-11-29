import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AclService } from './acl.service';
import { CreateAclDto } from './dto/create-acl.dto';
import { UpdateAclDto } from './dto/update-acl.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginAclDto } from './dto/login-acl.dto';

@Controller('/admin/acl')
export class AclController {
  constructor(private readonly aclService: AclService) {}

  @ApiTags('acl')
  @Post()
  create(@Body() createAclDto: CreateAclDto) {
    return this.aclService.create(createAclDto);
  }

  @ApiTags('acl')
  @Get()
  findAll() {
    return this.aclService.findAll();
  }

  @ApiTags('acl')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aclService.findOne(+id);
  }

  @ApiTags('acl')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAclDto: UpdateAclDto) {
    return this.aclService.update(+id, updateAclDto);
  }

  @ApiTags('acl')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aclService.remove(+id);
  }

  @ApiTags('index-controller: 后台登录与权限管理')
  @Post('/index/login')
  login(@Body() loginDto: LoginAclDto) {
    return this.aclService.indexLogin(loginDto);
  }
}
