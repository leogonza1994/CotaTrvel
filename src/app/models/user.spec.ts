import { User } from './user';
import {Reservas} from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
});

describe('Reservas', () => {
  it('should create an instance', () => {
    expect(new Reservas()).toBeTruthy();
  });
});
