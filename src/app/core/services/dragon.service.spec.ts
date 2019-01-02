import { TestBed } from '@angular/core/testing';
import axios from 'axios';

import { DragonService } from './dragon.service';
import { NewDragon, Dragon } from '../models';

describe('DragonService', () => {
  let service: DragonService;
  const url = 'https://dragons-api.herokuapp.com/api/dragons';

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DragonService] })

    service = TestBed.get(DragonService);
  });

  describe('initial service state', () => {
    it('should be created', () => {
      expect(service).toBeDefined();
    });

    it('should define public isAuthenticated()', () => {
      expect(service.list).toEqual(jasmine.any(Function));
    });

    it('should define public create()', () => {
      expect(service.create).toEqual(jasmine.any(Function));
    });

    it('should define public get()', () => {
      expect(service.get).toEqual(jasmine.any(Function));
    });

    it('should define public update()', () => {
      expect(service.update).toEqual(jasmine.any(Function));
    });

    it('should define public delete()', () => {
      expect(service.delete).toEqual(jasmine.any(Function));
    });
  });

  describe('create()', () => {
    it('should post dragon', () => {
      const spy = spyOn(axios, 'post').and.returnValue(Promise.resolve(''));
      const dragon: NewDragon = {
        name: 'foobar',
        type: 'foobar',
      };

      service.create(dragon);

      expect(spy).toHaveBeenCalledWith(url, dragon);
    });
  });

  describe('get()', () => {
    it('should get dragon', () => {
      const spy = spyOn(axios, 'get').and.returnValue(Promise.resolve(''));
      const slug: string = 'foobar';

      service.get(slug);

      expect(spy).toHaveBeenCalledWith(`${url}/${slug}`);
    });
  });

  describe('update()', () => {
    it('should put dragon', () => {
      const spy = spyOn(axios, 'put').and.returnValue(Promise.resolve(''));
      const dragon: Dragon = {
        _id: '123321',
        name: 'foobar',
        type: 'foobar',
        created_at: '2018-12-31',
        slug: 'foobar',
        histories: [],
      };

      service.update(dragon);

      expect(spy).toHaveBeenCalledWith(`${url}/${dragon.slug}`, dragon);
    });
  });

  describe('delete()', () => {
    it('should delete dragon', () => {
      const spy = spyOn(axios, 'delete').and.returnValue(Promise.resolve(''));
      const slug: string = 'foobar';

      service.delete(slug);

      expect(spy).toHaveBeenCalledWith(`${url}/${slug}`);
    });
  });
});
