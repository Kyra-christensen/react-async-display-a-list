import { checkError, client } from './client';

export async function getPlanets() {
  const response = await client
    .from('planets')
    .select();
  return checkError(response);
}