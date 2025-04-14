import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserController } from "./controller/user.controller";
import { UserService } from "./service/user.service";
import { UserRepository } from "./service/userRepository";
import { UserSchema } from "./schema/user.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
    controllers: [UserController],
    providers: [UserService, UserRepository],
  })
  export class UserModule {}