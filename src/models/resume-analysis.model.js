import { DataTypes, Model } from "sequelize";
import sequelize from "../db.js";
import Resume from "./Resume.js";

class ResumeAnalysis extends Model { }

ResumeAnalysis.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        resume_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Resume,
                key: "id"
            }
        },
        analysis: { type: DataTypes.JSONB, allowNull: false }, // stores AI results
    },
    {
        sequelize,
        modelName: "ResumeAnalysis",
        tableName: "resume_analysis",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: false,
    }
);

// Associations
ResumeAnalysis.belongsTo(Resume, { foreignKey: "resume_id" });
Resume.hasOne(ResumeAnalysis, { foreignKey: "resume_id" });

export default ResumeAnalysis;
