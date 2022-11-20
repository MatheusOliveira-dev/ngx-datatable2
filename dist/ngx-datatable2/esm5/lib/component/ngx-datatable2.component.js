/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { DataShowingService } from '../services/data-showing.service';
import { CaptionComponent } from './caption/caption.component';
var NgxDatatableComponent = /** @class */ (function () {
    function NgxDatatableComponent(dataShowingService, cdr) {
        this.dataShowingService = dataShowingService;
        this.cdr = cdr;
        this.ngUnsubscribe = new Subject();
        this.customOptions = {
            'emptyDataMessage': 'No data available in table',
            'rowClickEvent': false,
            'rowPerPageMenu': [10, 20, 50, 100],
            'rowPerPage': 10,
            'enableChangeRowPerPageMenu': true,
            'showLoader': false,
            'loaderText': 'Loading...',
            'checkboxes': false,
            'rowDetailTemplate': undefined,
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
        this.rowClick = new EventEmitter();
        this.checkboxClick = new EventEmitter();
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
                _this._data.push(tslib_1.__assign({}, item, { '_autoId': index }));
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
            this._options = tslib_1.__assign({}, this.customOptions, this._options, obj);
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
        //console.log(this.headerRef);
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
            this.orderBy = tslib_1.__assign({}, this.orderBy, { 'order': this.orderBy.order == 'asc' ? 'desc' : 'asc', 'key': colItem.key });
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
    NgxDatatableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-datatable2',
                    template: "<div color=\"darken\" class=\"jarviswidget\">\r\n    <!-- table caption -->\r\n    <header *ngIf=\"captionRef\">\r\n        <ng-content select=\"ngx-caption\"></ng-content>\r\n    </header>\r\n    <div class=\"dataTables_wrapper\">\r\n        <!-- search bar with page per item -->\r\n        <div class=\"row no-row-margin\" style=\"margin-top: 5px;\">\r\n            <div class=\"col-xs-6 col-sm-6 col-6 text-left\">\r\n                <label style=\"font-weight: 100;\">\r\n                    <input type=\"text\" [id]=\"'search_'+tableId\" [(ngModel)]=\"searchText\" (input)=\"onInputSearch()\"\r\n                        name=\"search\" [placeholder]=\"options.searchPlaceholder\" autocomplete=\"off\"\r\n                        style=\"border-radius: 0px;\" class=\"form-control input-md\" />\r\n                </label>\r\n            </div>\r\n            <div *ngIf=\"options.enableChangeRowPerPageMenu == true\" class=\"col-sm-6 col-xs-6 col-6 text-right\">\r\n                <label style=\"font-weight: 100;\">\r\n                    <select (change)=\"onChangeItemPerPage()\" style=\"border-radius: 0px;\"\r\n                        [(ngModel)]=\"options.rowPerPage\" name=\"rowPerPage\" class=\"form-control\"\r\n                        [id]=\"'itemPerPage_'+tableId\">\r\n                        <option *ngFor=\"let item of options.rowPerPageMenu\" [ngValue]=\"item\">{{item}}</option>\r\n                    </select>\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"zui-wrapper\">\r\n            <div class=\"zui-scroller\" [style.margin-left]=\"styleParams.pinnedScollerMarginLeft+'px'\">\r\n                <table [id]=\"tableId\" class=\" zui-table dataTable  {{tableClass}}\" role=\"grid\"\r\n                    aria-describedby=\"DataTables_Table_0_info\" width=\"100%\">\r\n                    <!-- table head code -->\r\n                    <thead _ngcontent-qqc-c0=\"\">\r\n                        <tr role=\"row\">\r\n                            <th *ngIf=\"options.rowDetailTemplate\" style=\" text-align: center; vertical-align: middle;\">\r\n                                <div (click)=\"onClickRowDettailAllArrowOpen()\"\r\n                                    [class.triangle-right]=\"this.openRowDetailsId.size != this.data.length || this.data.length == 0 \"\r\n                                    [class.triangle-down]=\"this.openRowDetailsId.size == this.data.length && this.data.length != 0\">\r\n                                </div>\r\n                            </th>\r\n                            <!-- [style.min-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                [style.max-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                [class.zui-sticky-col]=\"options.checkboxAsPin && styleParams['pinnedFlag']\" -->\r\n                            <th *ngIf=\"options.checkboxes\" style=\"text-align: center; vertical-align: middle;\">\r\n                                <input class=\"ngx-form-checkbox-head\" type=\"checkbox\" id=\"checkbox-all\"\r\n                                    [checked]=\"this.selectedCheckboxes.size == this.data.length && this.data.length != 0\"\r\n                                    (change)=\"onCheckboxSelectAll($event.target.checked)\" />\r\n                            </th>\r\n                            <th *ngFor=\"let column of columns; let i = index; trackBy: identify\"\r\n                                (click)=\"onClickOrderBy(column, i)\" [style.min-width]=\"column.width+'px'\"\r\n                                [style.max-width]=\"column.width+'px'\"\r\n                                [style.vertical-align]=\"column.vAlign && column.vAlign.head\"\r\n                                [style.text-align]=\"column.align && column.align.head\"\r\n                                [class.zui-sticky-col]=\"column.pinned\"\r\n                                [style.margin-left]=\"column.pinnedMarginLeft+'px'\" yy>\r\n                                <span [innerHTML]=\"column.title\" [class.wrap]=\"column.noWrap && column.noWrap.head\"\r\n                                    [class.sort-by]=\"column.sorting && column.sortingOrder==''\"\r\n                                    [class.sort-by-asc]=\"column.sorting && column.sortingOrder=='asc'\"\r\n                                    [class.sort-by-desc]=\"column.sorting && column.sortingOrder=='desc'\"></span>\r\n                                <!-- [ngClass]=\"{sort-by:column.sorting==true, sort-by-asc:column.sorting==true&&column.sortingOrder=='asc', sort-by-desc:column.sorting==true&&column.sortingOrder=='desc'}\"  -->\r\n                                <!-- <div class=\"sorting\"style=\"display: inline;\"><span>&#8593;</span> <span>&#8595;</span></div>\t -->\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <ng-container *ngFor=\"let row of data \r\n                            | search:searchText \r\n                            | sort:orderBy \r\n                            | paginate: { id: 'pagination_'+tableId, itemsPerPage: options.rowPerPage, currentPage:currentPage }; \r\n                            trackBy: identify; let i = index;\">\r\n                            <tr [ngClass]=\"{ 'cus-cursor-pointer':options.rowClickEvent}\" (click)=\"onRowClick(row)\">\r\n                                <!-- row Detail code -->\r\n                                <td *ngIf=\"options.rowDetailTemplate\"\r\n                                    style=\" text-align: center; vertical-align: middle;\">\r\n                                    <div (click)=\"onClickRowDettailArrowOpen(row)\"\r\n                                        [class.triangle-right]=\"!openRowDetailsId.has(row._autoId)\"\r\n                                        [class.triangle-down]=\"openRowDetailsId.has(row._autoId)\">\r\n                                    </div>\r\n                                </td>\r\n                                <!-- checck box code -->\r\n                                <!-- [style.min-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                    [style.max-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                    [class.zui-sticky-col]=\"options.checkboxAsPin && styleParams['pinnedFlag']\" -->\r\n                                <td *ngIf=\"options.checkboxes\" style=\"text-align: center; vertical-align: middle;\">\r\n                                    <input class=\"ngx-form-checkbox\" type=\"checkbox\" id=\"checkbox-{{row._autoId}}\"\r\n                                        [checked]=\"selectedCheckboxes.has(row._autoId)\"\r\n                                        (change)=\"onCheckboxSelect(row)\" />\r\n                                </td>\r\n                                <!-- dynamacally generated column -->\r\n                                <td *ngFor=\"let column of columns;let j=index;\" [style.min-width]=\"column.width+'px'\"\r\n                                    [style.max-width]=\"column.width+'px'\"\r\n                                    [class.wrap]=\"column.noWrap && column.noWrap.body\"\r\n                                    [style.vertical-align]=\"column.vAlign && column.vAlign.body\"\r\n                                    [style.text-align]=\"column.align && column.align.body\"\r\n                                    [class.zui-sticky-col]=\"column.pinned\"\r\n                                    [style.margin-left]=\"column.pinnedMarginLeft+'px'\">\r\n                                    <ng-container *ngIf=\"!column.cellTemplate\">{{row[column.key]}}</ng-container>\r\n                                    <ng-container *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\r\n                                        [ngTemplateOutletContext]=\"{\r\n                                            $implicit: row,\r\n                                            rowIndex: row._autoId,\r\n                                            columnValue: row[column.key]\r\n                                        }\">\r\n                                    </ng-container>\r\n\r\n                                </td>\r\n                            </tr>\r\n                            <!-- row detail desccription code -->\r\n                            <tr *ngIf=\"options.rowDetailTemplate && openRowDetailsId.has(row._autoId) \">\r\n                                <td\r\n                                    [attr.colspan]=\"columns.length+(options.checkboxes?1:0)+(options.rowDetailTemplate?1:0)\">\r\n                                    <ng-container [ngTemplateOutlet]=\"options.rowDetailTemplate\"\r\n                                        [ngTemplateOutletContext]=\"{\r\n                                            $implicit: row,\r\n                                            rowIndex: row._autoId\r\n                                        }\">\r\n                                    </ng-container>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n\r\n                        <tr class=\"odd\" *ngIf=\"!data.length && options.showLoader == false\">\r\n                            <td valign=\"top\"\r\n                                [attr.colspan]=\"columns.length+(options.checkboxes?1:0)+(options.rowDetailTemplate?1:0)\"\r\n                                class=\"dataTables_empty\">\r\n                                {{options.emptyDataMessage}}\r\n                            </td>\r\n                        </tr>\r\n                        <tr class=\"odd\" *ngIf=\"options.showLoader == true\">\r\n                            <td valign=\"top\"\r\n                                [attr.colspan]=\"columns.length+(options.checkboxes?1:0)+(options.rowDetailTemplate?1:0)\"\r\n                                class=\"dataTables_empty\">\r\n                                {{options.loaderText}}\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"row no-row-margin\" style=\"margin-top: 5px;\">\r\n            <div class=\"col-sm-6 col-xs-12 col-12 custom-data-entries-align\">\r\n                <div *ngIf=\"options.showOnlyTotalRowsPerPage == false\"> {{options.paginationLabels.showing}}\r\n                    {{dataShowing.start}} {{options.paginationLabels.to}}\r\n                    {{dataShowing.end}} {{options.paginationLabels.of}} {{dataShowing.len}}\r\n                    {{options.paginationLabels.entries}}</div>\r\n\r\n                <div *ngIf=\"options.showOnlyTotalRowsPerPage == true\"> {{dataShowing.len}}\r\n                    {{options.paginationLabels.entries}}\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6 col-12 custom-pagination-align\">\r\n                <pagination-controls [id]=\"'pagination_'+tableId\" (pageChange)=\"onPageChange($event)\"\r\n                    [previousLabel]=\"options.paginationLabels.previousLabel\"\r\n                    [nextLabel]=\"options.paginationLabels.nextLabel\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [DataShowingService],
                    styles: [".jarviswidget{position:relative;border-radius:0;padding:0}.ui-sortable .jarviswidget-sortable>header{cursor:move;border-radius:0;line-height:normal;box-shadow:inset 0 -2px 0 rgba(0,0,0,.05);-moz-box-shadow:inset 0 -2px 0 rgba(0,0,0,.05);-webkit-box-shadow:inset 0 -2px 0 rgba(0,0,0,.05)}.ui-sortable .jarviswidget-sortable.jarviswidget-collapsed>header{border-radius:0}.jarviswidget-ctrls{width:auto;float:right;padding:0;margin:0}.jarviswidget-ctrls .button-icon{min-width:30px;height:32px;float:left;position:relative;font-family:Arial,Helvetica,sans-serif;border-left:1px solid rgba(0,0,0,.09)}.jarviswidget-ctrls .button-icon:hover{background-color:rgba(0,0,0,.05)}.jarviswidget-loader{width:32px;height:32px;margin:0;float:right;background-repeat:no-repeat;background-position:center center;display:none;text-align:center;line-height:32px;font-size:111%}.jarviswidget>div{border-top:none;float:left;width:100%;position:relative;font-size:13px;border-radius:0;margin:0;border-width:1px 1px 2px;border-style:solid;padding:0;overflow:visible;border-color:#ccc!important}.jarviswidget .widget-body{min-height:100px;position:relative;padding-bottom:13px}.jarviswidget .widget-body.widget-hide-overflow{overflow:hidden}.jarviswidget.well.transparent .widget-body.no-padding{margin:0!important}.jarviswidget.well{margin:0 0 30px}.jarviswidget.well>div{border:none!important;box-shadow:none!important;-webkit-box-shadow:none!important;-moz-box-shadow:none!important}.jarviswidget.well header{display:none}.jarviswidget-editbox{display:none;padding:10px}.jarviswidget-timestamp{font-size:12px;color:#868686;font-style:italic;margin:10px 0 0}.jarviswidget-placeholder{border-radius:0;margin-bottom:28px;padding:0;-khtml-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}#jarviswidget-fullscreen-mode{width:100%;height:100%;position:fixed;top:0;left:0;z-index:1050}#jarviswidget-fullscreen-mode .jarviswidget{margin:0;border-radius:0}#jarviswidget-fullscreen-mode .jarviswidget>div{overflow-y:scroll;border-radius:0}#jarviswidget-fullscreen-mode>div>header{cursor:default}.jarviswidget>header{color:#333;border:1px solid #c2c2c2;background:#fafafa}.jarviswidget>div{background-color:#fff!important}.jarviswidget-editbox{border-bottom:1px solid #b1b1b1;background-color:#fff;margin:-13px -13px 13px}.no-padding .jarviswidget-editbox{margin:0 0 10px}.jarviswidget-placeholder{background-color:#ffc;border:1px dashed #a7a7a7}.jarviswidget-remove-colors{color:#333!important;padding:0!important;background:0 0!important}table.dataTable{clear:both;margin-bottom:6px!important;max-width:none!important;margin-top:0!important}table.dataTable td,table.dataTable th{box-sizing:content-box}table.dataTable td.dataTables_empty,table.dataTable th.dataTables_empty{text-align:center}table.dataTable.nowrap td,table.dataTable.nowrap th{white-space:nowrap}div.dataTables_wrapper div.dataTables_length label{font-weight:400;text-align:left;white-space:nowrap}div.dataTables_wrapper div.dataTables_length select{width:75px;display:inline-block}div.dataTables_wrapper div.dataTables_filter{text-align:right}div.dataTables_wrapper div.dataTables_filter label{font-weight:400;white-space:nowrap;text-align:left}div.dataTables_wrapper div.dataTables_filter input{margin-left:.5em;display:inline-block;width:auto}div.dataTables_wrapper div.dataTables_info{padding-top:8px;white-space:nowrap}div.dataTables_wrapper div.dataTables_paginate{margin:0;white-space:nowrap;text-align:right}div.dataTables_wrapper div.dataTables_paginate ul.pagination{margin:2px 0;white-space:nowrap}div.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-26px;text-align:center;padding:1em 0}table.dataTable thead>tr>th.sorting,table.dataTable thead>tr>th.sorting_asc,table.dataTable thead>tr>th.sorting_desc,table.dataTable thead>tr>th>div.sorting,table.dataTable thead>tr>th>div.sorting_asc{padding-right:30px;text-align:right}.cus-cursor-pointer{cursor:pointer}.zui-table thead th{padding:10px;margin-top:-1px}.zui-table tbody td{padding:10px}.zui-wrapper{overflow:hidden;position:relative;width:100%}.zui-scroller{overflow-x:auto}.zui-table .zui-sticky-col{border-left:1px solid #ddd;border-right:1px solid #ddd;border-top:1px solid #ddd;border-bottom:1px solid #ddd;left:0;position:absolute;background-color:#f1f1f1}.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border-bottom-width:0}.pinned-column-bg-color{background-color:#f9f9f9;border-left:1px solid #ddd}.jarviswidget header{padding:0 5px;line-height:40px;background-color:#404040;border:1px solid #404040;color:#fff}.wrap{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.no-row-margin{margin-left:0!important;margin-right:0!important}.sort-by,.sort-by-asc,.sort-by-desc{padding-right:18px;position:relative;display:block;width:100%}.sort-by-asc:after,.sort-by-asc:before,.sort-by-desc:after,.sort-by-desc:before,.sort-by:after,.sort-by:before{border:4px solid transparent;content:\"\";display:block;height:0;right:5px;top:50%;position:absolute;width:0}.sort-by:before{border-bottom-color:#666;margin-top:-9px}.sort-by:after{border-top-color:#666;margin-top:1px}.sort-by-asc:before{border-bottom-color:#666;margin-top:-6px}.sort-by-desc:after{border-top-color:#666;margin-top:-1px}.custom-pagination-align{text-align:right!important}.custom-data-entries-align{text-align:left!important}.triangle-down{width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:12px solid #555;cursor:pointer}.triangle-right{width:0;height:0;border-top:6px solid transparent;border-left:12px solid #555;border-bottom:6px solid transparent;cursor:pointer}@media screen and (max-width:767px){div.dataTables_wrapper div.dataTables_filter,div.dataTables_wrapper div.dataTables_info,div.dataTables_wrapper div.dataTables_length,div.dataTables_wrapper div.dataTables_paginate{text-align:center}}@media screen and (max-width:576px){.custom-data-entries-align,.custom-pagination-align{text-align:center!important}}"]
                }] }
    ];
    /** @nocollapse */
    NgxDatatableComponent.ctorParameters = function () { return [
        { type: DataShowingService },
        { type: ChangeDetectorRef }
    ]; };
    NgxDatatableComponent.propDecorators = {
        tableId: [{ type: Input }],
        columns: [{ type: Input }],
        data: [{ type: Input }],
        options: [{ type: Input }],
        tableClass: [{ type: Input }],
        rowClick: [{ type: Output }],
        checkboxClick: [{ type: Output }],
        captionRef: [{ type: ContentChild, args: [CaptionComponent, { static: false },] }]
    };
    return NgxDatatableComponent;
}());
export { NgxDatatableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZTIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1hdGhldXNqb2xpdmVpcmEvbmd4LWRhdGF0YWJsZTIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L25neC1kYXRhdGFibGUyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLEVBQWlCLFlBQVksRUFBRSxZQUFZLEVBQWlDLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xNLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFL0Q7SUE2RUksK0JBQ1ksa0JBQXNDLEVBQ3RDLEdBQXNCO1FBRHRCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF0RTFCLGtCQUFhLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFDbkQsa0JBQWEsR0FBRztZQUNwQixrQkFBa0IsRUFBRSw0QkFBNEI7WUFDaEQsZUFBZSxFQUFFLEtBQUs7WUFDdEIsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7WUFDbkMsWUFBWSxFQUFFLEVBQUU7WUFDaEIsNEJBQTRCLEVBQUUsSUFBSTtZQUNsQyxZQUFZLEVBQUUsS0FBSztZQUNuQixZQUFZLEVBQUUsWUFBWTtZQUMxQixZQUFZLEVBQUUsS0FBSztZQUNuQixtQkFBbUIsRUFBRSxTQUFTO1lBQzlCLG1CQUFtQixFQUFFLFFBQVE7WUFDN0IsMEJBQTBCLEVBQUUsS0FBSztZQUNqQyxrQkFBa0IsRUFDbEI7Z0JBQ0ksU0FBUyxFQUFFLFNB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QUcxQix3Q0FBb0M7O0lBQ3BDLHdDQUE2Qjs7SUF3QjdCLDJDQUF5Qjs7SUFDekIseUNBQWdFOztJQUNoRSw4Q0FBcUU7O0lBQ3JFLDJDQUErRTs7SUFFL0UsMkNBQXdCOztJQUN4Qiw0Q0FBZ0I7O0lBQ2hCLHdDQUFpRTs7SUFDakUsNENBQXVGOztJQUN2Riw0Q0FBcUU7O0lBRXJFLG1EQUErQjs7SUFDL0Isa0RBQThCOztJQUU5QixpREFBNkI7Ozs7O0lBR3pCLG1EQUE4Qzs7Ozs7SUFDOUMsb0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgSW5wdXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGQsIEFmdGVyQ29udGVudEluaXQsIFRlbXBsYXRlUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBEYXRhU2hvd2luZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kYXRhLXNob3dpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IENhcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NhcHRpb24vY2FwdGlvbi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25neC1kYXRhdGFibGUyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZGF0YXRhYmxlMi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtZGF0YXRhYmxlMi5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIHByb3ZpZGVyczogW0RhdGFTaG93aW5nU2VydmljZV1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEYXRhdGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgICBwcml2YXRlIG5nVW5zdWJzY3JpYmU6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gICAgcHJpdmF0ZSBjdXN0b21PcHRpb25zID0ge1xyXG4gICAgICAgICdlbXB0eURhdGFNZXNzYWdlJzogJ05vIGRhdGEgYXZhaWxhYmxlIGluIHRhYmxlJyxcclxuICAgICAgICAncm93Q2xpY2tFdmVudCc6IGZhbHNlLFxyXG4gICAgICAgICdyb3dQZXJQYWdlTWVudSc6IFsxMCwgMjAsIDUwLCAxMDBdLFxyXG4gICAgICAgICdyb3dQZXJQYWdlJzogMTAsXHJcbiAgICAgICAgJ2VuYWJsZUNoYW5nZVJvd1BlclBhZ2VNZW51JzogdHJ1ZSxcclxuICAgICAgICAnc2hvd0xvYWRlcic6IGZhbHNlLFxyXG4gICAgICAgICdsb2FkZXJUZXh0JzogJ0xvYWRpbmcuLi4nLFxyXG4gICAgICAgICdjaGVja2JveGVzJzogZmFsc2UsXHJcbiAgICAgICAgJ3Jvd0RldGFpbFRlbXBsYXRlJzogdW5kZWZpbmVkLFxyXG4gICAgICAgICdzZWFyY2hQbGFjZWhvbGRlcic6ICdTZWFyY2gnLFxyXG4gICAgICAgICdzaG93T25seVRvdGFsUm93c1BlclBhZ2UnOiBmYWxzZSxcclxuICAgICAgICAncGFnaW5hdGlvbkxhYmVscyc6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc2hvd2luZyc6ICdTaG93aW5nJyxcclxuICAgICAgICAgICAgJ3RvJzogJ3RvJyxcclxuICAgICAgICAgICAgJ29mJzogJ29mJyxcclxuICAgICAgICAgICAgJ2VudHJpZXMnOiAnZW50cmllcycsXHJcbiAgICAgICAgICAgICdwcmV2aW91c0xhYmVsJzogJ1ByZXZpb3VzJyxcclxuICAgICAgICAgICAgJ25leHRMYWJlbCc6ICdOZXh0JyxcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBfb3B0aW9uczogYW55ID0ge307XHJcbiAgICBwcml2YXRlIF9kYXRhOiBhbnlbXSA9IFtdO1xyXG5cclxuXHJcbiAgICBASW5wdXQoKSB0YWJsZUlkID0gJ25neERhdGFUYWJsZUlkJztcclxuICAgIEBJbnB1dCgpIGNvbHVtbnM6IGFueVtdID0gW107XHJcbiAgICBASW5wdXQoKSBzZXQgZGF0YShhcnI6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IFtdO1xyXG4gICAgICAgIGFyci5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgICAgICdfYXV0b0lkJzogaW5kZXhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZ2V0IGRhdGEoKTogYW55W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNldCBvcHRpb25zKG9iajogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5jdXN0b21PcHRpb25zLFxyXG4gICAgICAgICAgICAuLi50aGlzLl9vcHRpb25zLFxyXG4gICAgICAgICAgICAuLi5vYmpcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZ2V0IG9wdGlvbnMoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcclxuICAgIH1cclxuICAgIEBJbnB1dCgpIHRhYmxlQ2xhc3M6IGFueTtcclxuICAgIEBPdXRwdXQoKSByb3dDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBjaGVja2JveENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQENvbnRlbnRDaGlsZChDYXB0aW9uQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgY2FwdGlvblJlZjogQ2FwdGlvbkNvbXBvbmVudFxyXG5cclxuICAgIHNlYXJjaFRleHQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBjdXJyZW50UGFnZSA9IDE7XHJcbiAgICBvcmRlckJ5OiB7IG9yZGVyOiBzdHJpbmcsIGtleTogc3RyaW5nIH0gPSB7IG9yZGVyOiAnJywga2V5OiAnJyB9O1xyXG4gICAgZGF0YVNob3dpbmc6IHsgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGxlbjogbnVtYmVyIH0gPSB7IHN0YXJ0OiAwLCBlbmQ6IDAsIGxlbjogMCB9XHJcbiAgICBzdHlsZVBhcmFtczogYW55ID0geyBwaW5uZWRTY29sbGVyTWFyZ2luTGVmdDogMCwgcGlubmVkRmxhZzogZmFsc2UgfTtcclxuXHJcbiAgICBzZWxlY3RlZENoZWNrYm94ZXMgPSBuZXcgU2V0KCk7XHJcbiAgICBzZWxlY3RlZENoZWNrTGlzdDogYW55W10gPSBbXTtcclxuXHJcbiAgICBvcGVuUm93RGV0YWlsc0lkID0gbmV3IFNldCgpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVNob3dpbmdTZXJ2aWNlOiBEYXRhU2hvd2luZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNvbHVtbnMubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1bJ3NvcnRpbmcnXSA9IGl0ZW0uaGFzT3duUHJvcGVydHkoJ3NvcnRpbmcnKSA/IGl0ZW1bJ3NvcnRpbmcnXSA6IHRydWU7XHJcbiAgICAgICAgICAgIGl0ZW1bJ2hlYWRBbGlnbiddID0gaXRlbS5oYXNPd25Qcm9wZXJ0eSgnaGVhZEFsaWduJykgPyBpdGVtWydoZWFkQWxpZ24nXS50b0xvd2VyQ2FzZSgpIDogJ2xlZnQnO1xyXG4gICAgICAgICAgICBpdGVtWydzb3J0aW5nT3JkZXInXSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKChpdGVtLmhhc093blByb3BlcnR5KCdwaW5uZWQnKSAmJiBpdGVtWydwaW5uZWQnXSA9PSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgLyoqIHdvcmtpbmcgZm9yIHBpbiB0aGUgY2hlY2tib3ggY29sdW1uICovXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0eWxlUGFyYW1zWydwaW5uZWRGbGFnJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKCB0aGlzLm9wdGlvbnMuY2hlY2tib3hlcyA9PSB0cnVlICYmIHRoaXMuc3R5bGVQYXJhbXNbJ3Bpbm5lZEZsYWcnXSAmJiBpID09MCkgeyBcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnN0eWxlUGFyYW1zLnBpbm5lZFNjb2xsZXJNYXJnaW5MZWZ0ID0gMzM7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbVsnd2lkdGgnXSA9IGl0ZW0uaGFzT3duUHJvcGVydHkoJ3dpZHRoJykgPyBpdGVtWyd3aWR0aCddIDogMTAwO1xyXG4gICAgICAgICAgICAgICAgaXRlbVsncGlubmVkTWFyZ2luTGVmdCddID0gdGhpcy5zdHlsZVBhcmFtcy5waW5uZWRTY29sbGVyTWFyZ2luTGVmdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVQYXJhbXMucGlubmVkU2NvbGxlck1hcmdpbkxlZnQgKz0gcGFyc2VJbnQoaXRlbVsnd2lkdGgnXSkgKyAyMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuZGF0YVNob3dpbmdGbih0aGlzLmN1cnJlbnRQYWdlLCB0aGlzLm9wdGlvbnMucm93UGVyUGFnZSwgdGhpcy5kYXRhLmxlbmd0aClcclxuXHJcbiAgICAgICAgLyoqIHN1YnNjcmlwdGlvbiBsaXN0ICovXHJcbiAgICAgICAgdGhpcy5kYXRhU2hvd2luZ1NlcnZpY2UuZGF0YVNob3dpbmdTdWJqZWN0LnN1YnNjcmliZShzdWJEYXRhID0+IHtcclxuICAgICAgICAgICAgc3ViRGF0YVsnaXRlbVBlclBhZ2UnXSA9IHN1YkRhdGEuaGFzT3duUHJvcGVydHkoJ2l0ZW1QZXJQYWdlJykgPyBzdWJEYXRhLml0ZW1QZXJQYWdlIDogdGhpcy5vcHRpb25zLnJvd1BlclBhZ2U7XHJcbiAgICAgICAgICAgIHN1YkRhdGFbJ2N1cnJlbnRQYWdlJ10gPSBzdWJEYXRhLmhhc093blByb3BlcnR5KCdjdXJyZW50UGFnZScpID8gc3ViRGF0YS5jdXJyZW50UGFnZSA6IHRoaXMuY3VycmVudFBhZ2U7XHJcbiAgICAgICAgICAgIHN1YkRhdGFbJ2xlbiddID0gc3ViRGF0YS5oYXNPd25Qcm9wZXJ0eSgnbGVuJykgPyBzdWJEYXRhLmxlbiA6IHRoaXMuZGF0YVNob3dpbmcubGVuO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTaG93aW5nRm4oc3ViRGF0YS5jdXJyZW50UGFnZSwgc3ViRGF0YS5pdGVtUGVyUGFnZSwgc3ViRGF0YS5sZW4pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5oZWFkZXJSZWYpO1xyXG4gICAgfVxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coY2hhbmdlcyk7XHJcbiAgICB9XHJcbiAgICBvbklucHV0U2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgfVxyXG4gICAgb25DaGFuZ2VJdGVtUGVyUGFnZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcclxuICAgICAgICB0aGlzLmRhdGFTaG93aW5nU2VydmljZS5zZXRTYXRhU2hvd2luZ1N1YmplY3QoeyAnY3VycmVudFBhZ2UnOiB0aGlzLmN1cnJlbnRQYWdlLCAnaXRlbVBlclBhZ2UnOiB0aGlzLm9wdGlvbnMucm93UGVyUGFnZSB9KTtcclxuICAgIH1cclxuICAgIG9uUGFnZUNoYW5nZShjdXJyZW50UGFnZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBjdXJyZW50UGFnZTtcclxuICAgICAgICB0aGlzLmRhdGFTaG93aW5nU2VydmljZS5zZXRTYXRhU2hvd2luZ1N1YmplY3QoeyAnY3VycmVudFBhZ2UnOiBjdXJyZW50UGFnZSB9KTtcclxuICAgIH1cclxuICAgIG9uQ2xpY2tPcmRlckJ5KGNvbEl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChjb2xJdGVtLnNvcnRpbmcgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMubWFwKChpdGVtKSA9PiB7IGl0ZW0uc29ydGluZ09yZGVyID0gJycgfSk7XHJcbiAgICAgICAgICAgIHRoaXMub3JkZXJCeSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMub3JkZXJCeSxcclxuICAgICAgICAgICAgICAgICdvcmRlcic6IHRoaXMub3JkZXJCeS5vcmRlciA9PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnLFxyXG4gICAgICAgICAgICAgICAgJ2tleSc6IGNvbEl0ZW0ua2V5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1uc1tpbmRleF1bJ3NvcnRpbmdPcmRlciddID0gdGhpcy5vcmRlckJ5Lm9yZGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uUm93Q2xpY2soaXRlbTogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yb3dDbGlja0V2ZW50KVxyXG4gICAgICAgICAgICB0aGlzLnJvd0NsaWNrLmVtaXQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGVja2JveFNlbGVjdChyb3dPYmo6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2hlY2tib3hlcy5oYXMocm93T2JqLl9hdXRvSWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGVja2JveGVzLmRlbGV0ZShyb3dPYmouX2F1dG9JZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGVja0xpc3QgPSB0aGlzLnNlbGVjdGVkQ2hlY2tMaXN0LmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLl9hdXRvSWQgIT0gcm93T2JqLl9hdXRvSWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoZWNrYm94ZXMuYWRkKHJvd09iai5fYXV0b0lkKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoZWNrTGlzdC5wdXNoKHJvd09iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDbGljay5lbWl0KHRoaXMuc2VsZWN0ZWRDaGVja0xpc3QpO1xyXG4gICAgfVxyXG4gICAgb25DaGVja2JveFNlbGVjdEFsbChjaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENoZWNrYm94ZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENoZWNrTGlzdCA9IFtdO1xyXG4gICAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGVja0xpc3QgPSB0aGlzLmRhdGEuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoZWNrYm94ZXMuYWRkKGl0ZW0uX2F1dG9JZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDbGljay5lbWl0KHRoaXMuc2VsZWN0ZWRDaGVja0xpc3QpO1xyXG4gICAgfVxyXG4gICAgb25DbGlja1Jvd0RldHRhaWxBcnJvd09wZW4ocm93T2JqOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5vcGVuUm93RGV0YWlsc0lkLmhhcyhyb3dPYmouX2F1dG9JZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuUm93RGV0YWlsc0lkLmRlbGV0ZShyb3dPYmouX2F1dG9JZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5Sb3dEZXRhaWxzSWQuYWRkKHJvd09iai5fYXV0b0lkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrUm93RGV0dGFpbEFsbEFycm93T3BlbigpIHtcclxuICAgICAgICBpZiAodGhpcy5vcGVuUm93RGV0YWlsc0lkLnNpemUgIT0gdGhpcy5kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5Sb3dEZXRhaWxzSWQgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Sb3dEZXRhaWxzSWQuYWRkKGl0ZW0uX2F1dG9JZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5Sb3dEZXRhaWxzSWQgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWRlbnRpZnkoaW5kZXgsIGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRhdGFTaG93aW5nRm4oY3VycmVudFBhZ2UsIGl0ZW1QZXJQYWdlLCBsZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmRhdGFTaG93aW5nLnN0YXJ0ID0gbGVuZ3RoID09IDAgPyAwIDogKChjdXJyZW50UGFnZSAtIDEpICogaXRlbVBlclBhZ2UpICsgMTtcclxuICAgICAgICB0aGlzLmRhdGFTaG93aW5nLmVuZCA9IGN1cnJlbnRQYWdlICogaXRlbVBlclBhZ2UgPiBsZW5ndGggPyBsZW5ndGggOiBjdXJyZW50UGFnZSAqIGl0ZW1QZXJQYWdlO1xyXG4gICAgICAgIHRoaXMuZGF0YVNob3dpbmcubGVuID0gbGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==