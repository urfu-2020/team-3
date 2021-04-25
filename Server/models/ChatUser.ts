import {AllowNull, AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from 'sequelize-typescript';
import Chat from "./Chat";
import User from "./User";

@Table({
    timestamps: false,
    tableName: 'ChatUsers'
})
class ChatUser extends Model {

    @ForeignKey(() => Chat)
    @Column(DataType.INTEGER)
    chatId!: number;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userIdInChat!: number;

}

export default ChatUser