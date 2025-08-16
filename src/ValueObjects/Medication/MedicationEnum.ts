export enum MedicationType {
    MEDICINE,
    VACCINE,
    INSULIN
}

export const translatedMedicationType = {
    [MedicationType.MEDICINE]: "Remédio",
    [MedicationType.VACCINE]: "Vacina",
    [MedicationType.INSULIN]: "Insulina"
};