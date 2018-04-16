Template.goodnessDetail.helpers({
      getCounters:function(){
      var values = [];
      var maxCount = Goodness.findOne(Router.current().params._id).maxCount;
        Counters.find({goodnessId:Router.current().params._id},{sort:{date:-1}}).map(function(item){
        var counterDocument = item;
        if(counterDocument) {

          values.push({value:100 - (counterDocument.counter / maxCount)*100,date:moment(item.date).calendar()});
        } else {
          values.push( {value:100,date:moment(item.date).calendar()}) ;
        }
      });
      return values;
    }
})

Template.goodnessDetail.onCreated( function() {
  setHeader({title: "Statistics", isBackVisible: true});
})
