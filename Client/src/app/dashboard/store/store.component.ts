import { Component , OnInit } from '@angular/core';
import { StoreService } from '../../store.service';
import { Product } from './Product';

@Component({
  selector: 'app-dashboard-items',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit{

	data: Product[];
	p: Product[];

	settings = {
		columns: {
			Name: {
				title: 'Product',
				type: 'string',
				editable: true
			},
			Price: {
				title: 'Price',
				type: 'number'
			},
			seller: {
				title: 'Seller',
				type: 'string'
			},
			Created: {
				title: 'createdAt',
				type: Date,
				editable: false
			},
			updated: {
				title: 'updatedAt',
				type: Date,
				editable: false
				
			}
		},
		delete: {
			confirmDelete: true
		},
		create: {
			confirmCreate: true
		},
		edit: {
			confirmSave: true
		}
		};
	constructor(private StoreService : StoreService) {

	}

	ngOnInit() {
		this.getProducts()
	}

	getProducts(): void {
		this.StoreService.getProducts().subscribe(products => this.data = products.data);
	}
	updateProduct(event): void {
		this.StoreService.updateProduct(event.newData).subscribe(function(res) {
			if (res.err == null) {
				event.confirm.resolve();
			}
			else {
				event.confirm.reject();
			}
		});
		this.getProducts();
	}

	deleteProduct(event): void {
		this.StoreService.deleteProduct(event.data).subscribe(function(res){
			if(res.err == null){
				event.confirm.resolve();
			}
			else{
				event.confirm.reject();
			}
		});

	}
	createProduct(event): void {
		this.StoreService.createProduct(event.newData).subscribe(function(res) {
			if (res.err == null) {
				event.confirm.resolve();
			}
			else {
				event.confirm.reject();
			}
			this.getProducts();
		});

	}
}