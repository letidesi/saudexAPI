import { Request, Response } from 'express';
import { AdminCreateService } from './adminCreate.service';
import { AdminCreateMapper } from './adminCreate.mapper';
import { CreateAdminDto } from './adminCreate.dto';

export class AdminCreateController {
  private service: AdminCreateService;

  constructor() {
    this.service = new AdminCreateService();
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const createAdminDto: CreateAdminDto = req.body;

      const admin = await this.service.execute(createAdminDto);

      const responseDto = AdminCreateMapper.toResponseDto(admin);

      res.status(201).json({
        success: true,
        message: 'Admin created successfully',
        data: responseDto,
      });
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes('Validation failed')
      ) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
        return;
      }

      if (error instanceof Error && error.message.includes('ValidationError')) {
        res.status(400).json({
          success: false,
          message: 'Invalid data provided',
          errors: error.message,
        });
        return;
      }

      console.error('Error creating admin:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  }
}
