import { Request, Response } from 'express';
import { AdminFindOneService } from './adminFindOne.service';
import { AdminFindOneMapper } from './adminFindOne.mapper';

export class AdminFindOneController {
  private service: AdminFindOneService;

  constructor() {
    this.service = new AdminFindOneService();
  }

  async findOne(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const admin = await this.service.execute(id);

      const responseDto = AdminFindOneMapper.toResponseDto(admin);

      res.status(200).json({
        success: true,
        data: responseDto,
      });
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes('Invalid admin ID format')
      ) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
        return;
      }

      if (error instanceof Error && error.message.includes('Admin not found')) {
        res.status(404).json({
          success: false,
          message: error.message,
        });
        return;
      }

      console.error('Error finding admin:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  }
}
