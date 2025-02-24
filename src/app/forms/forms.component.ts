import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  onClick() {
    console.log(this.action());
  }

  arr : Array<string>= []
  user = {
    name: '',
    email: '',
    id: '',
  };
  constructor(private form: FormBuilder) {}
  @ViewChild('myForm') myForm!: NgForm;
  onSubmit(myForm: { value: any }) {
    if (this.myForm.valid) {
      this.myForm.reset();
    }
  }
  profileForm = this.form.group({
    fname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });
  ngOnInit() {}

  action() {
    return this.profileForm.controls;
  }
}
