Template.inputForm.onCreated(function() {
  setHeader({title:"Creating...", isBackVisible:true});
})

Template.inputForm.events({
  "click .js-submit":function(){
    var text = $(".js-text").val();
    if(text.length > 0) {
      Goodness.insert({title: text, maxCount:0, date: new Date});
      Router.go("/");
    }
  }
})
