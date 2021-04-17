import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UsersRoles} from "../roles/users-roles.model";

interface UserCreationAttrs {
    email:string;
    password:string;
}

@Table({tableName:"users"})
export class User extends Model<User, UserCreationAttrs>{

    @ApiProperty({example: 1, description: 'User id'})
    @Column({type: DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})
    id: number;
    @ApiProperty({example: 'user@gmail.ccm', description: 'User mail'})
    @Column({type: DataType.STRING, unique:true, allowNull:false})
    email:string;

    @ApiProperty({example: 12345678, description: 'User password'})
    @Column({type: DataType.STRING, allowNull:false})
    password:string;
    @ApiProperty({example: false, description: 'User is banned'})
    @Column({type: DataType.BOOLEAN, defaultValue:false})
    banned:boolean;
    @ApiProperty({example: "Banned due some reason", description: 'User banned reason'})
    @Column({type: DataType.STRING, allowNull:true})
    banReason:string;

    @BelongsToMany(()=> Role, ()=> UsersRoles)
    roles: Role[]
}