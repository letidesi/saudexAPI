import fetch from 'node-fetch';

export async function GetAddressByCep(cep: string) {
  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = (await res.json()) as ViaCepResponse;

    if (data.erro) throw new Error('CEP not found.');

    return {
      street: data.logradouro,
      neighborhod: data.bairro,
      city: data.localidade,
      state: data.uf,
      cep: cep,
    };
  } catch (error) {
    throw new Error('Error in search cep.');
  }
}
