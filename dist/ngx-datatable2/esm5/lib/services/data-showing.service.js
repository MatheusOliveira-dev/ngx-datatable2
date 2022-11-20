/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var DataShowingService = /** @class */ (function () {
    function DataShowingService() {
        this.dataShowingSubject = new Subject();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    DataShowingService.prototype.setSataShowingSubject = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.dataShowingSubject.next(data);
    };
    DataShowingService.decorators = [
        { type: Injectable }
    ];
    return DataShowingService;
}());
export { DataShowingService };
if (false) {
    /** @type {?} */
    DataShowingService.prototype.dataShowingSubject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zaG93aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbWF0aGV1c2pvbGl2ZWlyYS9uZ3gtZGF0YXRhYmxlMi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kYXRhLXNob3dpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CO0lBQUE7UUFFSSx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO0lBUTVDLENBQUM7Ozs7O0lBTEcsa0RBQXFCOzs7O0lBQXJCLFVBQXNCLElBQUk7UUFDdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkFQSixVQUFVOztJQVVYLHlCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVFksa0JBQWtCOzs7SUFDM0IsZ0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbiBcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFTaG93aW5nU2VydmljZSB7XHJcbiAgICBkYXRhU2hvd2luZ1N1YmplY3QgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcblxyXG5cclxuICAgIHNldFNhdGFTaG93aW5nU3ViamVjdChkYXRhKSB7IFxyXG4gICAgICAgIHRoaXMuZGF0YVNob3dpbmdTdWJqZWN0Lm5leHQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=