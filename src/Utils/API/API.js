import {key} from './key';

export const getSenate = async () => {
  
  const response = await fetch('https://api.propublica.org/congress/v1/115/senate/committees/SSHR.json', {
    method: "GET",
    headers: {"X-API-Key": `${key}`}
  });
  const result = await response.json()
  return result.results[0].current_members
}