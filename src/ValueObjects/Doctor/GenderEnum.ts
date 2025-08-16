export enum Gender {
    Male,
    Female,
    NonBinary,
    PreferNotToSay,
    Other
}

export const translatedGender = {
    [Gender.Male]: "Masculino",
    [Gender.Female]: "Feminino",
    [Gender.NonBinary]: "Não binário",
    [Gender.PreferNotToSay]: "Prefiro não dizer",
    [Gender.Other]: "Outro"
};