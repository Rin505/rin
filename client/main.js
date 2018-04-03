Goodness = new Ground.Collection('goodness', {connection:null});
Counters = new Ground.Collection('counters', {connection:null});

setHeader = function(header) {
  Session.set('headerData', header);
};
getHeader = function() {
  var blank = {title: 'Lol', isBackVisible: false};
  return Session.get('headerData') ? Session.get('headerData') : blank;
};

getCurrentDay = function(){
  return moment().startOf("day").toDate();
}

initDbData = function(){

  var goodnessArr=[
"Быть уверенным в себе",
"Быть сдержанным",
"Быть мудрым"];

  for(var i = 0; i < goodnessArr.length; i++) {
    var currentGoodnessId = Goodness.insert({title:goodnessArr[i], maxCount:6, date: moment().subtract(6,'days').startOf('day').toDate()});
    Counters.insert({date: moment().subtract(4,'days').startOf('day').toDate() , goodnessId:currentGoodnessId, counter:3});
    Counters.insert({date: moment().subtract(6,'days').startOf('day').toDate() , goodnessId:currentGoodnessId, counter:6});
    Counters.insert({date: moment().subtract(2,'days').startOf('day').toDate() , goodnessId:currentGoodnessId, counter:0});
  }
}
