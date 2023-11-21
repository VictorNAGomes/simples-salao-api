export interface CreateAppointmentDto {
  idClient: string;
  idProfessional: string;
  idService: string;
  date: Date;
  approved: boolean;
  createdByProfessional: boolean;
}
