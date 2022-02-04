import { checkError, client } from './client';

export async function getPlanets() {
  const response = await client
    .from('planets')
    .select();
  return checkError(response);
}

export async function getDogs() {
  const response = await client
    .from('dogs')
    .select();
  return checkError(response);
}

export async function getShows() {
  const response = await client
    .from('shows')
    .select();
  return checkError(response);
}