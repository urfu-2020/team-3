import { Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript'

@Table({
    timestamps: false,
    tableName: 'Sessions'
})
class Session extends Model {
    @PrimaryKey
    @Column(DataType.STRING(36))
    sessionId: number;

    @Column(DataType.DATE)
    expires: Date;

    @Column(DataType.TEXT)
    data: string;
}

export default Session
