import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './dashboard/store/Product'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StoreService {

	private getProductsUrl = 'http://localhost:3000/api/product/getProducts';
	private deleteProductsUrl = 'http://localhost:3000/api/product/deleteProduct/';
	private updateProductsUrl = 'http://localhost:3000/api/product/updateProduct/';
	private createProductsUrl = 'http://localhost:3000/api/product/createProduct';

	constructor(private http: HttpClient) { }

	getProducts(): Observable<any> {
		return this.http.get<any>(this.getProductsUrl);
	}

	deleteProduct(prod: Product): Observable<any> {
		var temp = this.deleteProductsUrl + prod._id;
		return this.http.delete<any>(temp);
	}
	updateProduct(prod: Product): Observable<any> {
		alert(prod.sellerName);
		var temp = this.updateProductsUrl + prod._id;
		return this.http.patch<any>(temp, prod, httpOptions);
	}

	createProduct(prod: Product): Observable<any> {
		alert(prod.name);
		prod.name = String(prod.name);
		prod.price = Number(prod.price);
		return this.http.post<any>(this.createProductsUrl, prod, httpOptions);
	}


}