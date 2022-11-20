/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class DataShowingService {
    constructor() {
        this.dataShowingSubject = new Subject();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    setSataShowingSubject(data) {
        this.dataShowingSubject.next(data);
    }
}
DataShowingService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    DataShowingService.prototype.dataShowingSubject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zaG93aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbWF0aGV1c2pvbGl2ZWlyYS9uZ3gtZGF0YXRhYmxlMi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kYXRhLXNob3dpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSS9CLE1BQU0sT0FBTyxrQkFBa0I7SUFEL0I7UUFFSSx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO0lBUTVDLENBQUM7Ozs7O0lBTEcscUJBQXFCLENBQUMsSUFBSTtRQUN0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQVBKLFVBQVU7Ozs7SUFFUCxnREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuIFxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YVNob3dpbmdTZXJ2aWNlIHtcclxuICAgIGRhdGFTaG93aW5nU3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcblxyXG4gICAgc2V0U2F0YVNob3dpbmdTdWJqZWN0KGRhdGEpIHsgXHJcbiAgICAgICAgdGhpcy5kYXRhU2hvd2luZ1N1YmplY3QubmV4dChkYXRhKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==