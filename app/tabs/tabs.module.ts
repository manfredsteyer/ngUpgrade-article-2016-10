import * as angular from 'angular';
import {tabComponentDesc} from "./tabs.component";
import {tabsComponentDesc} from "./tabs.component";

// Import upgradeAdapter ?
import {upgradeAdapter} from "../app.module";
import {MigratedTabComponent, MigratedTabsComponent} from "./migrated-tabs.component";

var tabs = angular.module('tabs', []);

// Remove registrations
// tabs.component('tab', tabComponentDesc);
// tabs.component('tabs', tabsComponentDesc);





export default tabs.name;