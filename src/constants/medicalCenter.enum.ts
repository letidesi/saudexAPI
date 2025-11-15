export enum MedicalCenterType {
  HOSPITAL,
  HEALTHCENTER,
  PHARMACEUTICAL,
}

export const translatedMedicalCenterType = {
  [MedicalCenterType.HOSPITAL]: 'Hospital',
  [MedicalCenterType.HEALTHCENTER]: 'Centro de Saúde',
  [MedicalCenterType.PHARMACEUTICAL]: 'Farmácia',
};
