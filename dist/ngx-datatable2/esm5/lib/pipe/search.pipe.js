/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DataShowingService } from '../services/data-showing.service';
var SearchPipe = /** @class */ (function () {
    function SearchPipe(dataShowingService) {
        this.dataShowingService = dataShowingService;
    }
    /**
     * @param {?} array
     * @param {?} searchText
     * @return {?}
     */
    SearchPipe.prototype.transform = /**
     * @param {?} array
     * @param {?} searchText
     * @return {?}
     */
    function (array, searchText) {
        if (typeof array === 'undefined') {
            return;
        }
        if (typeof searchText === 'undefined' || Object.keys(searchText).length === 0 || searchText === '') {
            this.dataShowingService.setSataShowingSubject({ len: array.length });
            return array;
        }
        /** @type {?} */
        var arr = array.filter((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            /** @type {?} */
            var rowDetail = JSON.stringify(Object.values(row));
            return rowDetail.toLowerCase().indexOf(searchText.trim().toLowerCase()) > -1;
        }));
        this.dataShowingService.setSataShowingSubject({ len: arr.length });
        return arr;
    };
    SearchPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'search',
                },] }
    ];
    /** @nocollapse */
    SearchPipe.ctorParameters = function () { return [
        { type: DataShowingService }
    ]; };
    return SearchPipe;
}());
export { SearchPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchPipe.prototype.dataShowingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbWF0aGV1c2pvbGl2ZWlyYS9uZ3gtZGF0YXRhYmxlMi8iLCJzb3VyY2VzIjpbImxpYi9waXBlL3NlYXJjaC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV0RTtJQUtJLG9CQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUFJLENBQUM7Ozs7OztJQUUvRCw4QkFBUzs7Ozs7SUFBVCxVQUFVLEtBQVksRUFBRSxVQUFrQjtRQUN0QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtZQUM5QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLE9BQU8sVUFBVSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksVUFBVSxLQUFLLEVBQUUsRUFBRTtZQUNoRyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDcEUsT0FBTyxLQUFLLENBQUM7U0FDaEI7O1lBQ0ssR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxHQUFHOztnQkFDbkIsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwRCxPQUFRLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEYsQ0FBQyxFQUFDO1FBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBckJKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsUUFBUTtpQkFDakI7Ozs7Z0JBSlEsa0JBQWtCOztJQXdCM0IsaUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWxCWSxVQUFVOzs7Ozs7SUFDUCx3Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRhU2hvd2luZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kYXRhLXNob3dpbmcuc2VydmljZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnc2VhcmNoJyxcclxufSlcclxuICBcclxuZXhwb3J0IGNsYXNzIFNlYXJjaFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YVNob3dpbmdTZXJ2aWNlOiBEYXRhU2hvd2luZ1NlcnZpY2UpIHsgfVxyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm0oYXJyYXk6IGFueVtdLCBzZWFyY2hUZXh0OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYXJyYXkgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZWFyY2hUZXh0ID09PSAndW5kZWZpbmVkJyB8fCBPYmplY3Qua2V5cyhzZWFyY2hUZXh0KS5sZW5ndGggPT09IDAgfHwgc2VhcmNoVGV4dCA9PT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU2hvd2luZ1NlcnZpY2Uuc2V0U2F0YVNob3dpbmdTdWJqZWN0KHtsZW46IGFycmF5Lmxlbmd0aCB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhcnIgPSBhcnJheS5maWx0ZXIoKHJvdykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByb3dEZXRhaWwgPSBKU09OLnN0cmluZ2lmeShPYmplY3QudmFsdWVzKHJvdykpO1xyXG4gICAgICAgICAgICByZXR1cm4gIHJvd0RldGFpbC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGV4dC50cmltKCkudG9Mb3dlckNhc2UoKSkgPiAtMTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRhdGFTaG93aW5nU2VydmljZS5zZXRTYXRhU2hvd2luZ1N1YmplY3Qoe2xlbjogYXJyLmxlbmd0aH0pO1xyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcbn0iXX0=