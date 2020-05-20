import {
  describe, expect,
} from '@jest/globals';
import Character from '../app';

describe('Функция на удар', () => {
  test('Удар 20', () => {
    const received = new Character('Мечник', 'Swordsman');
    received.damage(20);
    expect(received)
      .toEqual({
        attack: 10,
        defence: 40,
        health: 8,
        name: 'Мечник',
        type: 'Swordsman',
      });
  });

  test('Здоровья изначально меньше 0', () => {
    const received = new Character('Мечник', 'Swordsman');
    received.health = -1;
    expect(() => { received.damage(50); })
      .toThrowError(new Error('Здоровья изначально меньше 0'));
  });
});
