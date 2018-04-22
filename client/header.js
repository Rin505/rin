
Template.header.helpers({
  title: function() {
    return getHeader().title;
  },
  isBackVisible: function() {
    return getHeader().isBackVisible;
  },
  isTrashVisible: function() {
    if(getHeader().isTrashVisible){
        return true;
    }else{
      return false;
    }
  }
})
Template.header.events({
  "click .js-remove":function(){
      if(confirm("Really want to delete?")){
        Counters.remove({goodnessId:Router.current().params._id},function(){
          Goodness.remove(Router.current().params._id, function(){
            Router.go("/");});
          });
        }
      }
    })
