import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminuserMngComponent } from './adminuser-mng/adminuser-mng.component';
import { AdminproductMngComponent } from './adminproduct-mng/adminproduct-mng.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SingleviewComponent } from './singleview/singleview.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { MycartComponent } from './mycart/mycart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "admin-login", component: AdminloginComponent },
  { path: "admin-home", component: AdminhomeComponent },
  { path: "admin-usermng", component: AdminuserMngComponent },
  { path: "admin-productmng", component: AdminproductMngComponent },
  { path: "admin-addproduct", component: AddProductComponent },
  { path: "admin-editproduct/:id", component: EditProductComponent },
  { path: "product-view/:id", component: SingleviewComponent },
  { path: "user-login", component: UserloginComponent },
  { path: "user-signup", component: UsersignupComponent },
  { path: "mycart/:id", component: MycartComponent },
  { path: "wishlist/:id", component: WishlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
