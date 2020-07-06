import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { deburr } from 'lodash';

import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from 'src/app/global/comfirm-delete-dialog/confirm-delete-dialog.component';
import { UsersService } from 'src/app/services/users/users.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DialogComponent } from 'src/app/global/dialog/dialog.component';
import { TemoignageService } from 'src/app/services/temoignage/temoignage.service';
import { filter } from 'rxjs/operators';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.sass'],
})
export class BackOfficeComponent implements OnInit {
  userForm: FormGroup;
  isEditUser = false;
  selectedUser: any;
  rowsUserData: any;
  tempUser: any;

  temoignageForm: FormGroup;
  isEditTemoignage = false;
  editorData = '';
  selectedTemoignage: any;
  rowsTemoignageData: any;

  filters = {};
  filteredRows: any;

  dialog: MatDialogRef<DialogComponent>;
  dialogDeleteRef: MatDialogRef<ConfirmDeleteDialogComponent>;

  images = [];
  isEditProduct = false;
  productForm: FormGroup;
  selectedProduct: any;
  rowsProductData: any;

  constructor(
    private _authService: AuthService,
    private _dialog: MatDialog,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _userService: UsersService,
    private _temoignageService: TemoignageService,
    private _productService: ProduitService
  ) {}

  private refreshDataTable(): void {
    this._userService.getAll().subscribe(
      (users) => {
        this.rowsUserData = users;
        this.tempUser = users;
      },
      (err) => {
        console.log('Error while fetching users', err);
      }
    );

    this._temoignageService.getAll().subscribe(
      (posts: any) => {
        this.rowsTemoignageData = posts.filter((post: any) => {
          if (post.tags.includes('temoignage')) {
            return true;
          }
          return false;
        });
      },
      (err) => {
        console.log('An error occured while fetching Temoignage', err);
      }
    );

    this._productService.getAll().subscribe(
      (products) => {
        this.rowsProductData = products;
      },
      (err) => {
        console.log('Error while fetching products', err);
      }
    );
  }

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      email: ['', Validators.required],
      username: ['', [Validators.required]],
    });

    this.temoignageForm = this._formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });

    this.productForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      amount: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      file: ['', [Validators.required]],
      fileSource: ['', [Validators.required]],
    });

    this.refreshDataTable();
  }

  updateFilter(event: any, prop: string): void {
    const val = deburr(event.target.value.toLowerCase());
    this.filters[prop] = val;
    this.applyFilters();
  }

  applyFilters(): void {
    this.rowsUserData = this.tempUser.filter((d: any) => {
      return (
        Object.keys(this.filters).filter((p) => {
          return (
            deburr(d[p].toLowerCase()).indexOf(this.filters[p]) !== -1 ||
            !this.filters[p]
          );
        }).length === Object.keys(this.filters).length
      );
    });
  }

  dialogDelete(row: any): void {
    this.dialog = this._dialog.open(DialogComponent, {
      disableClose: true,
      autoFocus: true,
      data: {
        title: 'Supprimer un utilisateur',
        description: 'Voulez-vous supprimer ?',
      },
    });

    this.dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.deleteUser(row);
      }
    });
  }

  switchAdminRight(user: any): void {
    this._userService.toggleAdminRight(user).subscribe(
      () => {
        this.refreshDataTable();
      },
      (err) => {
        console.log('An error occured while trying to switch admin right', err);
      }
    );
  }

  switchUserVerified(user: any): void {
    this._userService.toggleVerified(user).subscribe(
      () => {
        this.refreshDataTable();
      },
      (err) => {
        console.log(
          'An error occured while trying to switch verified right',
          err
        );
      }
    );
  }

  deleteUser(row: any): void {
    this._userService.deleteUser(row.id).subscribe(
      (user) => {
        this.refreshDataTable();
      },
      (err) => {
        console.log(
          'An error occured while trying to switch verified right ',
          err
        );
      }
    );
  }

  selectUser(event: any): void {
    this.isEditUser = true;
    this.selectedUser = event.selected[0];
    this.userForm.patchValue({
      username: this.selectedUser.username,
      email: this.selectedUser.email,
    });
  }

  onSubmitUser(): void {
    if (this.isEditUser) {
      const user = {
        ...this.selectedUser,
        username: this.userForm.get('username').value,
        email: this.userForm.get('email').value,
      };
      this._userService.editUser(user).subscribe(
        () => {
          this.refreshDataTable();
        },
        (err) => {
          console.log('error', err);
        }
      );
    } else {
      this.dialog = this._dialog.open(DialogComponent, {
        disableClose: true,
        autoFocus: true,
        data: {
          title: 'Information création de compte',
          description: 'Le mot de passe associé au compte est "password"',
        },
      });

      const data = {
        email: this.userForm.get('email').value,
        username: this.userForm.get('username').value,
        password: 'password',
      };
      this._authService.createUser(data).subscribe(
        (user) => {
          if (user) {
            this.refreshDataTable();
          } else {
            console.error('An error occured while connecting to server');
          }
        },
        (err) => {
          console.log('error', err);
        }
      );
    }
  }

  prepareNewUser(): void {
    this.userForm.patchValue({
      username: '',
      email: '',
    });
    this.isEditUser = false;
  }

  prepareNewTemoignage(): void {
    this.temoignageForm.patchValue({
      title: '',
      content: '',
    });
    this.isEditTemoignage = false;
  }

  selectTemoignage(event: any): void {
    this.isEditTemoignage = true;
    this.selectedTemoignage = event.selected[0];
    this.temoignageForm.patchValue({
      title: this.selectedTemoignage.title,
      content: this.selectedTemoignage.content,
    });
  }

  onSubmitTemoignage(): void {
    if (this.isEditTemoignage) {
      const temoignage = {
        ...this.selectedTemoignage,
        content: this.temoignageForm.get('content').value,
        title: this.temoignageForm.get('title').value,
      };
      this._temoignageService.editTemoignage(temoignage).subscribe(
        () => {
          this.refreshDataTable();
        },
        (err) => {
          console.log('error', err);
        }
      );
    } else {
      const temoignage = {
        content: this.temoignageForm.get('content').value,
        title: this.temoignageForm.get('title').value,
      };
      this._temoignageService.addTemoignage(temoignage).subscribe(
        (data) => {
          this.refreshDataTable();
        },
        (err) => {
          console.log('error', err);
        }
      );
    }
  }

  deleteTemoignage(row: any): void {
    this.dialog = this._dialog.open(DialogComponent, {
      disableClose: true,
      autoFocus: true,
      data: {
        title: 'Supprimer un témoignage',
        description: 'Voulez-vous supprimer ?',
      },
    });

    this.dialog.afterClosed().subscribe((isSend) => {
      if (isSend) {
        this._temoignageService.deleteTemoignage(row.id).subscribe(
          () => {
            this.refreshDataTable();
          },
          (err) => {
            console.log(
              'An error occured while trying to delete temoignage',
              err
            );
          }
        );
      }
    });
  }

  prepareNewProduct(): void {
    this.productForm.patchValue({
      name: '',
      amount: 0,
      price: 0,
      description: '',
    });
    this.isEditProduct = false;
  }

  selectProduct(event: any): void {
    this.isEditProduct = true;
    this.selectedProduct = event.selected[0];
    this.productForm.patchValue({
      name: this.selectedProduct.name,
      amount: this.selectedProduct.amount,
      price: this.selectedProduct.price,
      description: this.selectedProduct.description,
    });
  }

  onSubmitProduct(): void {
    if (this.isEditProduct) {
      const product = {
        ...this.selectedProduct,
        name: this.productForm.get('name').value,
        amount: this.productForm.get('amount').value,
        price: this.productForm.get('price').value,
        description: this.productForm.get('description').value,
      };
      //   this._productService.editProduct(product).subscribe(
      this._productService.editProduct(product).subscribe(
        () => {
          this.refreshDataTable();
        },
        (err) => {
          console.log('error', err);
        }
      );
    } else {
      const product = {
        name: this.productForm.get('name').value,
        amount: this.productForm.get('amount').value,
        price: this.productForm.get('price').value,
        description: this.productForm.get('description').value,
      };
      this._productService.addProduct(product).subscribe(
        (data) => {
          this.refreshDataTable();
        },
        (err) => {
          console.log('error', err);
        }
      );
    }
  }

  deleteProduct(row: any): void {
    this.dialog = this._dialog.open(DialogComponent, {
      disableClose: true,
      autoFocus: true,
      data: {
        title: 'Supprimer un produit',
        description: 'Voulez-vous supprimer ?',
      },
    });

    this.dialog.afterClosed().subscribe((isSend) => {
      if (isSend) {
        this._productService.deleteProduct(row.id).subscribe(
          () => {
            this.refreshDataTable();
          },
          (err) => {
            console.log('An error occured while trying to delete Product', err);
          }
        );
      }
    });
  }

  get f() {
    return this.productForm.controls;
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          this.images.push(event.target.result);

          this.productForm.patchValue({
            fileSource: this.images,
          });
        };

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  submit() {
    console.log(this.productForm.value);
    //     this.http
    //       .post('http://localhost:8001/upload.php', this.productForm.value)
    //       .subscribe((res) => {
    //         console.log(res);
    //         alert('Uploaded Successfully.');
    //       });
  }
}
