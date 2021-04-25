import {
    AllowNull,
    AutoIncrement,
    BelongsToMany,
    Column,
    DataType,
    Model,
    PrimaryKey,
    Table
} from 'sequelize-typescript';
import User from "./User";
import ChatUser from "./ChatUser";

@Table({
    timestamps: false,
    tableName: 'Chats'
})
class Chat extends Model {

    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    chatId!: number;

    @AllowNull(false)
    @Column(DataType.BOOLEAN)
    isPersonalChat!: boolean;

    @BelongsToMany(() => User, () => ChatUser)
    usersInChat!: User[]
}

export default Chat