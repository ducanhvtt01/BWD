const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const pages = ['index','skills','courses','children','donate','login','register'];
pages.forEach(p=>{
  app.get(p==='index'?'/':`/${p}`, (req,res)=> res.sendFile(path.join(__dirname,'views',`${p}.html`)));
});

app.listen(PORT, ()=> console.log(`🚀 SoftSkill4All running at http://localhost:${PORT}`));
