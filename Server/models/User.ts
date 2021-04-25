import { AutoIncrement, BelongsToMany, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript'
import Chat from './Chat'
import ChatUser from './ChatUser'

@Table({
  timestamps: false,
  tableName: 'Users'
})
class User extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    userId: number;

    @Column(DataType.STRING)
    userName: string;

    @Column(DataType.STRING)
    avatarUrl: string;

    @BelongsToMany(() => Chat, () => ChatUser)
    chats: Chat[]
}

export default User
