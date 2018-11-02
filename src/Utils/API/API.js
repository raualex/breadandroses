import {key} from './key';

export const getSenate = async () => {
  
  const response = await fetch('https://api.propublica.org/congress/v1/115/senate/committees/SSHR.json', {
    method: "GET",
    headers: {"X-API-Key": `${key}`}
  });
  const result = await response.json()
  const currentMembers = result.results[0].current_members
  const cleanedMembers = currentMembers.map((member) => {
    return {
      id: member.id,
      name: member.name,
      party: member.party,
      state: member.state
    }
  })
  return cleanedMembers
}

export const getMemberContact = async (memberId) => {

  const response = await fetch(`https://api.propublica.org/congress/v1/members/${memberId}.json`, {
    method: "GET",
    headers: {"X-API-Key": `${key}`}
  });
  const result = await response.json()
  return result.results[0]
}