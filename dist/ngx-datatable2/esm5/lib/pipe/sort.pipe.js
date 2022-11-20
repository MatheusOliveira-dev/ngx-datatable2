/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    /**
     * @param {?} array
     * @param {?} filter
     * @return {?}
     */
    SortPipe.prototype.transform = /**
     * @param {?} array
     * @param {?} filter
     * @return {?}
     */
    function (array, filter) {
        var _this = this;
        // console.log("sort pipe" + JSON.stringify(filter));
        // console.log(array);
        if (!filter.key || filter.key === '') {
            return array;
        }
        if (filter.order === '') {
            return array;
        }
        if (filter.order === 'asc') {
            return array.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return _this.compare(a, b, filter.key); }));
        }
        else {
            return array.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return _this.compare(b, a, filter.key); }));
        }
    };
    /**
     * @private
     * @param {?} a
     * @param {?} b
     * @param {?} key
     * @return {?}
     */
    SortPipe.prototype.compare = /**
     * @private
     * @param {?} a
     * @param {?} b
     * @param {?} key
     * @return {?}
     */
    function (a, b, key) {
        //return ('' + a[key]).localeCompare(b[key]);
        //console.log(this.isNaN(a, b));
        if (this.isNaN(a[key], b[key])) {
            return ('' + a[key]).localeCompare(b[key]);
        }
        else {
            if (parseFloat(a[key]) < parseFloat(b[key])) {
                return -1;
            }
            if (parseFloat(a[key]) > parseFloat(b[key])) {
                return 1;
            }
        }
        return 0;
    };
    /**
     * @private
     * @param {?} aV
     * @param {?} bV
     * @return {?}
     */
    SortPipe.prototype.isNaN = /**
     * @private
     * @param {?} aV
     * @param {?} bV
     * @return {?}
     */
    function (aV, bV) {
        return (isNaN(parseFloat(aV)) || !isFinite(aV)) || (isNaN(parseFloat(bV)) || !isFinite(bV));
    };
    SortPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'sort',
                    pure: true //default pure = true
                },] }
    ];
    return SortPipe;
}());
export { SortPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1hdGhldXNqb2xpdmVpcmEvbmd4LWRhdGF0YWJsZTIvIiwic291cmNlcyI6WyJsaWIvcGlwZS9zb3J0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUEwQ0EsQ0FBQzs7Ozs7O0lBbkNHLDRCQUFTOzs7OztJQUFULFVBQVUsS0FBWSxFQUFFLE1BQXNDO1FBQTlELGlCQWVDO1FBZEcscURBQXFEO1FBQ3JELHNCQUFzQjtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUNsQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDckIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFO1lBQ3hCLE9BQU8sS0FBSyxDQUFDLElBQUk7Ozs7O1lBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBOUIsQ0FBOEIsRUFBQyxDQUFDO1NBQy9EO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQyxJQUFJOzs7OztZQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQTlCLENBQThCLEVBQUMsQ0FBQztTQUMvRDtJQUVMLENBQUM7Ozs7Ozs7O0lBRU8sMEJBQU87Ozs7Ozs7SUFBZixVQUFnQixDQUFNLEVBQUUsQ0FBTSxFQUFFLEdBQVc7UUFDdkMsNkNBQTZDO1FBQzdDLGdDQUFnQztRQUNoQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDSCxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDWDtZQUNELElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDM0MsT0FBTyxDQUFDLENBQUM7YUFDVjtTQUNKO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDOzs7Ozs7O0lBQ1Esd0JBQUs7Ozs7OztJQUFkLFVBQWUsRUFBTyxFQUFFLEVBQU87UUFDM0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQzs7Z0JBekNKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsTUFBTTtvQkFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtpQkFDbkM7O0lBdUNELGVBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXJDWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ3NvcnQnLFxyXG4gICAgcHVyZTogdHJ1ZSAvL2RlZmF1bHQgcHVyZSA9IHRydWVcclxufSlcclxuICBcclxuZXhwb3J0IGNsYXNzIFNvcnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgdHJhbnNmb3JtKGFycmF5OiBhbnlbXSwgZmlsdGVyOiB7IG9yZGVyOiBzdHJpbmcsIGtleTogc3RyaW5nIH0pOiBhbnkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic29ydCBwaXBlXCIgKyBKU09OLnN0cmluZ2lmeShmaWx0ZXIpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnJheSk7XHJcbiAgICAgICAgaWYgKCFmaWx0ZXIua2V5IHx8IGZpbHRlci5rZXkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbHRlci5vcmRlciA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsdGVyLm9yZGVyID09PSAnYXNjJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXkuc29ydCgoYSwgYikgPT4gdGhpcy5jb21wYXJlKGEsIGIsIGZpbHRlci5rZXkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXkuc29ydCgoYSwgYikgPT4gdGhpcy5jb21wYXJlKGIsIGEsIGZpbHRlci5rZXkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcGFyZShhOiBhbnksIGI6IGFueSwga2V5OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIC8vcmV0dXJuICgnJyArIGFba2V5XSkubG9jYWxlQ29tcGFyZShiW2tleV0pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5pc05hTihhLCBiKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNOYU4oYVtrZXldLCBiW2tleV0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoJycrYVtrZXldKS5sb2NhbGVDb21wYXJlKGJba2V5XSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQoYVtrZXldKSA8IHBhcnNlRmxvYXQoYltrZXldKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFyc2VGbG9hdChhW2tleV0pID4gcGFyc2VGbG9hdChiW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlICBpc05hTihhVjogYW55LCBiVjogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChpc05hTihwYXJzZUZsb2F0KGFWKSkgfHwgIWlzRmluaXRlKGFWKSkgfHwgKGlzTmFOKHBhcnNlRmxvYXQoYlYpKSB8fCAhaXNGaW5pdGUoYlYpKTtcclxuICAgIH1cclxufSJdfQ==