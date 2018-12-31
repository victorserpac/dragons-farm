import { Injectable } from '@angular/core';
import axios from 'axios';

import { ApiDragonsList } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DragonService {
  private url: string = 'https://dragons-api.herokuapp.com/api/dragons';

  list(page: number = 0) {
    const config = {
      params: {
        page,
      },
    };

    return axios.get(this.url, config)
      .then(({ data }: { data: ApiDragonsList }) => {
        const { _metadata: { total_count, per_page, page } } = data;

        if (Math.floor(total_count / per_page) > page) {
          return this.list(page + 1)
            .then((response: ApiDragonsList) => ({
              items: [...data.items, ...response.items],
              _metadata: response._metadata,
            }));
        }

        return data;
      })
      .then((response: ApiDragonsList) => ({
        items: response.items.filter(item => !!item.slug),
        _metadata: response._metadata,
      }));
  }
}

10

59