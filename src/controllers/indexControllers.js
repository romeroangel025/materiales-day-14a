module.exports = {  
    index : (req,res)=>{
      return res.render('index');
    }, not_Entry: (req, res) => {
      return res.render("not_Entry");
    },
    admin : (req,res)=>{
      return res.render('admin',{
        user : req.query.user
      })
    }

}