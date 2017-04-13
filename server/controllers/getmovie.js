let axios = require('axios');
const imdb = require('imdb-api');
var YouTube = require('youtube-node');


module.exports={
  getscedule:function(req,res){
    let cityid=  req.body.cityid||10;
    axios.get(`http://ibacor.com/api/jadwal-bioskop?id=${req.body.cityid}&k=e0eddc52ed696683b57dec6af7f4716d`)
      .then(function (response) {
        let datas=response.data.data
        let ndata='';
       let promises=[]
        datas.forEach(function(data){
          promises.push(
            new Promise(function(resolve,rej){
              getyoutubeid(data.movie).then(function(id){
                   ndata=data;
                   ndata['youTubeId']=id;
                   resolve(ndata);
              })
            })
          )
        })
         Promise.all(promises).then(function(data){
           res.send(data);
         })
      })
      .catch(function (error) {
      res.send(error)
      });
  }
}

function getyoutubeid(movietittle){
 var youTube = new YouTube();
 return new Promise(function(res,rej){
   youTube.setKey('AIzaSyAcWB_ZLzP_j9xEYT2ilxQI8pPgq2kXrRI');
   youTube.search(movietittle, 1, function(error, result) {
     if (error) {
       rej(err)
     }
     else {
       res(result.items[0].id.videoId);
     }
   });
 })
}
