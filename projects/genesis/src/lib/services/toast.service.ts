import {
    Injectable
} from "@angular/core";
import {
    MatSnackBar, MatSnackBarConfig
} from "@angular/material";

import { MessageService } from "./public/message.service";

@Injectable({
    providedIn: 'root'
})
export class ToastService extends MessageService {

    /**
     *
     */
    constructor(private snackBarRef: MatSnackBar) {
        super();
    }

    protected show(param: {
        text: string, timeout: number; persit: boolean
    }): void {

        let conf = new MatSnackBarConfig();
        conf.duration = param.timeout;
        this.snackBarRef.open(param.text, null, conf);
    }

}