import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { ChatPage } from '../pages/chat/chat';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireModule } from 'angularfire2';
import { Observable, of } from 'rxjs'
import { AngularFireStorageModule} from "angularfire2/storage";


var config = {
  apiKey: "AIzaSyD04uJ1BIV46hjrzW0T3pAhOkOjJY5eh3E",
  authDomain: "chatapplication-d4957.firebaseapp.com",
  databaseURL: "https://chatapplication-d4957.firebaseio.com",
  projectId: "chatapplication-d4957",
  storageBucket: "chatapplication-d4957.appspot.com",
  messagingSenderId: "1055943655382"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireStorageModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileChooser,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
