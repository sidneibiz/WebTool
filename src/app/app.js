/* global process */
import angular from 'angular';
import 'jquery';
import 'Tether';
import 'bootstrap/dist/js/bootstrap';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngTouch from 'angular-touch';
import ngBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import ngStorage from 'ngstorage'
import 'lodash';
import 'restangular';
import 'angular-bootstrap-grid-tree/src/tree-grid-directive';
import 'tree-model/dist/TreeModel';
import 'angular-strap/dist/angular-strap.min.js';
import 'angular-strap/dist/angular-strap.compat.min.js';
import 'angular-strap/dist/angular-strap.tpl.min.js';
import '../styles/now-kit/js/now-ui-kit';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import '../styles/now-kit/css/now-ui-kit.css';
import 'angular-bootstrap-grid-tree/src/treeGrid.css';

// confs
import config from 'app.config';
import appConfig from './app.config';
import appRoute from './app.route';

// pages
import appComponent from './app.component';
import loginController from './pages/login/login.controller';
import previewGeneratorController from './pages/preview-generator/preview-generator.controller';
import generatorController from './pages/generator/generator.controller';
import homeController from './pages/home/home.controller';

// components
import inputListController from './components/input-list/input-list.controller';

// services
import { GeneratorService } from './services/generator.service';
import { AuthService } from './services/auth.service';

export default angular.module('tree-view', [
  ngAnimate,
  ngAria,
  ngTouch,
  ngBootstrap,
  'ngStorage',
  'restangular',
  uiRouter,
  'treeGrid',
  'mgcrea.ngStrap'
])
  .config(appConfig)
  .config(appRoute)
  .constant('CONFIG', config)
  .constant('ENVIRONNEMENT', process.env.ENV_NAME)
  .component('app', appComponent)
  .component('login', loginController)
  .component('previewGenerator', previewGeneratorController)
  .component('generator', generatorController)
  .component('home', homeController)
  .component('inputList', inputListController)
  .service('generatorService', GeneratorService)
  .service('authService', AuthService)
  .name;
