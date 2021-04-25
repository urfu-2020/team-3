import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'
import Chat from './Chat'
import User from './User'

@Table({
  timestamps: false,
  tableName: 'Messages'
})
class Message extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    messageId!: number;

    @AllowNull(false)
    @ForeignKey(() => Chat)
    @Column(DataType.INTEGER)
    chatId!: number;

    @BelongsTo(() => Chat)
    chat!: Chat;

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    senderId!: number;

    @BelongsTo(() => User)
    user!: User;

    @AllowNull(false)
    @Column(DataType.STRING)
    messageText!: string;

    @AllowNull(true)
    @Column(DataType.INTEGER)
    messageRespondId: number;
}

export default Message
