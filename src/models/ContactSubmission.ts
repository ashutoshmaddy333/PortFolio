import { Schema, model, models } from "mongoose";

const contactSubmissionSchema = new Schema(
  {
    inquiryType: { type: String, required: true, trim: true, maxlength: 50 },
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    companyName: { type: String, trim: true, maxlength: 200, default: "" },
    roleTitle: { type: String, trim: true, maxlength: 200, default: "" },
    budget: { type: String, required: true, trim: true, maxlength: 50 },
    projectType: { type: String, required: true, trim: true, maxlength: 200 },
    message: { type: String, required: true, trim: true, maxlength: 4000 },
  },
  {
    timestamps: true,
  },
);

export const ContactSubmission =
  models.ContactSubmission || model("ContactSubmission", contactSubmissionSchema);
