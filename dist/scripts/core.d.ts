declare class Core {
    config($httpProvider: ng.IHttpProvider): void;
    run($rest: any): void;
}
export * from './core/ConfigService';
export * from './core/HttpInterceptor';
export * from './core/RestService';
export * from './core/SettingsService';
export * from './core/UtilsService';
export { Core };
declare var _default: string;
export default _default;
