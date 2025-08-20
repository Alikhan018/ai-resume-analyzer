import { DataTypes, Model } from "sequelize";
import sequelize from "../db.js";
import User from "./User.js";

class Resume extends Model { }

Resume.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id"
            }
        },
        original_file_url: { type: DataTypes.TEXT, allowNull: false },
        parsed_text: { type: DataTypes.TEXT },
        status: {
            type: DataTypes.ENUM("uploaded", "parsed", "analyzed"),
            defaultValue: "uploaded",
        },
    },
    {
        sequelize,
        modelName: "Resume",
        tableName: "resumes",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: false,
    }
);

// Associations
Resume.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Resume, { foreignKey: "user_id" });

export default Resume;
