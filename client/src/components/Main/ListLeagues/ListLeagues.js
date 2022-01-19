export default class Leagues {
  // фильтрация по ключу чтобы не совпадала с именем
  static filterKeys(keys) {
    return keys.filter((key) => key !== "Name");
  }
  //  получаем весь обьект массив из api тот который нам нужен
  static getLeagues(league) {
    let array = [];
    for (let i in league) {
      array.push(league[i]);
    }

    return array[2];
  }
  // возращаем количество данных
  static getCount(league) {
    try {
      for (let i in league) {
        return league.count;
      }
    } catch (err) {
      console.error(err);
    }
  }
  // получаем данные лиги т.е {имя}
  static getArea(league) {
    let array = [];
    let area = [];
    for (let i in league) {
      array.push(league[i]);
    }
    for (let i in array[2]) {
      area.push(array[2][i].area.name);
    }
    return area;
  }
  //------------------------Pages-----------------------------
  // Считываем пагинацию
  static pages(count, countCard) {
    return Math.ceil(count / countCard);
  }
}
