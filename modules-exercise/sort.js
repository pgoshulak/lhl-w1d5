var sortModule = {};

var list = []

var sortList = (list) => {
  return list.sort((a, b) => {
    return a - b;
  })
}

sortModule.saveNumber = (num) => {
  list.push(num);
}

sortModule.getSortedList = () => {
  return sortList(list);
}

module.exports = sortModule;