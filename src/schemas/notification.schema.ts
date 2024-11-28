import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationsDocument = Notifications & Document;

export enum NotificationType {
  INFO = 'info',
  WARNING = 'warning',
}

@Schema({ timestamps: true })
export class Notifications {
  @Prop({
    required: true,
    enum: Object.values(NotificationType),
    default: NotificationType.INFO,
  })
  type: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ default: false })
  isRead: boolean;
}

export const NotificationsSchema = SchemaFactory.createForClass(Notifications);
