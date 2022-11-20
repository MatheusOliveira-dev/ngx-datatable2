/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class SortPipe {
    /**
     * @param {?} array
     * @param {?} filter
     * @return {?}
     */
    transform(array, filter) {
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
            (a, b) => this.compare(a, b, filter.key)));
        }
        else {
            return array.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => this.compare(b, a, filter.key)));
        }
    }
    /**
     * @private
     * @param {?} a
     * @param {?} b
     * @param {?} key
     * @return {?}
     */
    compare(a, b, key) {
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
    }
    /**
     * @private
     * @param {?} aV
     * @param {?} bV
     * @return {?}
     */
    isNaN(aV, bV) {
        return (isNaN(parseFloat(aV)) || !isFinite(aV)) || (isNaN(parseFloat(bV)) || !isFinite(bV));
    }
}
SortPipe.decorators = [
    { type: Pipe, args: [{
                name: 'sort',
                pure: true //default pure = true
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1hdGhldXNqb2xpdmVpcmEvbmd4LWRhdGF0YWJsZTIvIiwic291cmNlcyI6WyJsaWIvcGlwZS9zb3J0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBT3BELE1BQU0sT0FBTyxRQUFROzs7Ozs7SUFFakIsU0FBUyxDQUFDLEtBQVksRUFBRSxNQUFzQztRQUMxRCxxREFBcUQ7UUFDckQsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQ2xDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNyQixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7WUFDeEIsT0FBTyxLQUFLLENBQUMsSUFBSTs7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztTQUMvRDthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUMsSUFBSTs7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztTQUMvRDtJQUVMLENBQUM7Ozs7Ozs7O0lBRU8sT0FBTyxDQUFDLENBQU0sRUFBRSxDQUFNLEVBQUUsR0FBVztRQUN2Qyw2Q0FBNkM7UUFDN0MsZ0NBQWdDO1FBQ2hDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNILElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDM0MsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNYO1lBQ0QsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUMzQyxPQUFPLENBQUMsQ0FBQzthQUNWO1NBQ0o7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7Ozs7Ozs7SUFDUSxLQUFLLENBQUMsRUFBTyxFQUFFLEVBQU87UUFDM0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQzs7O1lBekNKLElBQUksU0FBQztnQkFDRixJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjthQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdzb3J0JyxcclxuICAgIHB1cmU6IHRydWUgLy9kZWZhdWx0IHB1cmUgPSB0cnVlXHJcbn0pXHJcbiAgXHJcbmV4cG9ydCBjbGFzcyBTb3J0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHRyYW5zZm9ybShhcnJheTogYW55W10sIGZpbHRlcjogeyBvcmRlcjogc3RyaW5nLCBrZXk6IHN0cmluZyB9KTogYW55IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNvcnQgcGlwZVwiICsgSlNPTi5zdHJpbmdpZnkoZmlsdGVyKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXJyYXkpO1xyXG4gICAgICAgIGlmICghZmlsdGVyLmtleSB8fCBmaWx0ZXIua2V5ID09PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWx0ZXIub3JkZXIgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbHRlci5vcmRlciA9PT0gJ2FzYycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5LnNvcnQoKGEsIGIpID0+IHRoaXMuY29tcGFyZShhLCBiLCBmaWx0ZXIua2V5KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5LnNvcnQoKGEsIGIpID0+IHRoaXMuY29tcGFyZShiLCBhLCBmaWx0ZXIua2V5KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBhcmUoYTogYW55LCBiOiBhbnksIGtleTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICAvL3JldHVybiAoJycgKyBhW2tleV0pLmxvY2FsZUNvbXBhcmUoYltrZXldKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuaXNOYU4oYSwgYikpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTmFOKGFba2V5XSwgYltrZXldKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKCcnK2Fba2V5XSkubG9jYWxlQ29tcGFyZShiW2tleV0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJzZUZsb2F0KGFba2V5XSkgPCBwYXJzZUZsb2F0KGJba2V5XSkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQoYVtrZXldKSA+IHBhcnNlRmxvYXQoYltrZXldKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSAgaXNOYU4oYVY6IGFueSwgYlY6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoaXNOYU4ocGFyc2VGbG9hdChhVikpIHx8ICFpc0Zpbml0ZShhVikpIHx8IChpc05hTihwYXJzZUZsb2F0KGJWKSkgfHwgIWlzRmluaXRlKGJWKSk7XHJcbiAgICB9XHJcbn0iXX0=