import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationService: NotificationsService) {}

  @Post()
  async pushNotification(@Body() notification: CreateNotificationDto) {
    return await this.notificationService.create(notification);
  }

  @Get()
  async getAllNotifications() {
    return await this.notificationService.findAll();
  }

  @Get(':id')
  async getNotificationById(@Param('id') id: string) {
    return await this.notificationService.findOne(id);
  }

  @Get('unread')
  async getUnreadNotifications() {
    return await this.notificationService.findUnread();
  }

  @Patch(':id/read')
  async markAsRead(@Param('id') id: string) {
    return await this.notificationService.markAsRead(id);
  }

  @Get('user/:userId/unread')
  async getUnreadNotificationsByUser(@Param('userId') userId: string) {
    return await this.notificationService.findUnreadByUser(userId);
  }

  @Get('user/:userId')
  async getNotificationsByUser(@Param('userId') userId: string) {
    return await this.notificationService.findByUserId(userId);
  }
}
