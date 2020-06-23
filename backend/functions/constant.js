const functions = require('firebase-functions');
const firebase = require('firebase')
const serviceAccount=require('./taskforce-28c9c-firebase-adminsdk-n560k-81f892314b.json')
const admin=require('firebase-admin')
var firebaseConfig = {
    apiKey: "AIzaSyBqwERTzI8eTEfJk3Z_71AKEkY-K2vd8dU",
    authDomain: "taskforce-28c9c.firebaseapp.com",
    databaseURL: "https://taskforce-28c9c.firebaseio.com",
    projectId: "taskforce-28c9c",
    storageBucket: "taskforce-28c9c.appspot.com",
    messagingSenderId: "416925175728",
    appId: "1:416925175728:web:0cf948c8f71f3479a69075",
    measurementId: "G-TDDPWPFZF4"
}
admin.initializeApp(firebaseConfig)

 class FirebaseClass{
    constructor(){
        if(firebase.apps.length===0)
        firebase.initializeApp(firebaseConfig)
        this.auth=firebase.auth()
        this.db=firebase.firestore()
        this.trigger=functions.firestore;
        this.time_stamp=firebase.firestore.Timestamp
        this.admin_auth=admin.auth()
    }
    user_signup(username){
        return(
        username ?
        this.db.doc(`/user/${username}`)
        :
        this.db.collection('user')
        )
    }
    bug_reports(key){
        return(
        key ? 
        this.db.doc(`/bug_reports/${id}`)
        : 
        this.db.collection(`bug_reports`)
        )
    }
    comments(key){
        return(
        key ?
        this.db.doc(`/comments/${key}`)
        :
        this.db.doc(`/comments`) 
        )
    }
    likes(key){
        return(
        key ?
        this.db.doc(`/likes/${key}`)
        :
        this.db.doc(`/likes`)
        ) 
    }
    like_notification(){
        return this.trigger.document('likes/{id}')
    }
    comment_notification(){
        return this.trigger.document('comments/{id}')
    }
}
module.exports = FirebaseClass;