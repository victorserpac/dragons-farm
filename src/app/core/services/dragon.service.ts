import { Injectable } from '@angular/core';
import axios from 'axios';

import { ApiDragonsList, NewDragon, Dragon } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DragonService {
  private url: string = 'https://dragons-api.herokuapp.com/api/dragons';

  public list(page: number = 0): Promise<ApiDragonsList> {
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

  public create(dragon: NewDragon): Promise<Dragon> {
    return axios.post(this.url, dragon).then(({ data }) => data);
  }

  public get(slug: string): Promise<Dragon> {
    return axios.get(`${this.url}/${slug}`).then(({ data }) => data);
  }

  public update(dragon: Dragon): Promise<any> {
    return axios.put(`${this.url}/${dragon.slug}`, dragon);
  }

  public delete(slug: string): Promise<any> {
    return axios.delete(`${this.url}/${slug}`);
  }
}
