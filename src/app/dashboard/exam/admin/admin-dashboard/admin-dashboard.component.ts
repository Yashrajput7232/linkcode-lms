
import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHome , faContactCard,faCircleUser,faPlus,faEye} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent  {

  home=faHome;
  contact=faContactCard;
  profile=faCircleUser;
  add_category=faPlus;
  view_Category=faEye;
 selectedMenu:any='Home';

 constructor(private library:FaIconLibrary){
  library.addIcons(faHome);
 }
goTo(paramText:string){
 this.selectedMenu=paramText
}
}