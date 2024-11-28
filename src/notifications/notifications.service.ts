import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Notifications,
  NotificationsDocument,
} from 'src/schemas/notification.schema';
import { CreateNotificationDto } from './dto/create-notification';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(Notifications.name)
    private readonly notificationModel: Model<NotificationsDocument>,
  ) {}

  async create(
    notification: CreateNotificationDto,
  ): Promise<NotificationsDocument> {
    const createdNotification = new this.notificationModel(notification);
    return createdNotification.save();
  }

  async findAll(): Promise<NotificationsDocument[]> {
    return this.notificationModel.find();
  }

  async findOne(id: string): Promise<NotificationsDocument> {
    return this.notificationModel.findById(id);
  }

  async findUnread(): Promise<NotificationsDocument[]> {
    return this.notificationModel.find({ read: false });
  }

  async markAsRead(id: string): Promise<NotificationsDocument> {
    return this.notificationModel.findByIdAndUpdate(
      id,
      { read: true },
      { new: true },
    );
  }

  async findUnreadByUser(userId: string): Promise<NotificationsDocument[]> {
    return this.notificationModel.find({ read: false, userId });
  }

  async findByUserId(userId: string): Promise<NotificationsDocument[]> {
    return this.notificationModel.find({ userId });
  }
}
