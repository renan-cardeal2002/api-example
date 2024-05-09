import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from 'src/resources/user/dto/update-user.dto';
import { Public } from 'src/common/decorators/public/public.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @Public()
  signIn(@Body() signInDto: UpdateUserDto) {
    return this.authService.signIn(signInDto.name, signInDto.password);
  }
}
