<template>
  <div>
    <h2>{{ titleData }}</h2>
    <h6>Review from another user</h6>
    <ul>
      <li v-for="item in Commented">


        <section class="comments">
          <div class="comment-contents">
            <a class="comment-author" title="Comment Author"><h2>{{ item.email }}</h2></a>
            <p>{{ item.comment}}</p>
          </div>
        </section>
      </li>
    </ul>
    <el-form :inline="true" :model="form" class="form-chat">
      <el-form-item>
        <el-input v-model="email" placeholder="Nama anda"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="comment" placeholder="Pendapat anda"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addComments">Kirim</el-button>
      </el-form-item>
      </el-form>
  </div>
</template>

<script>
import Firebase from 'firebase'


var config = {
  apiKey: "AIzaSyDgYJodbtY9KR4dRIouspsxU1yxXNPt_-0",
  authDomain: "simple-storage-211d0.firebaseapp.com",
  databaseURL: "https://simple-storage-211d0.firebaseio.com",
  projectId: "simple-storage-211d0",
  storageBucket: "simple-storage-211d0.appspot.com",
  messagingSenderId: "857363825383"
};
var firebaseApp = Firebase.initializeApp(config),
    db = firebaseApp.database()

export default {
  props: ['title'],
  data() {
    return {
      titleData: this.title,
      comment : '',
      email : '',
      Commented : []
    }
  },
  firebase : {
    items: db.ref('movies')
  },
  methods: {
      capitalizeLetter() {
        console.log(this.title);
        this.titleData = this.titleData.split('-').join(' ')
      },
      addComments(){
        console.log(this.comment,this.email);
        var self = this
        console.log(this.$firebaseRefs.items);
        db.ref('movies').child(this.titleData).child(self.email).set({
            comment: "Lee"
        });
      },
      getComments(){
        var self = this
        db.ref('movies').child(this.titleData).on('value', function(snapshot){
            console.log(snapshot);
            self.Commented = []
            snapshot.forEach(comment => {
              console.log(comment.key);
              console.log(comment.val().comment);
              self.Commented.push({email : comment.key.trim(), comment : comment.val().comment})
            })
        })
      }
  },
  mounted() {
    this.capitalizeLetter()
    this.getComments()
  }
}
</script>

<style scoped>
.cf:before,
.cf:after {
  content: " "; /* 1 */
  display: table; /* 2 */
}
.cf:after {
  clear: both;
}
.cf {
  *zoom: 1;
}

/* styles */
body { background: #feedd2;
font: 15px/1.7em "open sans", Arial, sams-serif;
}

section.comments {
width: 600px;
margin: 100px auto 0 auto;
}

section.comments .thumbnail {
width: 70px;
float: left;
}

section.comments .thumbnail img {
top: 50%;
width: 70px;
box-shadow: 0 0 5px rgba(0,0,0,.6);
}

section.comments .comment-contents {
position: relative;
background: white;
color: #b69696;
padding: 15px;
padding-bottom: 10px;
border-radius: 4px;
box-shadow: 0 2px 2px rgba(0,0,0,.3);
float: right;
width: 470px;
}

section.comments .comment-contents:before,
section.comments .comment-contents:after
{
position: absolute;
width: 0; height: 0; top: 30px;
left: -20px;
content: '';
border: 10px solid transparent;
border-right-color: white;
}

section.comments .comment-contents:after {
top: 31px;
border-right-color: #ccc;
z-index: -1;
}

section.comments .comment-contents .comment-author h2 {
margin: 0;
margin-top: 5px;
font: normal 25px/1em "droid serif", serif;
}

section.comments .comment-contents p {
text-shadow: 0 2px 2px rgba(0,0,0,.2);
}

section.comments .comment-contents a.comment-author,
section.comments .comment-contents a {
color: #846d6d;
text-decoration: none;
transition: color .3s ease-in-out;
}

section.comments .comment-contents a.comment-author:hover,
section.comments .comment-contents p a:hover {
color: #222;
text-decoration: underline;
}

section.comments .comment-infos .comment-date {
width: 200px;
float: left;
color: #aeadad;
}

section.comments .comment-infos .comment-date .likes-counter {
margin-left: 10px;
}

section.comments .comment-infos .comment-reply {
text-align: right;
}

section.comments .comment-infos .comment-reply a,
section.comments .comment-infos .comment-date .likes-counter a
{
color: #71c6ee;
text-decoration: none;
transition: color .3s ease-in-out;
}

section.comments .comment-infos .comment-reply a:hover,
section.comments .comment-infos .comment-date .likes-counter a:hover {
color: #4587a5;
}
</style>
