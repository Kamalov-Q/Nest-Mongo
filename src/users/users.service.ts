import { Injectable, ConflictException, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { CreateUserDto } from "src/dtos/create-user.dto";
import { UpdateUserDto } from "src/dtos/update-user.dto";
import { User } from "src/schemas/User.schema";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User?.name) private readonly userModel: Model<User>) { }

    async createUser(createUserDto: CreateUserDto) {
        const existingUser = await this?.userModel?.findOne({ username: createUserDto?.username })

        if (existingUser) {
            throw new HttpException("User already exists", HttpStatus.BAD_REQUEST);
        }

        const user = await this.userModel.create(createUserDto);
        return { user, message: "User created successfully", success: true }
    }

    async getAllUsers() {
        const users = await this?.userModel?.find({});
        return { users, count: users?.length, message: "Users fetched successfully", success: true }
    }



    async getUserById(_id: string) {
        if (!Types?.ObjectId?.isValid(_id)) {
            throw new HttpException("Invalid user id", HttpStatus?.BAD_REQUEST)
        }

        const user = await this?.userModel?.findOne({ _id })
        if (!user) {
            throw new HttpException("User not found", HttpStatus?.NOT_FOUND)
        }

        return { user, message: "User found", success: true }
    }

    async updateUser(_id: string, userData: UpdateUserDto) {
        if (!Types?.ObjectId?.isValid(_id)) {
            throw new HttpException("Invalid user id", HttpStatus?.BAD_REQUEST)
        }

        const user = await this?.userModel?.findByIdAndUpdate(_id, userData, { new: true })

        if (!user) {
            throw new HttpException("User not found", HttpStatus?.NOT_FOUND)
        }

        return { user, message: "User updated successfully", success: true }

    }

    async deleteUser(_id: string) {
        if (!Types?.ObjectId?.isValid(_id)) {
            throw new HttpException("Invalid user id", HttpStatus?.BAD_REQUEST)
        }

        const deletedUser = await this?.userModel?.findByIdAndDelete(_id);

        if (!deletedUser) {
            throw new HttpException("User not found", HttpStatus?.NOT_FOUND)
        }

        return { user: deletedUser, message: "User deleted successfully", success: true }
    }

}


