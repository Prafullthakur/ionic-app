import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { List } from './list/list.page';
import { Menu } from './menu/menu.page';
import { InappPurchase } from './inapp-purchase/inapp-purchase.page';
import { HomePage } from './home/home.page';
import { Tabs } from './tabs/tabs.page';
import { LoginModal } from './login-modal/login-modal.page';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpModule } from '@angular/http';

import { IonicStorageModule } from '@ionic/storage';
import { Printer } from '@ionic-native/printer/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { Network } from '@ionic-native/network/ngx';
import { InAppPurchase } from '@ionic-native/in-app-purchase/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LocalService } from './local-service.service';
import { InappPurchaseService } from './inapp-purchase-service.service';
import { CloudService } from './cloud-service.service';

@NgModule({
  declarations: [
   AppComponent,
    // List,
    // Menu,
    // HomePage,
    // LoginModal,
    // InappPurchase,
    //Tabs
  ],
  entryComponents: [   //List,
  //   Menu,
  //   HomePage,
  //   LoginModal,
  //   InappPurchase,
  //   Tabs
],

  imports: [
    BrowserModule,
    HttpModule,
     IonicModule.forRoot(),
     //IonicStorageModule.forRoot(), 
     AppRoutingModule],
  providers: [
    // Printer,
    // InAppPurchase,
    // Network,
    // InAppBrowser,
    // Camera,
    // SocialSharing,
    // EmailComposer,
    StatusBar,
    // LocalService,
    // CloudService,
    // InappPurchaseService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
