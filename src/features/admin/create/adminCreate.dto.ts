export interface CreateAdminDto {
  firstName: string;
  lastName: string;
  password: string;
  contactIds?: string[];
  addressId?: string;
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
