(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/forms'), require('@angular/common'), require('ngx-pagination')) :
    typeof define === 'function' && define.amd ? define('@matheusjoliveira/ngx-datatable2', ['exports', '@angular/core', 'rxjs', '@angular/forms', '@angular/common', 'ngx-pagination'], factory) :
    (global = global || self, factory((global.matheusjoliveira = global.matheusjoliveira || {}, global.matheusjoliveira['ngx-datatable2'] = {}), global.ng.core, global.rxjs, global.ng.forms, global.ng.common, global.ngxPagination));
}(this, (function (exports, core, rxjs, forms, common, ngxPagination) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DataShowingService = /** @class */ (function () {
        function DataShowingService() {
            this.dataShowingSubject = new rxjs.Subject();
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
            { type: core.Injectable }
        ];
        return DataShowingService;
    }());
    if (false) {
        /** @type {?} */
        DataShowingService.prototype.dataShowingSubject;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CaptionComponent = /** @class */ (function () {
        function CaptionComponent() {
        }
        /**
         * @return {?}
         */
        CaptionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        CaptionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-caption',
                        template: "\r\n        \r\n<ng-content></ng-content>\r\n\r\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        CaptionComponent.ctorParameters = function () { return []; };
        return CaptionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxDatatableComponent = /** @class */ (function () {
        function NgxDatatableComponent(dataShowingService, cdr) {
            this.dataShowingService = dataShowingService;
            this.cdr = cdr;
            this.ngUnsubscribe = new rxjs.Subject();
            this.customOptions = {
                'emptyDataMessage': 'No data available in table',
                'rowClickEvent': false,
                'enableChangeRowPerPageMenu': true,
                'rowPerPageMenu': [10, 20, 50, 100],
                'rowPerPage': 10,
                'showLoader': false,
                'loaderText': 'Loading...',
                'checkboxes': false,
                'rowDetailTemplate': undefined,
                'enableSearch': true,
                'searchPlaceholder': 'Search',
                'showOnlyTotalRowsPerPage': false,
                'paginationLabels': {
                    'showing': 'Showing',
                    'to': 'to',
                    'of': 'of',
                    'entries': 'entries',
                    'previousLabel': 'Previous',
                    'nextLabel': 'Next',
                }
            };
            this._options = {};
            this._data = [];
            this.tableId = 'ngxDataTableId';
            this.columns = [];
            this.rowClick = new core.EventEmitter();
            this.checkboxClick = new core.EventEmitter();
            this.searchText = "";
            this.currentPage = 1;
            this.orderBy = { order: '', key: '' };
            this.dataShowing = { start: 0, end: 0, len: 0 };
            this.styleParams = { pinnedScollerMarginLeft: 0, pinnedFlag: false };
            this.selectedCheckboxes = new Set();
            this.selectedCheckList = [];
            this.openRowDetailsId = new Set();
        }
        Object.defineProperty(NgxDatatableComponent.prototype, "data", {
            get: /**
             * @return {?}
             */
            function () {
                return this._data;
            },
            set: /**
             * @param {?} arr
             * @return {?}
             */
            function (arr) {
                var _this = this;
                this._data = [];
                arr.forEach((/**
                 * @param {?} item
                 * @param {?} index
                 * @return {?}
                 */
                function (item, index) {
                    _this._data.push(__assign({}, item, { '_autoId': index }));
                }));
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(NgxDatatableComponent.prototype, "options", {
            get: /**
             * @return {?}
             */
            function () {
                return this._options;
            },
            set: /**
             * @param {?} obj
             * @return {?}
             */
            function (obj) {
                this._options = __assign({}, this.customOptions, this._options, obj);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgxDatatableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.columns.map((/**
             * @param {?} item
             * @param {?} i
             * @return {?}
             */
            function (item, i) {
                item['sorting'] = item.hasOwnProperty('sorting') ? item['sorting'] : true;
                item['headAlign'] = item.hasOwnProperty('headAlign') ? item['headAlign'].toLowerCase() : 'left';
                item['sortingOrder'] = '';
                if ((item.hasOwnProperty('pinned') && item['pinned'] == true)) {
                    /** working for pin the checkbox column */
                    // this.styleParams['pinnedFlag'] = true;
                    // if ( this.options.checkboxes == true && this.styleParams['pinnedFlag'] && i ==0) { 
                    //     this.styleParams.pinnedScollerMarginLeft = 33;
                    // }
                    item['width'] = item.hasOwnProperty('width') ? item['width'] : 100;
                    item['pinnedMarginLeft'] = _this.styleParams.pinnedScollerMarginLeft;
                    _this.styleParams.pinnedScollerMarginLeft += parseInt(item['width']) + 20;
                }
            }));
            this.dataShowingFn(this.currentPage, this.options.rowPerPage, this.data.length);
            /** subscription list */
            this.dataShowingService.dataShowingSubject.subscribe((/**
             * @param {?} subData
             * @return {?}
             */
            function (subData) {
                subData['itemPerPage'] = subData.hasOwnProperty('itemPerPage') ? subData.itemPerPage : _this.options.rowPerPage;
                subData['currentPage'] = subData.hasOwnProperty('currentPage') ? subData.currentPage : _this.currentPage;
                subData['len'] = subData.hasOwnProperty('len') ? subData.len : _this.dataShowing.len;
                _this.dataShowingFn(subData.currentPage, subData.itemPerPage, subData.len);
            }));
        };
        /**
         * @return {?}
         */
        NgxDatatableComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            //console.log(this.data);
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgxDatatableComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            //console.log(changes);
        };
        /**
         * @return {?}
         */
        NgxDatatableComponent.prototype.onInputSearch = /**
         * @return {?}
         */
        function () {
            this.currentPage = 1;
        };
        /**
         * @return {?}
         */
        NgxDatatableComponent.prototype.onChangeItemPerPage = /**
         * @return {?}
         */
        function () {
            this.currentPage = 1;
            this.dataShowingService.setSataShowingSubject({ 'currentPage': this.currentPage, 'itemPerPage': this.options.rowPerPage });
        };
        /**
         * @param {?} currentPage
         * @return {?}
         */
        NgxDatatableComponent.prototype.onPageChange = /**
         * @param {?} currentPage
         * @return {?}
         */
        function (currentPage) {
            this.currentPage = currentPage;
            this.dataShowingService.setSataShowingSubject({ 'currentPage': currentPage });
        };
        /**
         * @param {?} colItem
         * @param {?} index
         * @return {?}
         */
        NgxDatatableComponent.prototype.onClickOrderBy = /**
         * @param {?} colItem
         * @param {?} index
         * @return {?}
         */
        function (colItem, index) {
            if (colItem.sorting == true) {
                this.columns.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { item.sortingOrder = ''; }));
                this.orderBy = __assign({}, this.orderBy, { 'order': this.orderBy.order == 'asc' ? 'desc' : 'asc', 'key': colItem.key });
                this.columns[index]['sortingOrder'] = this.orderBy.order;
            }
        };
        /**
         * @param {?} item
         * @return {?}
         */
        NgxDatatableComponent.prototype.onRowClick = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (this.options.rowClickEvent)
                this.rowClick.emit(item);
        };
        /**
         * @param {?} rowObj
         * @return {?}
         */
        NgxDatatableComponent.prototype.onCheckboxSelect = /**
         * @param {?} rowObj
         * @return {?}
         */
        function (rowObj) {
            if (this.selectedCheckboxes.has(rowObj._autoId)) {
                this.selectedCheckboxes.delete(rowObj._autoId);
                this.selectedCheckList = this.selectedCheckList.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    return item._autoId != rowObj._autoId;
                }));
            }
            else {
                this.selectedCheckboxes.add(rowObj._autoId);
                this.selectedCheckList.push(rowObj);
            }
            this.checkboxClick.emit(this.selectedCheckList);
        };
        /**
         * @param {?} checked
         * @return {?}
         */
        NgxDatatableComponent.prototype.onCheckboxSelectAll = /**
         * @param {?} checked
         * @return {?}
         */
        function (checked) {
            var _this = this;
            this.selectedCheckboxes = new Set();
            this.selectedCheckList = [];
            if (checked) {
                this.selectedCheckList = this.data.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    _this.selectedCheckboxes.add(item._autoId);
                    return true;
                }));
            }
            this.checkboxClick.emit(this.selectedCheckList);
        };
        /**
         * @param {?} rowObj
         * @return {?}
         */
        NgxDatatableComponent.prototype.onClickRowDettailArrowOpen = /**
         * @param {?} rowObj
         * @return {?}
         */
        function (rowObj) {
            if (this.openRowDetailsId.has(rowObj._autoId)) {
                this.openRowDetailsId.delete(rowObj._autoId);
            }
            else {
                this.openRowDetailsId.add(rowObj._autoId);
            }
        };
        /**
         * @return {?}
         */
        NgxDatatableComponent.prototype.onClickRowDettailAllArrowOpen = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.openRowDetailsId.size != this.data.length) {
                this.openRowDetailsId = new Set();
                this.data.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    _this.openRowDetailsId.add(item._autoId);
                    return true;
                }));
            }
            else {
                this.openRowDetailsId = new Set();
            }
        };
        /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        NgxDatatableComponent.prototype.identify = /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        function (index, item) {
            return index;
        };
        /**
         * @private
         * @param {?} currentPage
         * @param {?} itemPerPage
         * @param {?} length
         * @return {?}
         */
        NgxDatatableComponent.prototype.dataShowingFn = /**
         * @private
         * @param {?} currentPage
         * @param {?} itemPerPage
         * @param {?} length
         * @return {?}
         */
        function (currentPage, itemPerPage, length) {
            this.dataShowing.start = length == 0 ? 0 : ((currentPage - 1) * itemPerPage) + 1;
            this.dataShowing.end = currentPage * itemPerPage > length ? length : currentPage * itemPerPage;
            this.dataShowing.len = length;
        };
        /**
         * @param {?} val
         * @return {?}
         */
        NgxDatatableComponent.prototype.log = /**
         * @param {?} val
         * @return {?}
         */
        function (val) { console.log(val); };
        NgxDatatableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-datatable2',
                        template: "<div color=\"darken\" class=\"jarviswidget\">\r\n    <!-- table caption -->\r\n    <header *ngIf=\"captionRef\">\r\n        <ng-content select=\"ngx-caption\"></ng-content>\r\n    </header>\r\n    <div class=\"dataTables_wrapper\">\r\n        <!-- search bar with page per item -->\r\n        <div class=\"row no-row-margin\" style=\"margin-top: 5px;\">\r\n            <div *ngIf=\"options.enableSearch == true\" class=\"col-xs-6 col-sm-6 col-6 text-left\">\r\n                <label style=\"font-weight: 100;\">\r\n                    <input type=\"text\" [id]=\"'search_'+tableId\" [(ngModel)]=\"searchText\" (input)=\"onInputSearch()\"\r\n                        name=\"search\" [placeholder]=\"options.searchPlaceholder\" autocomplete=\"off\"\r\n                        style=\"border-radius: 0px;\" class=\"form-control input-md\" />\r\n                </label>\r\n            </div>\r\n            <div *ngIf=\"options.enableChangeRowPerPageMenu == true\" class=\"col-sm-6 col-xs-6 col-6 text-right\">\r\n                <label style=\"font-weight: 100;\">\r\n                    <select (change)=\"onChangeItemPerPage()\" style=\"border-radius: 0px;\"\r\n                        [(ngModel)]=\"options.rowPerPage\" name=\"rowPerPage\" class=\"form-control\"\r\n                        [id]=\"'itemPerPage_'+tableId\">\r\n                        <option *ngFor=\"let item of options.rowPerPageMenu\" [ngValue]=\"item\">{{item}}</option>\r\n                    </select>\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <br *ngIf=\"options.enableSearch == true || options.enableChangeRowPerPageMenu == true\">\r\n        <hr *ngIf=\"options.enableSearch == true || options.enableChangeRowPerPageMenu == true\">\r\n\r\n        <div class=\"zui-wrapper\">\r\n            <div class=\"zui-scroller\" [style.margin-left]=\"styleParams.pinnedScollerMarginLeft+'px'\">\r\n                <table [id]=\"tableId\" class=\" zui-table dataTable  {{tableClass}}\" role=\"grid\"\r\n                    aria-describedby=\"DataTables_Table_0_info\" width=\"100%\">\r\n                    <!-- table head code -->\r\n                    <thead _ngcontent-qqc-c0=\"\">\r\n                        <tr role=\"row\">\r\n                            <th *ngIf=\"options.rowDetailTemplate\" style=\" text-align: center; vertical-align: middle;\">\r\n                                <div (click)=\"onClickRowDettailAllArrowOpen()\"\r\n                                    [class.triangle-right]=\"this.openRowDetailsId.size != this.data.length || this.data.length == 0 \"\r\n                                    [class.triangle-down]=\"this.openRowDetailsId.size == this.data.length && this.data.length != 0\">\r\n                                </div>\r\n                            </th>\r\n                            <!-- [style.min-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                [style.max-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                [class.zui-sticky-col]=\"options.checkboxAsPin && styleParams['pinnedFlag']\" -->\r\n                            <th *ngIf=\"options.checkboxes\" style=\"text-align: center; vertical-align: middle;\">\r\n                                <input class=\"ngx-form-checkbox-head\" type=\"checkbox\" id=\"checkbox-all\"\r\n                                    [checked]=\"this.selectedCheckboxes.size == this.data.length && this.data.length != 0\"\r\n                                    (change)=\"onCheckboxSelectAll($event.target.checked)\" />\r\n                            </th>\r\n                            <th *ngFor=\"let column of columns; let i = index; trackBy: identify\"\r\n                                (click)=\"onClickOrderBy(column, i)\" [style.min-width]=\"column.width+'px'\"\r\n                                [style.max-width]=\"column.width+'px'\"\r\n                                [style.vertical-align]=\"column.vAlign && column.vAlign.head\"\r\n                                [style.text-align]=\"column.align && column.align.head\"\r\n                                [class.zui-sticky-col]=\"column.pinned\"\r\n                                [style.margin-left]=\"column.pinnedMarginLeft+'px'\" yy>\r\n                                <span [innerHTML]=\"column.title\" [class.wrap]=\"column.noWrap && column.noWrap.head\"\r\n                                    [class.sort-by]=\"column.sorting && column.sortingOrder==''\"\r\n                                    [class.sort-by-asc]=\"column.sorting && column.sortingOrder=='asc'\"\r\n                                    [class.sort-by-desc]=\"column.sorting && column.sortingOrder=='desc'\"></span>\r\n                                <!-- [ngClass]=\"{sort-by:column.sorting==true, sort-by-asc:column.sorting==true&&column.sortingOrder=='asc', sort-by-desc:column.sorting==true&&column.sortingOrder=='desc'}\"  -->\r\n                                <!-- <div class=\"sorting\"style=\"display: inline;\"><span>&#8593;</span> <span>&#8595;</span></div>\t -->\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <ng-container *ngFor=\"let row of data \r\n                            | search:searchText \r\n                            | sort:orderBy \r\n                            | paginate: { id: 'pagination_'+tableId, itemsPerPage: options.rowPerPage, currentPage:currentPage }; \r\n                            trackBy: identify; let i = index;\">\r\n                            <tr [ngClass]=\"{ 'cus-cursor-pointer':options.rowClickEvent}\" (click)=\"onRowClick(row)\">\r\n                                <!-- row Detail code -->\r\n                                <td *ngIf=\"options.rowDetailTemplate\"\r\n                                    style=\" text-align: center; vertical-align: middle;\">\r\n                                    <div (click)=\"onClickRowDettailArrowOpen(row)\"\r\n                                        [class.triangle-right]=\"!openRowDetailsId.has(row._autoId)\"\r\n                                        [class.triangle-down]=\"openRowDetailsId.has(row._autoId)\">\r\n                                    </div>\r\n                                </td>\r\n                                <!-- check box code -->\r\n                                <!-- [style.min-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                    [style.max-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                    [class.zui-sticky-col]=\"options.checkboxAsPin && styleParams['pinnedFlag']\" -->\r\n                                <td *ngIf=\"options.checkboxes\" style=\"text-align: center; vertical-align: middle;\">\r\n                                    <input class=\"ngx-form-checkbox\" type=\"checkbox\" id=\"checkbox-{{row._autoId}}\"\r\n                                        [checked]=\"selectedCheckboxes.has(row._autoId)\"\r\n                                        (change)=\"onCheckboxSelect(row)\" />\r\n                                </td>\r\n                                <!-- dynamacally generated column -->\r\n                                <td *ngFor=\"let column of columns;let j=index;\" [style.min-width]=\"column.width+'px'\"\r\n                                    [style.max-width]=\"column.width+'px'\"\r\n                                    [class.wrap]=\"column.noWrap && column.noWrap.body\"\r\n                                    [style.vertical-align]=\"column.vAlign && column.vAlign.body\"\r\n                                    [style.text-align]=\"column.align && column.align.body\"\r\n                                    [class.zui-sticky-col]=\"column.pinned\"\r\n                                    [style.margin-left]=\"column.pinnedMarginLeft+'px'\"\r\n                                    [style.backgroundColor]=\"row.backgroundColorRow ? row.backgroundColorRow + ' !important' : null\">\r\n                                    <ng-container *ngIf=\"!column.cellTemplate\">\r\n\r\n                                        <ng-container *ngIf=\"column.prop\">\r\n                                            {{ row[column.key][column.prop] }}\r\n                                        </ng-container>\r\n\r\n                                        <ng-container *ngIf=\"!column.prop\">\r\n                                            {{ row[column.key] }}\r\n                                        </ng-container>\r\n\r\n                                    </ng-container>\r\n\r\n                                    <ng-container *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\r\n                                        [ngTemplateOutletContext]=\"{\r\n                                            $implicit: row,\r\n                                            rowIndex: row._autoId,\r\n                                            columnValue: row[column.key]\r\n                                        }\">\r\n                                    </ng-container>\r\n\r\n                                </td>\r\n                            </tr>\r\n                            <!-- row detail desccription code -->\r\n                            <tr *ngIf=\"options.rowDetailTemplate && openRowDetailsId.has(row._autoId) \">\r\n                                <td\r\n                                    [attr.colspan]=\"columns.length+(options.checkboxes?1:0)+(options.rowDetailTemplate?1:0)\">\r\n                                    <ng-container [ngTemplateOutlet]=\"options.rowDetailTemplate\"\r\n                                        [ngTemplateOutletContext]=\"{\r\n                                            $implicit: row,\r\n                                            rowIndex: row._autoId\r\n                                        }\">\r\n                                    </ng-container>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n\r\n                        <tr class=\"odd\" *ngIf=\"!data.length && options.showLoader == false\">\r\n                            <td valign=\"top\"\r\n                                [attr.colspan]=\"columns.length+(options.checkboxes?1:0)+(options.rowDetailTemplate?1:0)\"\r\n                                class=\"dataTables_empty\">\r\n                                {{options.emptyDataMessage}}\r\n                            </td>\r\n                        </tr>\r\n                        <tr class=\"odd\" *ngIf=\"options.showLoader == true\">\r\n                            <td valign=\"top\"\r\n                                [attr.colspan]=\"columns.length+(options.checkboxes?1:0)+(options.rowDetailTemplate?1:0)\"\r\n                                class=\"dataTables_empty\">\r\n                                {{options.loaderText}}\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"row no-row-margin\" style=\"margin-top: 5px;\">\r\n            <div class=\"col-sm-6 col-xs-12 col-12 custom-data-entries-align\">\r\n                <div *ngIf=\"options.showOnlyTotalRowsPerPage == false\"> {{options.paginationLabels.showing}}\r\n                    {{dataShowing.start}} {{options.paginationLabels.to}}\r\n                    {{dataShowing.end}} {{options.paginationLabels.of}} {{dataShowing.len}}\r\n                    {{options.paginationLabels.entries}}</div>\r\n\r\n                <div *ngIf=\"options.showOnlyTotalRowsPerPage == true\"> {{dataShowing.len}}\r\n                    {{options.paginationLabels.entries}}\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6 col-12 custom-pagination-align\">\r\n                <pagination-controls [id]=\"'pagination_'+tableId\" (pageChange)=\"onPageChange($event)\"\r\n                    [previousLabel]=\"options.paginationLabels.previousLabel\"\r\n                    [nextLabel]=\"options.paginationLabels.nextLabel\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [DataShowingService],
                        styles: [".jarviswidget{position:relative;border-radius:0;padding:0}.ui-sortable .jarviswidget-sortable>header{cursor:move;border-radius:0;line-height:normal;box-shadow:inset 0 -2px 0 rgba(0,0,0,.05);-moz-box-shadow:inset 0 -2px 0 rgba(0,0,0,.05);-webkit-box-shadow:inset 0 -2px 0 rgba(0,0,0,.05)}.ui-sortable .jarviswidget-sortable.jarviswidget-collapsed>header{border-radius:0}.jarviswidget-ctrls{width:auto;float:right;padding:0;margin:0}.jarviswidget-ctrls .button-icon{min-width:30px;height:32px;float:left;position:relative;font-family:Arial,Helvetica,sans-serif;border-left:1px solid rgba(0,0,0,.09)}.jarviswidget-ctrls .button-icon:hover{background-color:rgba(0,0,0,.05)}.jarviswidget-loader{width:32px;height:32px;margin:0;float:right;background-repeat:no-repeat;background-position:center center;display:none;text-align:center;line-height:32px;font-size:111%}.jarviswidget>div{border-top:none;float:left;width:100%;position:relative;font-size:13px;border-radius:0;margin:0;border-width:1px 1px 2px;border-style:solid;padding:0;overflow:visible;border-color:#ccc!important}.jarviswidget .widget-body{min-height:100px;position:relative;padding-bottom:13px}.jarviswidget .widget-body.widget-hide-overflow{overflow:hidden}.jarviswidget.well.transparent .widget-body.no-padding{margin:0!important}.jarviswidget.well{margin:0 0 30px}.jarviswidget.well>div{border:none!important;box-shadow:none!important;-webkit-box-shadow:none!important;-moz-box-shadow:none!important}.jarviswidget.well header{display:none}.jarviswidget-editbox{display:none;padding:10px}.jarviswidget-timestamp{font-size:12px;color:#868686;font-style:italic;margin:10px 0 0}.jarviswidget-placeholder{border-radius:0;margin-bottom:28px;padding:0;-khtml-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}#jarviswidget-fullscreen-mode{width:100%;height:100%;position:fixed;top:0;left:0;z-index:1050}#jarviswidget-fullscreen-mode .jarviswidget{margin:0;border-radius:0}#jarviswidget-fullscreen-mode .jarviswidget>div{overflow-y:scroll;border-radius:0}#jarviswidget-fullscreen-mode>div>header{cursor:default}.jarviswidget>header{color:#333;border:1px solid #c2c2c2;background:#fafafa}.jarviswidget>div{background-color:#fff!important}.jarviswidget-editbox{border-bottom:1px solid #b1b1b1;background-color:#fff;margin:-13px -13px 13px}.no-padding .jarviswidget-editbox{margin:0 0 10px}.jarviswidget-placeholder{background-color:#ffc;border:1px dashed #a7a7a7}.jarviswidget-remove-colors{color:#333!important;padding:0!important;background:0 0!important}table.dataTable{clear:both;margin-bottom:6px!important;max-width:none!important;margin-top:0!important}table.dataTable td,table.dataTable th{box-sizing:content-box}table.dataTable td.dataTables_empty,table.dataTable th.dataTables_empty{text-align:center}table.dataTable.nowrap td,table.dataTable.nowrap th{white-space:nowrap}div.dataTables_wrapper div.dataTables_length label{font-weight:400;text-align:left;white-space:nowrap}div.dataTables_wrapper div.dataTables_length select{width:75px;display:inline-block}div.dataTables_wrapper div.dataTables_filter{text-align:right}div.dataTables_wrapper div.dataTables_filter label{font-weight:400;white-space:nowrap;text-align:left}div.dataTables_wrapper div.dataTables_filter input{margin-left:.5em;display:inline-block;width:auto}div.dataTables_wrapper div.dataTables_info{padding-top:8px;white-space:nowrap}div.dataTables_wrapper div.dataTables_paginate{margin:0;white-space:nowrap;text-align:right}div.dataTables_wrapper div.dataTables_paginate ul.pagination{margin:2px 0;white-space:nowrap}div.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-26px;text-align:center;padding:1em 0}table.dataTable thead>tr>th.sorting,table.dataTable thead>tr>th.sorting_asc,table.dataTable thead>tr>th.sorting_desc,table.dataTable thead>tr>th>div.sorting,table.dataTable thead>tr>th>div.sorting_asc{padding-right:30px;text-align:right}.cus-cursor-pointer{cursor:pointer}.zui-table thead th{padding:10px;margin-top:-1px}.zui-table tbody td{padding:10px}.zui-wrapper{overflow:hidden;position:relative;width:100%}.zui-scroller{overflow-x:auto}.zui-table .zui-sticky-col{border-left:1px solid #ddd;border-right:1px solid #ddd;border-top:1px solid #ddd;border-bottom:1px solid #ddd;left:0;position:absolute;background-color:#f1f1f1}.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border-bottom-width:0}.pinned-column-bg-color{background-color:#f9f9f9;border-left:1px solid #ddd}.jarviswidget header{padding:0 5px;line-height:40px;background-color:#404040;border:1px solid #404040;color:#fff}.wrap{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.no-row-margin{margin-left:0!important;margin-right:0!important}.sort-by,.sort-by-asc,.sort-by-desc{padding-right:18px;position:relative;display:block;width:100%}.sort-by-asc:after,.sort-by-asc:before,.sort-by-desc:after,.sort-by-desc:before,.sort-by:after,.sort-by:before{border:4px solid transparent;content:\"\";display:block;height:0;right:5px;top:50%;position:absolute;width:0}.sort-by:before{border-bottom-color:#666;margin-top:-9px}.sort-by:after{border-top-color:#666;margin-top:1px}.sort-by-asc:before{border-bottom-color:#666;margin-top:-6px}.sort-by-desc:after{border-top-color:#666;margin-top:-1px}.custom-pagination-align{text-align:right!important}.custom-data-entries-align{text-align:left!important}.triangle-down{width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:12px solid #555;cursor:pointer}.triangle-right{width:0;height:0;border-top:6px solid transparent;border-left:12px solid #555;border-bottom:6px solid transparent;cursor:pointer}@media screen and (max-width:767px){div.dataTables_wrapper div.dataTables_filter,div.dataTables_wrapper div.dataTables_info,div.dataTables_wrapper div.dataTables_length,div.dataTables_wrapper div.dataTables_paginate{text-align:center}}@media screen and (max-width:576px){.custom-data-entries-align,.custom-pagination-align{text-align:center!important}}"]
                    }] }
        ];
        /** @nocollapse */
        NgxDatatableComponent.ctorParameters = function () { return [
            { type: DataShowingService },
            { type: core.ChangeDetectorRef }
        ]; };
        NgxDatatableComponent.propDecorators = {
            tableId: [{ type: core.Input }],
            columns: [{ type: core.Input }],
            data: [{ type: core.Input }],
            options: [{ type: core.Input }],
            tableClass: [{ type: core.Input }],
            rowClick: [{ type: core.Output }],
            checkboxClick: [{ type: core.Output }],
            captionRef: [{ type: core.ContentChild, args: [CaptionComponent, { static: false },] }]
        };
        return NgxDatatableComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NgxDatatableComponent.prototype.ngUnsubscribe;
        /**
         * @type {?}
         * @private
         */
        NgxDatatableComponent.prototype.customOptions;
        /**
         * @type {?}
         * @private
         */
        NgxDatatableComponent.prototype._options;
        /**
         * @type {?}
         * @private
         */
        NgxDatatableComponent.prototype._data;
        /** @type {?} */
        NgxDatatableComponent.prototype.tableId;
        /** @type {?} */
        NgxDatatableComponent.prototype.columns;
        /** @type {?} */
        NgxDatatableComponent.prototype.tableClass;
        /** @type {?} */
        NgxDatatableComponent.prototype.rowClick;
        /** @type {?} */
        NgxDatatableComponent.prototype.checkboxClick;
        /** @type {?} */
        NgxDatatableComponent.prototype.captionRef;
        /** @type {?} */
        NgxDatatableComponent.prototype.searchText;
        /** @type {?} */
        NgxDatatableComponent.prototype.currentPage;
        /** @type {?} */
        NgxDatatableComponent.prototype.orderBy;
        /** @type {?} */
        NgxDatatableComponent.prototype.dataShowing;
        /** @type {?} */
        NgxDatatableComponent.prototype.styleParams;
        /** @type {?} */
        NgxDatatableComponent.prototype.selectedCheckboxes;
        /** @type {?} */
        NgxDatatableComponent.prototype.selectedCheckList;
        /** @type {?} */
        NgxDatatableComponent.prototype.openRowDetailsId;
        /**
         * @type {?}
         * @private
         */
        NgxDatatableComponent.prototype.dataShowingService;
        /**
         * @type {?}
         * @private
         */
        NgxDatatableComponent.prototype.cdr;
        /* Skipping unhandled member: ;*/
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Pipe, args: [{
                        name: 'search',
                    },] }
        ];
        /** @nocollapse */
        SearchPipe.ctorParameters = function () { return [
            { type: DataShowingService }
        ]; };
        return SearchPipe;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SearchPipe.prototype.dataShowingService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Pipe, args: [{
                        name: 'sort',
                        pure: true //default pure = true
                    },] }
        ];
        return SortPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxDatatable2Module = /** @class */ (function () {
        function NgxDatatable2Module() {
        }
        NgxDatatable2Module.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgxDatatableComponent, SearchPipe, SortPipe, CaptionComponent],
                        imports: [
                            forms.FormsModule,
                            common.CommonModule,
                            ngxPagination.NgxPaginationModule
                        ],
                        providers: [],
                        exports: [NgxDatatableComponent, CaptionComponent]
                    },] }
        ];
        return NgxDatatable2Module;
    }());

    exports.NgxDatatable2Module = NgxDatatable2Module;
    exports.NgxDatatableComponent = NgxDatatableComponent;
    exports.ɵa = DataShowingService;
    exports.ɵb = CaptionComponent;
    exports.ɵc = SearchPipe;
    exports.ɵd = SortPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=matheusjoliveira-ngx-datatable2.umd.js.map
