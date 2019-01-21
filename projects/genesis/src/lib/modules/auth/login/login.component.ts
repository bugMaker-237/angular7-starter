import {
    Component,
    OnInit
} from '@angular/core';
import {
    AuthService
} from '../auth.service';
import {
    Router,
    NavigationExtras
} from '@angular/router';
import {
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import {
    ToastService
} from '../../../services';

@Component({
    selector: 'genesis-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public hide: boolean = true;

    public loginForm: FormGroup;
    public password: FormControl;
    public username: FormControl;

    public processing: boolean = false;

    constructor(private authService: AuthService, private router: Router, private toastService: ToastService) {

    }

    ngOnInit() {
        this.username = new FormControl({
            value: '',
            disabled: this.processing
        }, Validators.required);
        this.password = new FormControl({
            value: '',
            disabled: this.processing
        }, Validators.required);
        this.loginForm = new FormGroup({

            username: this.username,
            password: this.password,

        });
    }

    login() {
        if (this.loginForm.valid) {
            this.password.disable();
            this.username.disable();
            this.processing = true;
            this.authService.login(this.username.value, this.password.value).subscribe(() => {
                if (this.authService.isLoggedIn) {
                    console.log('connected');
                    let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '';

                    let navigationExtras: NavigationExtras = {
                        queryParamsHandling: 'preserve',
                        preserveFragment: true
                    };

                    // Redirect the user
                    this.router.navigate([redirect], navigationExtras);
                    // this.processing = false;
                } else {
                    //Todo
                    this.toastService.push({
                        text: 'Compte ou mot de passe incorrect!',
                        timeout: 1000,
                        persit: false
                    });
                    this.processing = false;
                }

            }, (error) => {
                this.toastService.push({
                    text: error.message,
                    timeout: 1000,
                    persit: false
                });
                this.processing = false;
            });
        }
    }
}