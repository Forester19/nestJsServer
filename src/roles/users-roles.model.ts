import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {User} from "../users/users.model";

@Table({tableName:"users_roles", createdAt:false, updatedAt: false})
export class UsersRoles extends Model<UsersRoles>{

    @ApiProperty({example: 1, description: 'Users-roles id'})
    @Column({type: DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})
    id: number;

    @ForeignKey(()=> User)
    @ApiProperty({example: '1', description: 'User id'})
    @Column({type: DataType.INTEGER})
    userId:string;

    @ForeignKey(()=> Role)
    @ApiProperty({example: 1, description: 'Role id'})
    @Column({type: DataType.INTEGER})
    roleId:string;
}