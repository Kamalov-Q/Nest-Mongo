import { IsString, Length, MinLength } from "class-validator";

import { IsOptional } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @IsString({ message: "Username must be a string" })
    @MinLength(3, { message: "Username must be more than 3 characters long" })
    username?: string;

    @IsOptional()
    @IsString({ message: "Display name must be a string" })
    @Length(3, 20, { message: "Display name must be between 3 and 20 characters" })
    displayname?: string;

    @IsOptional()
    @IsString({ message: "Avatar URL must be a string" })
    avatarUrl?: string;

}