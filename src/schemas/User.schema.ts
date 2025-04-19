import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

const id = Number(new Date());

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: false, default: `User-${id}` })
    displayname?: string;

    @Prop({ required: false, default: "https://i.pravatar.cc/505" })
    avatarUrl?: string;

}

export const UserSchema = SchemaFactory?.createForClass(User);