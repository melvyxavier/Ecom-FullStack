import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EkartserviceService {

  uid: any = ""

  cartCount = new BehaviorSubject(0)

  login = new BehaviorSubject(false)

  baseUrl = "http://localhost:6565"

  constructor(private http: HttpClient) {
    this.cartUpdate()
    this.header()
  }

  header() {
    if (localStorage.getItem("user")) {
      this.login.next(true)
    }
  }

  cartUpdate() {

    if (localStorage.getItem("user")) {
      this.uid = localStorage.getItem("user")
      this.http.get(`${this.baseUrl}/cart-count/${this.uid}`).subscribe({
        next: (result: any) => {
          this.cartCount.next(result.message)
        }
      })
    }
  }



  //api adminligin
  adminLoginn(uname: any, psw: any) {
    const body = {
      uname, psw
    }
    return this.http.post(`${this.baseUrl}/admin/login`, body)
  }

  //addproduct
  addProduct(body: any) {
    return this.http.post(`${this.baseUrl}/admin/add-product`, body)
  }

  //to get all products
  getAllProducts() {
    return this.http.get(`${this.baseUrl}/products-access`)
  }

  //editproduct
  editProduct(id: any, bodyData: any) {
    return this.http.put(`${this.baseUrl}/product-update/${id}`, bodyData)
  }

  //api to get single product data
  getProduct(id: any) {
    return this.http.get(`${this.baseUrl}/one-product/${id}`)
  }

  //delete product
  deleteProduct(id: any) {
    return this.http.delete(`${this.baseUrl}/product-delete/${id}`)
  }

  //signupuser
  userSignup(email: any, psw: any) {
    const body = { email, psw }
    return this.http.post(`${this.baseUrl}/user-signup`, body)
  }

  //api userligin
  userLogin(email: any, psw: any) {
    const body = { email, psw }
    return this.http.post(`${this.baseUrl}/user-login`, body)
  }

  //addtocart
  addTocart(userId: any, pId: any) {
    const body = { userId, pId }
    return this.http.post(`${this.baseUrl}/addtocart`, body);
  }

  //cartProducts
  cartProducts(userId: any) {
    return this.http.get(`${this.baseUrl}/cart-items/${userId}`);
  }

  increment(pId: any) {
    return this.http.get(`${this.baseUrl}/increment/${pId}`)
  }

  decrement(pId: any) {
    return this.http.get(`${this.baseUrl}/decrement/${pId}`)
  }

  totalPrice(id: any) {
    return this.http.get(`${this.baseUrl}/totalprice/${id}`)
  }

  remove(id: any) {
    return this.http.delete(`${this.baseUrl}/removeitem/${id}`)
  }

  //addtowishlist
  addToWishlist(userId: any, pId: any) {
    const body = { userId, pId }
    return this.http.post(`${this.baseUrl}/addtowishlist`, body);
  }

  //wishlistProducts
  wishlistProducts(userId: any) {
    return this.http.get(`${this.baseUrl}/wishlist-items/${userId}`);
  }

  removeWishlist(id: any) {
    return this.http.delete(`${this.baseUrl}/remove-wishlist/${id}`)
  }

  //to get all users
  getAllUsers() {
    return this.http.get(`${this.baseUrl}/user-access`)
  }

  deleteUser(id: any) {
    return this.http.delete(`${this.baseUrl}/user-delete/${id}`)
  }


  
}
