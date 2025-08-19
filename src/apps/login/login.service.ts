import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/middlewares/auth/auth.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class LoginService {
  constructor (private authService: AuthService) {}

  async verifyLogin(data: LoginDto) {
    const user = await this.authService.validateUser(data)

    if(!user) {
      return {'message' : 'User or password Incorrect'}
    }

    return this.authService.login(user);

  }
}
