import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "src/dtos/create-user.dto";
import { UpdateUserDto } from "src/dtos/update-user.dto";

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    createUser(@Body() createUserData: CreateUserDto) {
        return this?.usersService?.createUser(createUserData);
    }

    @Get()
    getAllUsers() {
        return this?.usersService?.getAllUsers();
    }

    @Get(":id")
    getUserById(@Param("id") id: string) {
        return this?.usersService?.getUserById(id);
    }

    @Patch(":id")
    updateUser(@Param("id") id: string, @Body() userData: UpdateUserDto) {
        return this?.usersService?.updateUser(id, userData);
    }

    @Delete(":id")
    deleteUser(@Param("id") id: string) {
        return this?.usersService?.deleteUser(id);
    }

}