import * as API from './API';

describe('API', () => {
  let mockCongress;
  let cleanCongress;
  let mockNewCongress;
  let mockCleanContact;
  let mockSenateHearings;
  let mockHouseHearings;
  let cleanSenateHearings;
  let cleanHouseHearings;

  beforeEach(() => {
    mockCongress = {
      results: [
        {
          current_members: [
            { 
              id: 27,
              name: 'Bernie Sanders', 
              party: 'I', 
              state: 'VT',
              url: 'www.sanders.org',
              twitter_account: 'sanders',
              facebook_account: 'FBsanders',
              phone: '555-5555' 
            }
          ]
        }
      ]
    }

    cleanCongress = [{
      id: 27,
      name: 'Bernie Sanders',
      party: 'I',
      state: 'VT'
    }]

    mockNewCongress = {
        results: [
          { 
            id: 27,
            name: 'Bernie Sanders', 
            party: 'I', 
            state: 'VT',
            url: 'www.sanders.org',
            twitter_account: 'sanders',
            facebook_account: 'FBsanders',
            roles: [ { phone: '555-5555' } ] 
          }
        ]
      }

    mockCleanContact = {
      website: 'www.sanders.org',
      twitter: 'sanders',
      facebook: 'FBsanders',
      phone_number: '555-5555'
    }

    mockSenateHearings = {
      results: [
        {
          hearings: [
            {
              description: 'Hearing 1',
              url: 'hearing1.com',
              something: 'something else'
            }
          ]
        }
      ]
    }

    mockHouseHearings = {
      results: [
        {
          hearings: [
            {
              description: 'Hearing 2',
              url: 'hearing2.com',
              something: 'something else'
            }
          ]
        }
      ]
    }
  });

  describe('getSenate fetch', () => {

    it('should call fetch', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockCongress)
        })
      );

      await API.getSenate()
      expect(window.fetch).toHaveBeenCalled()
    });

    it('should clean fetched senator array', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockCongress)
        })
      );

      let cleanedSenate = await API.getSenate()
      expect(cleanedSenate).toEqual(cleanCongress)
    });
  });

  describe('getHouse fetch', () => {
    
    it('should call fetch', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockCongress)
        })
      );

      await API.getHouse()
      expect(window.fetch).toHaveBeenCalled()
    });

    it('should clean fetched house array', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockCongress)
        })
      );

      let cleanedHouse = await API.getHouse()
      expect(cleanedHouse).toEqual(cleanCongress)
    });
  });

  describe('getMemberContact fetch', () => {
    
    it('should call fetch', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockNewCongress)
        })
      );

      await API.getMemberContact()
      expect(window.fetch).toHaveBeenCalled()
    });

    it('should clean fetched contact info', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockNewCongress)
        })
      );

      let cleanedContact = await API.getMemberContact()
      expect(cleanedContact).toEqual(mockCleanContact)
    });
  });

  describe('fetchSenateHearings fetch', () => {

    it('should call fetch', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockSenateHearings)
        })
      );
      
      await API.fetchSenateHearings()
      expect(window.fetch).toHaveBeenCalled()
    });

    it('should clean fetched hearing info', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockSenateHearings)
        })
      );
      const mockCleanHearings = [{
        title: 'Hearing 1',
        url: 'none'
      }]

      let cleanedHearings = await API.fetchSenateHearings()
      expect(cleanedHearings).toEqual(mockCleanHearings)
    });
  });

  describe('fetchHouseHearings fetch', () => {

    it('should call fetch', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockHouseHearings)
        })
      );
      
      await API.fetchHouseHearings()
      expect(window.fetch).toHaveBeenCalled()
    });

    it('should clean fetched hearing info', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockHouseHearings)
        })
      );
      const mockCleanHearings = [{
        title: 'Hearing 2',
        url: 'hearing2.com'
      }]

      let cleanedHearings = await API.fetchHouseHearings()
      expect(cleanedHearings).toEqual(mockCleanHearings)
    });
  });
});