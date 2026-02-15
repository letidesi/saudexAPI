export interface AdminFindOneDto {
  id: string;
}

export interface AdminResponseDto {
  id: string;
  firstName: string;
  lastName: string;
  contacts: string[];
  address?: string;
  createdAt: Date;
  updatedAt: Date;
}
