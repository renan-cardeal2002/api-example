import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/resources/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(name: string, password: string): Promise<any> {
    const user = await this.usersService.findByName(name);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException();
      // throw new UnauthorizedException({
      //   status: HttpStatus.UNAUTHORIZED,
      //   message: 'Usuário ou senha inválidos',
      // });
    }

    const payload = { name: user.name };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
