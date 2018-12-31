import { Dragon } from './dragon.model';

export interface ApiDragonsList {
  items: Array<Dragon>,
  _metadata: {
    page: number,
    page_count: number,
    per_page: number,
    total_count: number,
  }
}