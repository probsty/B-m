import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { deburr } from 'lodash';

import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from 'src/app/global/comfirm-delete-dialog/confirm-delete-dialog.component';
import { UsersService } from 'src/app/services/users/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DialogComponent } from 'src/app/global/dialog/dialog.component';

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
  filters = {};
  filteredRows: any;

  tempUser: any;
  editorData = 'dsdsds';

  dialog: MatDialogRef<DialogComponent>;

  dialogDeleteRef: MatDialogRef<ConfirmDeleteDialogComponent>;

  constructor(
    private _authService: AuthService,
    private _dialog: MatDialog,
    private _router: Router,
    private _userService: UsersService,
    private _formBuilder: FormBuilder
  ) {}

  private refreshDataTable(): void {
    console.log('didClick or has been affected by refresh table');

    this._userService.getAll().subscribe(
      (users) => {
        console.log('users', users);
        this.rowsUserData = users;
        this.tempUser = users;
      },
      (err) => {
        console.log('Error while fetching users');
      }
    );
  }

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      email: ['', Validators.required],
      username: ['', [Validators.required]],
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
    this.dialogDeleteRef = this._dialog.open(ConfirmDeleteDialogComponent, {
      disableClose: true,
    });

    this.dialogDeleteRef.afterClosed().subscribe((data) => {
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
    console.log('Row deleted');
    // call service
    this._userService.deleteUser(row.id).subscribe(
      (user) => {
        this.refreshDataTable();
      },
      (err) => {
        console.log('An error occured while trying to switch verified right ', err);
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
}
