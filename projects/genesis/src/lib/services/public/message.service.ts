export abstract class MessageService {
    private messages: Array<{
        id: number,
        text: string,
        timeout: number,
        persit: boolean
    }> = new Array();
    private lastId: number = 0;
    private static started: boolean = false;
    private static timer: number = 0;
    private static interval: number = 400;

    constructor() {
        this.messageWorker();
    }

    public push(message: {
        text: string,
        timeout: number,
        persit: boolean
    }) {

        this.messages.push({
            text: message.text,
            persit: message.persit,
            timeout: message.timeout,
            id: this.lastId
        });
        this.lastId++;
    }



    public clear() {
        this.messages = [];
    }

    private messageWorker(): void {
        if (!MessageService.started) {
            MessageService.timer = window.setInterval(_ => {
                if (this.messages.length > 0) {
                    this.show(this.messages.pop());
                }
            }, MessageService.interval);
            MessageService.started = true;
        }

    }

    private static destroyWorker() {
        clearInterval(MessageService.timer);
    }

    protected abstract show(param: {
        text: string,
        timeout: number; persit: boolean
    }): void;
}