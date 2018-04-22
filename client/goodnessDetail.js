Template.goodnessDetail.helpers({
      getTitle:function(){
          var currentGoodness = Goodness.findOne(Router.current().params._id);
          if(currentGoodness){
            return currentGoodness.title;
          } else {
            return "Не известно";
          }
      },
      getCounters:function(){
      var values = [];
      var currentGoodness = Goodness.findOne(Router.current().params._id);
      if(!currentGoodness){
        return values;
      }
      var maxCount = currentGoodness.maxCount;
      var startDate = moment(currentGoodness.date);
      var endDate = moment();
      var daydiff = endDate.diff(startDate, 'days');
      // console.log();
      for(var i=0;i<=daydiff; i++){
        var currentDate = moment(currentGoodness.date).add(i,"days").startOf('day').toDate();
        var counterDocument = Counters.findOne({goodnessId:Router.current().params._id, date:currentDate});
        if(counterDocument) {

          values.unshift({counter:counterDocument.counter,value:100 - (counterDocument.counter / maxCount)*100,date:rinDate(currentDate)});
        } else {
          values.unshift( {counter:0,value:100,date:rinDate(currentDate)}) ;
        }
      }
      return values;
    }
});

Template.goodnessDetail.onCreated( function() {

  setHeader({title: "Statistics", isBackVisible: true, isTrashVisible: true});
})
