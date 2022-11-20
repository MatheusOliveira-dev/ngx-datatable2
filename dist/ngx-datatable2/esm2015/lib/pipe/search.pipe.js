/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DataShowingService } from '../services/data-showing.service';
export class SearchPipe {
    /**
     * @param {?} dataShowingService
     */
    constructor(dataShowingService) {
        this.dataShowingService = dataShowingService;
    }
    /**
     * @param {?} array
     * @param {?} searchText
     * @return {?}
     */
    transform(array, searchText) {
        if (typeof array === 'undefined') {
            return;
        }
        if (typeof searchText === 'undefined' || Object.keys(searchText).length === 0 || searchText === '') {
            this.dataShowingService.setSataShowingSubject({ len: array.length });
            return array;
        }
        /** @type {?} */
        const arr = array.filter((/**
         * @param {?} row
         * @return {?}
         */
        (row) => {
            /** @type {?} */
            const rowDetail = JSON.stringify(Object.values(row));
            return rowDetail.toLowerCase().indexOf(searchText.trim().toLowerCase()) > -1;
        }));
        this.dataShowingService.setSataShowingSubject({ len: arr.length });
        return arr;
    }
}
SearchPipe.decorators = [
    { type: Pipe, args: [{
                name: 'search',
            },] }
];
/** @nocollapse */
SearchPipe.ctorParameters = () => [
    { type: DataShowingService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchPipe.prototype.dataShowingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbWF0aGV1c2pvbGl2ZWlyYS9uZ3gtZGF0YXRhYmxlMi8iLCJzb3VyY2VzIjpbImxpYi9waXBlL3NlYXJjaC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU10RSxNQUFNLE9BQU8sVUFBVTs7OztJQUNuQixZQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUFJLENBQUM7Ozs7OztJQUUvRCxTQUFTLENBQUMsS0FBWSxFQUFFLFVBQWtCO1FBQ3RDLElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxFQUFFO1lBQzlCLE9BQU87U0FDVjtRQUNELElBQUksT0FBTyxVQUFVLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxVQUFVLEtBQUssRUFBRSxFQUFFO1lBQ2hHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUNwRSxPQUFPLEtBQUssQ0FBQztTQUNoQjs7Y0FDSyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFOztrQkFDdkIsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwRCxPQUFRLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEYsQ0FBQyxFQUFDO1FBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQzs7O1lBckJKLElBQUksU0FBQztnQkFDRixJQUFJLEVBQUUsUUFBUTthQUNqQjs7OztZQUpRLGtCQUFrQjs7Ozs7OztJQU9YLHdDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERhdGFTaG93aW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2RhdGEtc2hvd2luZy5zZXJ2aWNlJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdzZWFyY2gnLFxyXG59KVxyXG4gIFxyXG5leHBvcnQgY2xhc3MgU2VhcmNoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhU2hvd2luZ1NlcnZpY2U6IERhdGFTaG93aW5nU2VydmljZSkgeyB9XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybShhcnJheTogYW55W10sIHNlYXJjaFRleHQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhcnJheSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHNlYXJjaFRleHQgPT09ICd1bmRlZmluZWQnIHx8IE9iamVjdC5rZXlzKHNlYXJjaFRleHQpLmxlbmd0aCA9PT0gMCB8fCBzZWFyY2hUZXh0ID09PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTaG93aW5nU2VydmljZS5zZXRTYXRhU2hvd2luZ1N1YmplY3Qoe2xlbjogYXJyYXkubGVuZ3RoIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFyciA9IGFycmF5LmZpbHRlcigocm93KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd0RldGFpbCA9IEpTT04uc3RyaW5naWZ5KE9iamVjdC52YWx1ZXMocm93KSk7XHJcbiAgICAgICAgICAgIHJldHVybiAgcm93RGV0YWlsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXh0LnRyaW0oKS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YVNob3dpbmdTZXJ2aWNlLnNldFNhdGFTaG93aW5nU3ViamVjdCh7bGVuOiBhcnIubGVuZ3RofSk7XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxufSJdfQ==