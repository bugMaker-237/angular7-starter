export interface IView {
    show(param: { text: String, timeout: number, persit: boolean }): boolean;

}