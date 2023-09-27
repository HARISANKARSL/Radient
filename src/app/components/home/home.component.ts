import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( private fb:FormBuilder,private toast:ToastrService){}
  form:FormGroup=this.fb.group({

    first_name: "",
    last_name:"",
    to_name: "Thinkall",
    from_email: "",
    phone: "",
    message: "",
    });
    
    async sendEmail() {
      
      emailjs.init('mkuE89lpGiYd6NGIe')
      let response= await emailjs.send("service_etqn99l","template_btstt83",{
      first_name: this.form.value.first_name,
     last_name: this.form.value.last_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      phone: this.form.value.phone,
      message: this.form.value.message,
      });
     this.toast.success("asdsd")
      this.form.reset()
    }
  
}
