import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { SearchUserPage } from "./search-user";
import { ComponentsModule } from "../../components/component.module";

@NgModule({
  declarations: [SearchUserPage],
  imports: [IonicPageModule.forChild(SearchUserPage), ComponentsModule],
  exports: [SearchUserPage]
})
export class SearchUserPageModule {}
