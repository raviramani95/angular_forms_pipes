import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') submitForm: NgForm;
  submitted = false;
  genders = ['male','female'];
  answer: string = '';
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.submitForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.submitForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
  onSubmit(){
    console.log(this.submitForm);
    this.submitted = true;
    this.user.username = this.submitForm.value.userData.username;
    this.user.email = this.submitForm.value.userData.email;
    this.user.secretQuestion = this.submitForm.value.userData.secretQuestion;
    this.user.answer = this.submitForm.value.userData.questionAnswer;
    this.user.gender = this.submitForm.value.userData.gender;

    this.submitForm.reset();
  }
}
