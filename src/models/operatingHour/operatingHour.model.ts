import { Schema, model, Types } from 'mongoose';
import { WeekDay } from '../../constants/operatingHour.enum';
import { OperatingHourDocument } from './operatingHour.interface';

export const OperatingHour = model(
  'OperatingHour',
  new Schema<OperatingHourDocument>(
    {
      medicalCenter: {
        type: Schema.Types.ObjectId,
        ref: 'MedicalCenter',
        required: true,
      },
      dayOfWeek: {
        type: String,
        enum: Object.values(WeekDay),
        required: true,
        maxlength: 100,
      },
      openTime: { type: String, required: true },
      closeTime: { type: String, required: true },
    },
    { timestamps: true, collection: 'OperatingHour' },
  ),
);
