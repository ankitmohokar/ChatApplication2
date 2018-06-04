import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirebaseListObservable} from "angularfire2/database-deprecated";
import { Observable, of } from 'rxjs'
import { FileChooser} from "@ionic-native/file-chooser";
import { File } from '@ionic-native/file';
import  firebase  from "firebase";

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  username: string = '';
  message: string = '';
  subs;
  messages: object[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, private fileChooser: FileChooser, private file: File) {
   // console.log(this.navParams);
   // db.list<Item>('items').valueChanges().subscribe(console.log);
    this.username = this.navParams.get('username');
    this.subs =    this.db.list('/chat').valueChanges().subscribe(data => {
     /* console.log
      data.map( elem => {

      this.messages.push(elem);

    })*/
     this.messages = data;
      // console.log(data);
    });
    console.log(this.subs);

   // /* console.log(this.db.collection('chat').valueChanges().subscribe(data => {
   //    console.log(data)
   //
   //  }))*/
    console.log(this.username);
  }



  sendMessgeButton(){

    this.db.list('/chat').push({
      username: this.username,
      message: this.message
    }).then( () => {
      // message is sent
    })

    this.message = '';

  }
  ionViewDidLoad() {





    /*
        this.db.list('/chat').valueChanges().subscribe(data => {
          console.log(data);
        });﻿
    ---
        this.db.collection('chats').add({
          username: this.username,
          message: this.message
        });
    */

    console.log('ionViewDidLoad ChatPage');


  }

  chooseFile(){
    this.fileChooser.open().then((uri) =>{
      alert(uri);

      this.file.resolveLocalFilesystemUrl(uri).then((newUrl) =>{
        alert(JSON.stringify(newUrl));
        let dirPath = newUrl.nativeURL;
        let dirPathSeg = dirPath.split('/')
        dirPathSeg.pop()
        dirPath = dirPathSeg.join('/')
          this.file.readAsArrayBuffer(dirPath, newUrl.name).then(async(buffer) =>{
            await this.upload(buffer, newUrl.name);

          })
      })
    })

  }
  async upload(buffer, name){
    let blob = new Blob([buffer], { type: "image/jpeg"});
    let storage = firebase.storage();

    storage.ref('images/'+name).put(blob).then((d) =>{
      alert("done");
    }).catch((error) => {
      alert(JSON.stringify(error))
    })
  }



}
