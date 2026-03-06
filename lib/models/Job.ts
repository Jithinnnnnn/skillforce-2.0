import mongoose, { Schema, type Document } from "mongoose";

export interface IJob extends Document {
    title: string;
    description: string;
    role: string;
    dates: Date[];
    timing: { startTime: string; endTime: string };
    location: { address: string; googleMapsUrl?: string };
    payment: {
        amount: number;
        currency: string;
        paymentTerms: "SPOT" | "WEEKLY" | "MONTHLY" | "AFTER_EVENT";
    };
    requirements: {
        dressCode?: string;
        isKannadaMandatory: boolean;
        isAge18Plus: boolean;
    };
    contact: { contactPerson: string; phoneNumber: string };
    createdBy: string;
    status: "active" | "paused" | "closed";
    createdAt: Date;
    updatedAt: Date;
}

const JobSchema = new Schema<IJob>(
    {
        title: { type: String, required: true, trim: true },
        description: { type: String, required: true },
        role: { type: String, required: true },

        dates: { type: [Date], required: true },

        timing: {
            startTime: { type: String, required: true },
            endTime: { type: String, required: true },
        },

        location: {
            address: { type: String, required: true },
            googleMapsUrl: { type: String, default: "" },
        },

        payment: {
            amount: { type: Number, required: true, min: 0 },
            currency: { type: String, default: "INR" },
            paymentTerms: {
                type: String,
                enum: ["SPOT", "WEEKLY", "MONTHLY", "AFTER_EVENT"],
                required: true,
            },
        },

        requirements: {
            dressCode: { type: String, default: "" },
            isKannadaMandatory: { type: Boolean, default: false },
            isAge18Plus: { type: Boolean, default: true },
        },

        contact: {
            contactPerson: { type: String, required: true },
            phoneNumber: { type: String, required: true },
        },

        createdBy: { type: String, required: true },
        status: {
            type: String,
            enum: ["active", "paused", "closed"],
            default: "active",
        },
    },
    { timestamps: true }
);

export const Job =
    mongoose.models.Job || mongoose.model<IJob>("Job", JobSchema);
