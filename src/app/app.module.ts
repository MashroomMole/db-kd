import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './shell/header/header.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HomeComponentModule} from './home/home.component.module';
import {CommonModule, DatePipe} from '@angular/common';
import {RouterParamSerializer} from './store/router/router';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {reducers} from './store/reducers';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RequestService} from './shared/services/request-service';
import {AppRoutingModule} from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {DialogService} from './shared/services/dialog-service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers),
        StoreRouterConnectingModule.forRoot({
            serializer: RouterParamSerializer,
        }),
        EffectsModule.forRoot([]),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        HomeComponentModule,
        MatToolbarModule,
        MatButtonModule,
    ],
    providers: [
        RequestService,
        DialogService,
        DatePipe
    ],
  exports: [
    HeaderComponent,
  ],
    bootstrap: [AppComponent]
})
export class AppModule {}
