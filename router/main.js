module.exports = function(app){
   /* 이벤트  */
   app.get('/',function(req,res){
      res.render('index.html')
   });
}