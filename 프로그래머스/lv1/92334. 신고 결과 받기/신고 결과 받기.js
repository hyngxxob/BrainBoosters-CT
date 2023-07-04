function solution(id_list, report, k) {
  var er = [];
  var ee = [];

  var list = {};
  report.forEach((el) => {
    var [reporter, reported] = el.split(" ");
    er.push(reporter);
    ee.push(reported);
  });

  id_list.forEach((el) => {
    list[el] = { er: [], warning: 0 };
  });

  ee.forEach((el, index) => {
    if (!list[el].er.includes(er[index])) {
      list[el].er.push(er[index]);
      list[el].warning++;
    }
  });

  var result = {};
  for (var key in list) {
    if (list[key].warning >= k) {
      result[key] = list[key].er;
    }
  }

  var mail = [];
  for (var key in result) {
    result[key].forEach((element) => {
      mail.push(element);
    });
  }

  var answer = [];
  id_list.forEach((el) => {
    var count = mail.filter((n) => n === el).length;
    answer.push(count);
  });

  return answer;
}