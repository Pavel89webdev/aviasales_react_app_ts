import { ISearchResult } from '../../interfaces';

const API_BASE = 'https://front-test.beta.aviasales.ru';

let searchId: null | string = null;

class SearchService {
  static async getResoure(queryString: string): Promise<any> {
    const url = `${API_BASE}${queryString}`;
    try {
      const response = await fetch(url);
      
      if (response.status >= 400 && response.status < 500) {
        throw new Error(`${response.status}`);
      }
      if (response.status === 500) {
        return SearchService.getResoure(queryString);
      }
      const result = await response.json();
      return result;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('some was going wrong, error:', e);
      throw new Error(e.message);
    }
  }

  static async getSearchId(): Promise<void> {
    const result = await this.getResoure('/search');
    searchId = result.searchId;
  }

  static async getSearchResult(): Promise<ISearchResult> {
    if (searchId) {
      const url = `/tickets?searchId=${searchId}`;
      const result = await this.getResoure(url);
      return result;
    }
    await this.getSearchId();
    return this.getSearchResult();
  }
}

export default SearchService;
