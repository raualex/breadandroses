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

export const getHouse = async () => {
  
  const response = await fetch('https://api.propublica.org/congress/v1/115/house/committees/HSED.json', {
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
  const memberContactInfo = result.results[0]
  const cleanedContactInfo = {
    website: memberContactInfo.url,
    twitter: memberContactInfo.twitter_account,
    facebook: memberContactInfo.facebook_account,
    phone_number: memberContactInfo.roles[0].phone
  }
  return cleanedContactInfo
}










