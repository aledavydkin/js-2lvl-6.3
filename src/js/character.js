/**
 * Считает солько было урона
 *
 * @param {name} first - Имя персонажа
 * @param {type} second - Тип персонажа
 */

export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 20;
  this.attack = 10;
  this.defence = 40;
}

Character.prototype.damage = function (points) {
  if (this.health >= 0) {
    this.health -= points * (1 - this.defence / 100);
  } else {
    throw new Error('Здоровья изначально меньше 0');
  }
};
