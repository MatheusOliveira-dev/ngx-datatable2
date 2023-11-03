/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { DataShowingService } from '../services/data-showing.service';
import { CaptionComponent } from './caption/caption.component';
export class NgxDatatableComponent {
    /**
     * @param {?} dataShowingService
     * @param {?} cdr
     */
    constructor(dataShowingService, cdr) {
        this.dataShowingService = dataShowingService;
        this.cdr = cdr;
        this.ngUnsubscribe = new Subject();
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
    /**
     * @param {?} arr
     * @return {?}
     */
    set data(arr) {
        this._data = [];
        arr.forEach((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (item, index) => {
            this._data.push(Object.assign({}, item, { '_autoId': index }));
        }));
    }
    ;
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    set options(obj) {
        this._options = Object.assign({}, this.customOptions, this._options, obj);
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.columns.map((/**
         * @param {?} item
         * @param {?} i
         * @return {?}
         */
        (item, i) => {
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
                item['pinnedMarginLeft'] = this.styleParams.pinnedScollerMarginLeft;
                this.styleParams.pinnedScollerMarginLeft += parseInt(item['width']) + 20;
            }
        }));
        this.dataShowingFn(this.currentPage, this.options.rowPerPage, this.data.length);
        /** subscription list */
        this.dataShowingService.dataShowingSubject.subscribe((/**
         * @param {?} subData
         * @return {?}
         */
        subData => {
            subData['itemPerPage'] = subData.hasOwnProperty('itemPerPage') ? subData.itemPerPage : this.options.rowPerPage;
            subData['currentPage'] = subData.hasOwnProperty('currentPage') ? subData.currentPage : this.currentPage;
            subData['len'] = subData.hasOwnProperty('len') ? subData.len : this.dataShowing.len;
            this.dataShowingFn(subData.currentPage, subData.itemPerPage, subData.len);
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        //console.log(this.data);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        //console.log(changes);
    }
    /**
     * @return {?}
     */
    onInputSearch() {
        this.currentPage = 1;
    }
    /**
     * @return {?}
     */
    onChangeItemPerPage() {
        this.currentPage = 1;
        this.dataShowingService.setSataShowingSubject({ 'currentPage': this.currentPage, 'itemPerPage': this.options.rowPerPage });
    }
    /**
     * @param {?} currentPage
     * @return {?}
     */
    onPageChange(currentPage) {
        this.currentPage = currentPage;
        this.dataShowingService.setSataShowingSubject({ 'currentPage': currentPage });
    }
    /**
     * @param {?} colItem
     * @param {?} index
     * @return {?}
     */
    onClickOrderBy(colItem, index) {
        if (colItem.sorting == true) {
            this.columns.map((/**
             * @param {?} item
             * @return {?}
             */
            (item) => { item.sortingOrder = ''; }));
            this.orderBy = Object.assign({}, this.orderBy, { 'order': this.orderBy.order == 'asc' ? 'desc' : 'asc', 'key': colItem.key });
            this.columns[index]['sortingOrder'] = this.orderBy.order;
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onRowClick(item) {
        if (this.options.rowClickEvent)
            this.rowClick.emit(item);
    }
    /**
     * @param {?} rowObj
     * @return {?}
     */
    onCheckboxSelect(rowObj) {
        if (this.selectedCheckboxes.has(rowObj._autoId)) {
            this.selectedCheckboxes.delete(rowObj._autoId);
            this.selectedCheckList = this.selectedCheckList.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return item._autoId != rowObj._autoId;
            }));
        }
        else {
            this.selectedCheckboxes.add(rowObj._autoId);
            this.selectedCheckList.push(rowObj);
        }
        this.checkboxClick.emit(this.selectedCheckList);
    }
    /**
     * @param {?} checked
     * @return {?}
     */
    onCheckboxSelectAll(checked) {
        this.selectedCheckboxes = new Set();
        this.selectedCheckList = [];
        if (checked) {
            this.selectedCheckList = this.data.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                this.selectedCheckboxes.add(item._autoId);
                return true;
            }));
        }
        this.checkboxClick.emit(this.selectedCheckList);
    }
    /**
     * @param {?} rowObj
     * @return {?}
     */
    onClickRowDettailArrowOpen(rowObj) {
        if (this.openRowDetailsId.has(rowObj._autoId)) {
            this.openRowDetailsId.delete(rowObj._autoId);
        }
        else {
            this.openRowDetailsId.add(rowObj._autoId);
        }
    }
    /**
     * @return {?}
     */
    onClickRowDettailAllArrowOpen() {
        if (this.openRowDetailsId.size != this.data.length) {
            this.openRowDetailsId = new Set();
            this.data.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                this.openRowDetailsId.add(item._autoId);
                return true;
            }));
        }
        else {
            this.openRowDetailsId = new Set();
        }
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    identify(index, item) {
        return index;
    }
    /**
     * @private
     * @param {?} currentPage
     * @param {?} itemPerPage
     * @param {?} length
     * @return {?}
     */
    dataShowingFn(currentPage, itemPerPage, length) {
        this.dataShowing.start = length == 0 ? 0 : ((currentPage - 1) * itemPerPage) + 1;
        this.dataShowing.end = currentPage * itemPerPage > length ? length : currentPage * itemPerPage;
        this.dataShowing.len = length;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    log(val) { console.log(val); }
}
NgxDatatableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-datatable2',
                template: "<div color=\"darken\" class=\"jarviswidget\">\r\n    <!-- table caption -->\r\n    <header *ngIf=\"captionRef\">\r\n        <ng-content select=\"ngx-caption\"></ng-content>\r\n    </header>\r\n    <div class=\"dataTables_wrapper\">\r\n        <!-- search bar with page per item -->\r\n        <div class=\"row no-row-margin\" style=\"margin-top: 5px;\">\r\n            <div *ngIf=\"options.enableSearch == true\" class=\"col-xs-6 col-sm-6 col-6 text-left\">\r\n                <label style=\"font-weight: 100;\">\r\n                    <input type=\"text\" [id]=\"'search_'+tableId\" [(ngModel)]=\"searchText\" (input)=\"onInputSearch()\"\r\n                        name=\"search\" [placeholder]=\"options.searchPlaceholder\" autocomplete=\"off\"\r\n                        style=\"border-radius: 0px;\" class=\"form-control input-md\" />\r\n                </label>\r\n            </div>\r\n            <div *ngIf=\"options.enableChangeRowPerPageMenu == true\" class=\"col-sm-6 col-xs-6 col-6 text-right\">\r\n                <label style=\"font-weight: 100;\">\r\n                    <select (change)=\"onChangeItemPerPage()\" style=\"border-radius: 0px;\"\r\n                        [(ngModel)]=\"options.rowPerPage\" name=\"rowPerPage\" class=\"form-control\"\r\n                        [id]=\"'itemPerPage_'+tableId\">\r\n                        <option *ngFor=\"let item of options.rowPerPageMenu\" [ngValue]=\"item\">{{item}}</option>\r\n                    </select>\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <br *ngIf=\"options.enableSearch == true || options.enableChangeRowPerPageMenu == true\">\r\n        <hr *ngIf=\"options.enableSearch == true || options.enableChangeRowPerPageMenu == true\">\r\n\r\n        <div class=\"zui-wrapper\">\r\n            <div class=\"zui-scroller\" [style.margin-left]=\"styleParams.pinnedScollerMarginLeft+'px'\">\r\n                <table [id]=\"tableId\" class=\" zui-table dataTable  {{tableClass}}\" role=\"grid\"\r\n                    aria-describedby=\"DataTables_Table_0_info\" width=\"100%\">\r\n                    <!-- table head code -->\r\n                    <thead _ngcontent-qqc-c0=\"\">\r\n                        <tr role=\"row\">\r\n                            <th *ngIf=\"options.rowDetailTemplate\" style=\" text-align: center; vertical-align: middle;\">\r\n                                <div (click)=\"onClickRowDettailAllArrowOpen()\"\r\n                                    [class.triangle-right]=\"this.openRowDetailsId.size != this.data.length || this.data.length == 0 \"\r\n                                    [class.triangle-down]=\"this.openRowDetailsId.size == this.data.length && this.data.length != 0\">\r\n                                </div>\r\n                            </th>\r\n                            <!-- [style.min-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                [style.max-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                [class.zui-sticky-col]=\"options.checkboxAsPin && styleParams['pinnedFlag']\" -->\r\n                            <th *ngIf=\"options.checkboxes\" style=\"text-align: center; vertical-align: middle;\">\r\n                                <input class=\"ngx-form-checkbox-head\" type=\"checkbox\" id=\"checkbox-all\"\r\n                                    [checked]=\"this.selectedCheckboxes.size == this.data.length && this.data.length != 0\"\r\n                                    (change)=\"onCheckboxSelectAll($event.target.checked)\" />\r\n                            </th>\r\n                            <th *ngFor=\"let column of columns; let i = index; trackBy: identify\"\r\n                                (click)=\"onClickOrderBy(column, i)\" [style.min-width]=\"column.width+'px'\"\r\n                                [style.max-width]=\"column.width+'px'\"\r\n                                [style.vertical-align]=\"column.vAlign && column.vAlign.head\"\r\n                                [style.text-align]=\"column.align && column.align.head\"\r\n                                [class.zui-sticky-col]=\"column.pinned\"\r\n                                [style.margin-left]=\"column.pinnedMarginLeft+'px'\" yy>\r\n                                <span [innerHTML]=\"column.title\" [class.wrap]=\"column.noWrap && column.noWrap.head\"\r\n                                    [class.sort-by]=\"column.sorting && column.sortingOrder==''\"\r\n                                    [class.sort-by-asc]=\"column.sorting && column.sortingOrder=='asc'\"\r\n                                    [class.sort-by-desc]=\"column.sorting && column.sortingOrder=='desc'\"></span>\r\n                                <!-- [ngClass]=\"{sort-by:column.sorting==true, sort-by-asc:column.sorting==true&&column.sortingOrder=='asc', sort-by-desc:column.sorting==true&&column.sortingOrder=='desc'}\"  -->\r\n                                <!-- <div class=\"sorting\"style=\"display: inline;\"><span>&#8593;</span> <span>&#8595;</span></div>\t -->\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <ng-container *ngFor=\"let row of data \r\n                            | search:searchText \r\n                            | sort:orderBy \r\n                            | paginate: { id: 'pagination_'+tableId, itemsPerPage: options.rowPerPage, currentPage:currentPage }; \r\n                            trackBy: identify; let i = index;\">\r\n                            <tr [ngClass]=\"{ 'cus-cursor-pointer':options.rowClickEvent}\" (click)=\"onRowClick(row)\">\r\n                                <!-- row Detail code -->\r\n                                <td *ngIf=\"options.rowDetailTemplate\"\r\n                                    style=\" text-align: center; vertical-align: middle;\">\r\n                                    <div (click)=\"onClickRowDettailArrowOpen(row)\"\r\n                                        [class.triangle-right]=\"!openRowDetailsId.has(row._autoId)\"\r\n                                        [class.triangle-down]=\"openRowDetailsId.has(row._autoId)\">\r\n                                    </div>\r\n                                </td>\r\n                                <!-- check box code -->\r\n                                <!-- [style.min-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                    [style.max-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                    [class.zui-sticky-col]=\"options.checkboxAsPin && styleParams['pinnedFlag']\" -->\r\n                                <td *ngIf=\"options.checkboxes\" style=\"text-align: center; vertical-align: middle;\">\r\n                                    <input class=\"ngx-form-checkbox\" type=\"checkbox\" id=\"checkbox-{{row._autoId}}\"\r\n                                        [checked]=\"selectedCheckboxes.has(row._autoId)\"\r\n                                        (change)=\"onCheckboxSelect(row)\" />\r\n                                </td>\r\n                                <!-- dynamacally generated column -->\r\n                                <td *ngFor=\"let column of columns;let j=index;\" [style.min-width]=\"column.width+'px'\"\r\n                                    [style.max-width]=\"column.width+'px'\"\r\n                                    [class.wrap]=\"column.noWrap && column.noWrap.body\"\r\n                                    [style.vertical-align]=\"column.vAlign && column.vAlign.body\"\r\n                                    [style.text-align]=\"column.align && column.align.body\"\r\n                                    [class.zui-sticky-col]=\"column.pinned\"\r\n                                    [style.margin-left]=\"column.pinnedMarginLeft+'px'\"\r\n                                    [style.backgroundColor]=\"row.backgroundColorRow ? row.backgroundColorRow + ' !important' : null\">\r\n                                    <ng-container *ngIf=\"!column.cellTemplate\">\r\n\r\n                                        <ng-container *ngIf=\"column.prop\">\r\n                                            {{ row[column.key][column.prop] }}\r\n                                        </ng-container>\r\n\r\n                                        <ng-container *ngIf=\"!column.prop\">\r\n                                            {{ row[column.key] }}\r\n                                        </ng-container>\r\n\r\n                                    </ng-container>\r\n\r\n                                    <ng-container *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\r\n                                        [ngTemplateOutletContext]=\"{\r\n                                            $implicit: row,\r\n                                            rowIndex: row._autoId,\r\n                                            columnValue: row[column.key]\r\n                                        }\">\r\n                                    </ng-container>\r\n\r\n                                </td>\r\n                            </tr>\r\n                            <!-- row detail desccription code -->\r\n                            <tr *ngIf=\"options.rowDetailTemplate && openRowDetailsId.has(row._autoId) \">\r\n                                <td\r\n                                    [attr.colspan]=\"columns.length+(options.checkboxes?1:0)+(options.rowDetailTemplate?1:0)\">\r\n                                    <ng-container [ngTemplateOutlet]=\"options.rowDetailTemplate\"\r\n                                        [ngTemplateOutletContext]=\"{\r\n                                            $implicit: row,\r\n                                            rowIndex: row._autoId\r\n                                        }\">\r\n                                    </ng-container>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n\r\n                        <tr class=\"odd\" *ngIf=\"!data.length && options.showLoader == false\">\r\n                            <td valign=\"top\"\r\n                                [attr.colspan]=\"columns.length+(options.checkboxes?1:0)+(options.rowDetailTemplate?1:0)\"\r\n                                class=\"dataTables_empty\">\r\n                                {{options.emptyDataMessage}}\r\n                            </td>\r\n                        </tr>\r\n                        <tr class=\"odd\" *ngIf=\"options.showLoader == true\">\r\n                            <td valign=\"top\"\r\n                                [attr.colspan]=\"columns.length+(options.checkboxes?1:0)+(options.rowDetailTemplate?1:0)\"\r\n                                class=\"dataTables_empty\">\r\n                                {{options.loaderText}}\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"row no-row-margin\" style=\"margin-top: 5px;\">\r\n            <div class=\"col-sm-6 col-xs-12 col-12 custom-data-entries-align\">\r\n                <div *ngIf=\"options.showOnlyTotalRowsPerPage == false\"> {{options.paginationLabels.showing}}\r\n                    {{dataShowing.start}} {{options.paginationLabels.to}}\r\n                    {{dataShowing.end}} {{options.paginationLabels.of}} {{dataShowing.len}}\r\n                    {{options.paginationLabels.entries}}</div>\r\n\r\n                <div *ngIf=\"options.showOnlyTotalRowsPerPage == true\"> {{dataShowing.len}}\r\n                    {{options.paginationLabels.entries}}\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6 col-12 custom-pagination-align\">\r\n                <pagination-controls [id]=\"'pagination_'+tableId\" (pageChange)=\"onPageChange($event)\"\r\n                    [previousLabel]=\"options.paginationLabels.previousLabel\"\r\n                    [nextLabel]=\"options.paginationLabels.nextLabel\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [DataShowingService],
                styles: [".jarviswidget{position:relative;border-radius:0;padding:0}.ui-sortable .jarviswidget-sortable>header{cursor:move;border-radius:0;line-height:normal;box-shadow:inset 0 -2px 0 rgba(0,0,0,.05);-moz-box-shadow:inset 0 -2px 0 rgba(0,0,0,.05);-webkit-box-shadow:inset 0 -2px 0 rgba(0,0,0,.05)}.ui-sortable .jarviswidget-sortable.jarviswidget-collapsed>header{border-radius:0}.jarviswidget-ctrls{width:auto;float:right;padding:0;margin:0}.jarviswidget-ctrls .button-icon{min-width:30px;height:32px;float:left;position:relative;font-family:Arial,Helvetica,sans-serif;border-left:1px solid rgba(0,0,0,.09)}.jarviswidget-ctrls .button-icon:hover{background-color:rgba(0,0,0,.05)}.jarviswidget-loader{width:32px;height:32px;margin:0;float:right;background-repeat:no-repeat;background-position:center center;display:none;text-align:center;line-height:32px;font-size:111%}.jarviswidget>div{border-top:none;float:left;width:100%;position:relative;font-size:13px;border-radius:0;margin:0;border-width:1px 1px 2px;border-style:solid;padding:0;overflow:visible;border-color:#ccc!important}.jarviswidget .widget-body{min-height:100px;position:relative;padding-bottom:13px}.jarviswidget .widget-body.widget-hide-overflow{overflow:hidden}.jarviswidget.well.transparent .widget-body.no-padding{margin:0!important}.jarviswidget.well{margin:0 0 30px}.jarviswidget.well>div{border:none!important;box-shadow:none!important;-webkit-box-shadow:none!important;-moz-box-shadow:none!important}.jarviswidget.well header{display:none}.jarviswidget-editbox{display:none;padding:10px}.jarviswidget-timestamp{font-size:12px;color:#868686;font-style:italic;margin:10px 0 0}.jarviswidget-placeholder{border-radius:0;margin-bottom:28px;padding:0;-khtml-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}#jarviswidget-fullscreen-mode{width:100%;height:100%;position:fixed;top:0;left:0;z-index:1050}#jarviswidget-fullscreen-mode .jarviswidget{margin:0;border-radius:0}#jarviswidget-fullscreen-mode .jarviswidget>div{overflow-y:scroll;border-radius:0}#jarviswidget-fullscreen-mode>div>header{cursor:default}.jarviswidget>header{color:#333;border:1px solid #c2c2c2;background:#fafafa}.jarviswidget>div{background-color:#fff!important}.jarviswidget-editbox{border-bottom:1px solid #b1b1b1;background-color:#fff;margin:-13px -13px 13px}.no-padding .jarviswidget-editbox{margin:0 0 10px}.jarviswidget-placeholder{background-color:#ffc;border:1px dashed #a7a7a7}.jarviswidget-remove-colors{color:#333!important;padding:0!important;background:0 0!important}table.dataTable{clear:both;margin-bottom:6px!important;max-width:none!important;margin-top:0!important}table.dataTable td,table.dataTable th{box-sizing:content-box}table.dataTable td.dataTables_empty,table.dataTable th.dataTables_empty{text-align:center}table.dataTable.nowrap td,table.dataTable.nowrap th{white-space:nowrap}div.dataTables_wrapper div.dataTables_length label{font-weight:400;text-align:left;white-space:nowrap}div.dataTables_wrapper div.dataTables_length select{width:75px;display:inline-block}div.dataTables_wrapper div.dataTables_filter{text-align:right}div.dataTables_wrapper div.dataTables_filter label{font-weight:400;white-space:nowrap;text-align:left}div.dataTables_wrapper div.dataTables_filter input{margin-left:.5em;display:inline-block;width:auto}div.dataTables_wrapper div.dataTables_info{padding-top:8px;white-space:nowrap}div.dataTables_wrapper div.dataTables_paginate{margin:0;white-space:nowrap;text-align:right}div.dataTables_wrapper div.dataTables_paginate ul.pagination{margin:2px 0;white-space:nowrap}div.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-26px;text-align:center;padding:1em 0}table.dataTable thead>tr>th.sorting,table.dataTable thead>tr>th.sorting_asc,table.dataTable thead>tr>th.sorting_desc,table.dataTable thead>tr>th>div.sorting,table.dataTable thead>tr>th>div.sorting_asc{padding-right:30px;text-align:right}.cus-cursor-pointer{cursor:pointer}.zui-table thead th{padding:10px;margin-top:-1px}.zui-table tbody td{padding:10px}.zui-wrapper{overflow:hidden;position:relative;width:100%}.zui-scroller{overflow-x:auto}.zui-table .zui-sticky-col{border-left:1px solid #ddd;border-right:1px solid #ddd;border-top:1px solid #ddd;border-bottom:1px solid #ddd;left:0;position:absolute;background-color:#f1f1f1}.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border-bottom-width:0}.pinned-column-bg-color{background-color:#f9f9f9;border-left:1px solid #ddd}.jarviswidget header{padding:0 5px;line-height:40px;background-color:#404040;border:1px solid #404040;color:#fff}.wrap{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.no-row-margin{margin-left:0!important;margin-right:0!important}.sort-by,.sort-by-asc,.sort-by-desc{padding-right:18px;position:relative;display:block;width:100%}.sort-by-asc:after,.sort-by-asc:before,.sort-by-desc:after,.sort-by-desc:before,.sort-by:after,.sort-by:before{border:4px solid transparent;content:\"\";display:block;height:0;right:5px;top:50%;position:absolute;width:0}.sort-by:before{border-bottom-color:#666;margin-top:-9px}.sort-by:after{border-top-color:#666;margin-top:1px}.sort-by-asc:before{border-bottom-color:#666;margin-top:-6px}.sort-by-desc:after{border-top-color:#666;margin-top:-1px}.custom-pagination-align{text-align:right!important}.custom-data-entries-align{text-align:left!important}.triangle-down{width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:12px solid #555;cursor:pointer}.triangle-right{width:0;height:0;border-top:6px solid transparent;border-left:12px solid #555;border-bottom:6px solid transparent;cursor:pointer}@media screen and (max-width:767px){div.dataTables_wrapper div.dataTables_filter,div.dataTables_wrapper div.dataTables_info,div.dataTables_wrapper div.dataTables_length,div.dataTables_wrapper div.dataTables_paginate{text-align:center}}@media screen and (max-width:576px){.custom-data-entries-align,.custom-pagination-align{text-align:center!important}}"]
            }] }
];
/** @nocollapse */
NgxDatatableComponent.ctorParameters = () => [
    { type: DataShowingService },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZTIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1hdGhldXNqb2xpdmVpcmEvbmd4LWRhdGF0YWJsZTIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L25neC1kYXRhdGFibGUyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sRUFBaUIsWUFBWSxFQUFFLFlBQVksRUFBaUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbE0sT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQVUvRCxNQUFNLE9BQU8scUJBQXFCOzs7OztJQXNFOUIsWUFDWSxrQkFBc0MsRUFDdEMsR0FBc0I7UUFEdEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXZFMUIsa0JBQWEsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNuRCxrQkFBYSxHQUFHO1lBQ3BCLGtCQUFrQixFQUFFLDRCQUE0QjtZQUNoRCxlQUFlLEVBQUUsS0FBSztZQUN0Qiw0QkFBNEIsRUFBRSxJQUFJO1lBQ2xDLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ25DLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFlBQVksRUFBRSxZQUFZO1lBQzFCLFlBQVksRUFBRSxLQUFLO1lBQ25CLG1CQUFtQixFQUFFLFNBQVM7WUFDOUIsY0FBYyxFQUFFLElBQUk7WUFDcEIsbUJBQW1CLEVBQUUsUUFBUTtZQUM3QiwwQkFBMEIsRUFBRSxL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OztJQUNyRSwyQ0FBK0U7O0lBRS9FLDJDQUF3Qjs7SUFDeEIsNENBQWdCOztJQUNoQix3Q0FBaUU7O0lBQ2pFLDRDQUF1Rjs7SUFDdkYsNENBQXFFOztJQUVyRSxtREFBK0I7O0lBQy9CLGtEQUE4Qjs7SUFFOUIsaURBQTZCOzs7OztJQUd6QixtREFBOEM7Ozs7O0lBQzlDLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMsIElucHV0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkLCBBZnRlckNvbnRlbnRJbml0LCBUZW1wbGF0ZVJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRGF0YVNob3dpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGF0YS1zaG93aW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYXB0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jYXB0aW9uL2NhcHRpb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduZ3gtZGF0YXRhYmxlMicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LWRhdGF0YWJsZTIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbmd4LWRhdGF0YWJsZTIuY29tcG9uZW50LmNzcyddLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBwcm92aWRlcnM6IFtEYXRhU2hvd2luZ1NlcnZpY2VdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RGF0YXRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xyXG4gICAgcHJpdmF0ZSBuZ1Vuc3Vic2NyaWJlOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgIHByaXZhdGUgY3VzdG9tT3B0aW9ucyA9IHtcclxuICAgICAgICAnZW1wdHlEYXRhTWVzc2FnZSc6ICdObyBkYXRhIGF2YWlsYWJsZSBpbiB0YWJsZScsXHJcbiAgICAgICAgJ3Jvd0NsaWNrRXZlbnQnOiBmYWxzZSxcclxuICAgICAgICAnZW5hYmxlQ2hhbmdlUm93UGVyUGFnZU1lbnUnOiB0cnVlLFxyXG4gICAgICAgICdyb3dQZXJQYWdlTWVudSc6IFsxMCwgMjAsIDUwLCAxMDBdLFxyXG4gICAgICAgICdyb3dQZXJQYWdlJzogMTAsXHJcbiAgICAgICAgJ3Nob3dMb2FkZXInOiBmYWxzZSxcclxuICAgICAgICAnbG9hZGVyVGV4dCc6ICdMb2FkaW5nLi4uJyxcclxuICAgICAgICAnY2hlY2tib3hlcyc6IGZhbHNlLFxyXG4gICAgICAgICdyb3dEZXRhaWxUZW1wbGF0ZSc6IHVuZGVmaW5lZCxcclxuICAgICAgICAnZW5hYmxlU2VhcmNoJzogdHJ1ZSxcclxuICAgICAgICAnc2VhcmNoUGxhY2Vob2xkZXInOiAnU2VhcmNoJyxcclxuICAgICAgICAnc2hvd09ubHlUb3RhbFJvd3NQZXJQYWdlJzogZmFsc2UsXHJcbiAgICAgICAgJ3BhZ2luYXRpb25MYWJlbHMnOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3Nob3dpbmcnOiAnU2hvd2luZycsXHJcbiAgICAgICAgICAgICd0byc6ICd0bycsXHJcbiAgICAgICAgICAgICdvZic6ICdvZicsXHJcbiAgICAgICAgICAgICdlbnRyaWVzJzogJ2VudHJpZXMnLFxyXG4gICAgICAgICAgICAncHJldmlvdXNMYWJlbCc6ICdQcmV2aW91cycsXHJcbiAgICAgICAgICAgICduZXh0TGFiZWwnOiAnTmV4dCcsXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgX29wdGlvbnM6IGFueSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfZGF0YTogYW55W10gPSBbXTtcclxuXHJcblxyXG4gICAgQElucHV0KCkgdGFibGVJZCA9ICduZ3hEYXRhVGFibGVJZCc7XHJcbiAgICBASW5wdXQoKSBjb2x1bW5zOiBhbnlbXSA9IFtdO1xyXG4gICAgQElucHV0KCkgc2V0IGRhdGEoYXJyOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBbXTtcclxuICAgICAgICBhcnIuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICAgICAgICAnX2F1dG9JZCc6IGluZGV4XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGdldCBkYXRhKCk6IGFueVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgb3B0aW9ucyhvYmo6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuY3VzdG9tT3B0aW9ucyxcclxuICAgICAgICAgICAgLi4udGhpcy5fb3B0aW9ucyxcclxuICAgICAgICAgICAgLi4ub2JqXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdldCBvcHRpb25zKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBASW5wdXQoKSB0YWJsZUNsYXNzOiBhbnk7XHJcbiAgICBAT3V0cHV0KCkgcm93Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgY2hlY2tib3hDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBDb250ZW50Q2hpbGQoQ2FwdGlvbkNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIGNhcHRpb25SZWY6IENhcHRpb25Db21wb25lbnRcclxuXHJcbiAgICBzZWFyY2hUZXh0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgb3JkZXJCeTogeyBvcmRlcjogc3RyaW5nLCBrZXk6IHN0cmluZyB9ID0geyBvcmRlcjogJycsIGtleTogJycgfTtcclxuICAgIGRhdGFTaG93aW5nOiB7IHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBsZW46IG51bWJlciB9ID0geyBzdGFydDogMCwgZW5kOiAwLCBsZW46IDAgfVxyXG4gICAgc3R5bGVQYXJhbXM6IGFueSA9IHsgcGlubmVkU2NvbGxlck1hcmdpbkxlZnQ6IDAsIHBpbm5lZEZsYWc6IGZhbHNlIH07XHJcblxyXG4gICAgc2VsZWN0ZWRDaGVja2JveGVzID0gbmV3IFNldCgpO1xyXG4gICAgc2VsZWN0ZWRDaGVja0xpc3Q6IGFueVtdID0gW107XHJcblxyXG4gICAgb3BlblJvd0RldGFpbHNJZCA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGRhdGFTaG93aW5nU2VydmljZTogRGF0YVNob3dpbmdTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtWydzb3J0aW5nJ10gPSBpdGVtLmhhc093blByb3BlcnR5KCdzb3J0aW5nJykgPyBpdGVtWydzb3J0aW5nJ10gOiB0cnVlO1xyXG4gICAgICAgICAgICBpdGVtWydoZWFkQWxpZ24nXSA9IGl0ZW0uaGFzT3duUHJvcGVydHkoJ2hlYWRBbGlnbicpID8gaXRlbVsnaGVhZEFsaWduJ10udG9Mb3dlckNhc2UoKSA6ICdsZWZ0JztcclxuICAgICAgICAgICAgaXRlbVsnc29ydGluZ09yZGVyJ10gPSAnJztcclxuXHJcbiAgICAgICAgICAgIGlmICgoaXRlbS5oYXNPd25Qcm9wZXJ0eSgncGlubmVkJykgJiYgaXRlbVsncGlubmVkJ10gPT0gdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgIC8qKiB3b3JraW5nIGZvciBwaW4gdGhlIGNoZWNrYm94IGNvbHVtbiAqL1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdHlsZVBhcmFtc1sncGlubmVkRmxhZyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGlmICggdGhpcy5vcHRpb25zLmNoZWNrYm94ZXMgPT0gdHJ1ZSAmJiB0aGlzLnN0eWxlUGFyYW1zWydwaW5uZWRGbGFnJ10gJiYgaSA9PTApIHsgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zdHlsZVBhcmFtcy5waW5uZWRTY29sbGVyTWFyZ2luTGVmdCA9IDMzO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW1bJ3dpZHRoJ10gPSBpdGVtLmhhc093blByb3BlcnR5KCd3aWR0aCcpID8gaXRlbVsnd2lkdGgnXSA6IDEwMDtcclxuICAgICAgICAgICAgICAgIGl0ZW1bJ3Bpbm5lZE1hcmdpbkxlZnQnXSA9IHRoaXMuc3R5bGVQYXJhbXMucGlubmVkU2NvbGxlck1hcmdpbkxlZnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlUGFyYW1zLnBpbm5lZFNjb2xsZXJNYXJnaW5MZWZ0ICs9IHBhcnNlSW50KGl0ZW1bJ3dpZHRoJ10pICsgMjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmRhdGFTaG93aW5nRm4odGhpcy5jdXJyZW50UGFnZSwgdGhpcy5vcHRpb25zLnJvd1BlclBhZ2UsIHRoaXMuZGF0YS5sZW5ndGgpXHJcblxyXG4gICAgICAgIC8qKiBzdWJzY3JpcHRpb24gbGlzdCAqL1xyXG4gICAgICAgIHRoaXMuZGF0YVNob3dpbmdTZXJ2aWNlLmRhdGFTaG93aW5nU3ViamVjdC5zdWJzY3JpYmUoc3ViRGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHN1YkRhdGFbJ2l0ZW1QZXJQYWdlJ10gPSBzdWJEYXRhLmhhc093blByb3BlcnR5KCdpdGVtUGVyUGFnZScpID8gc3ViRGF0YS5pdGVtUGVyUGFnZSA6IHRoaXMub3B0aW9ucy5yb3dQZXJQYWdlO1xyXG4gICAgICAgICAgICBzdWJEYXRhWydjdXJyZW50UGFnZSddID0gc3ViRGF0YS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudFBhZ2UnKSA/IHN1YkRhdGEuY3VycmVudFBhZ2UgOiB0aGlzLmN1cnJlbnRQYWdlO1xyXG4gICAgICAgICAgICBzdWJEYXRhWydsZW4nXSA9IHN1YkRhdGEuaGFzT3duUHJvcGVydHkoJ2xlbicpID8gc3ViRGF0YS5sZW4gOiB0aGlzLmRhdGFTaG93aW5nLmxlbjtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU2hvd2luZ0ZuKHN1YkRhdGEuY3VycmVudFBhZ2UsIHN1YkRhdGEuaXRlbVBlclBhZ2UsIHN1YkRhdGEubGVuKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZGF0YSk7XHJcbiAgICB9XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjaGFuZ2VzKTtcclxuICAgIH1cclxuICAgIG9uSW5wdXRTZWFyY2goKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZUl0ZW1QZXJQYWdlKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgIHRoaXMuZGF0YVNob3dpbmdTZXJ2aWNlLnNldFNhdGFTaG93aW5nU3ViamVjdCh7ICdjdXJyZW50UGFnZSc6IHRoaXMuY3VycmVudFBhZ2UsICdpdGVtUGVyUGFnZSc6IHRoaXMub3B0aW9ucy5yb3dQZXJQYWdlIH0pO1xyXG4gICAgfVxyXG4gICAgb25QYWdlQ2hhbmdlKGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlO1xyXG4gICAgICAgIHRoaXMuZGF0YVNob3dpbmdTZXJ2aWNlLnNldFNhdGFTaG93aW5nU3ViamVjdCh7ICdjdXJyZW50UGFnZSc6IGN1cnJlbnRQYWdlIH0pO1xyXG4gICAgfVxyXG4gICAgb25DbGlja09yZGVyQnkoY29sSXRlbTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGNvbEl0ZW0uc29ydGluZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5tYXAoKGl0ZW0pID0+IHsgaXRlbS5zb3J0aW5nT3JkZXIgPSAnJyB9KTtcclxuICAgICAgICAgICAgdGhpcy5vcmRlckJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5vcmRlckJ5LFxyXG4gICAgICAgICAgICAgICAgJ29yZGVyJzogdGhpcy5vcmRlckJ5Lm9yZGVyID09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYycsXHJcbiAgICAgICAgICAgICAgICAna2V5JzogY29sSXRlbS5rZXlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zW2luZGV4XVsnc29ydGluZ09yZGVyJ10gPSB0aGlzLm9yZGVyQnkub3JkZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Sb3dDbGljayhpdGVtOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJvd0NsaWNrRXZlbnQpXHJcbiAgICAgICAgICAgIHRoaXMucm93Q2xpY2suZW1pdChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoZWNrYm94U2VsZWN0KHJvd09iajogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDaGVja2JveGVzLmhhcyhyb3dPYmouX2F1dG9JZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoZWNrYm94ZXMuZGVsZXRlKHJvd09iai5fYXV0b0lkKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoZWNrTGlzdCA9IHRoaXMuc2VsZWN0ZWRDaGVja0xpc3QuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uX2F1dG9JZCAhPSByb3dPYmouX2F1dG9JZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hlY2tib3hlcy5hZGQocm93T2JqLl9hdXRvSWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hlY2tMaXN0LnB1c2gocm93T2JqKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGVja2JveENsaWNrLmVtaXQodGhpcy5zZWxlY3RlZENoZWNrTGlzdCk7XHJcbiAgICB9XHJcbiAgICBvbkNoZWNrYm94U2VsZWN0QWxsKGNoZWNrZWQpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hlY2tib3hlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hlY2tMaXN0ID0gW107XHJcbiAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoZWNrTGlzdCA9IHRoaXMuZGF0YS5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hlY2tib3hlcy5hZGQoaXRlbS5fYXV0b0lkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGVja2JveENsaWNrLmVtaXQodGhpcy5zZWxlY3RlZENoZWNrTGlzdCk7XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrUm93RGV0dGFpbEFycm93T3Blbihyb3dPYmo6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wZW5Sb3dEZXRhaWxzSWQuaGFzKHJvd09iai5fYXV0b0lkKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5Sb3dEZXRhaWxzSWQuZGVsZXRlKHJvd09iai5fYXV0b0lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlblJvd0RldGFpbHNJZC5hZGQocm93T2JqLl9hdXRvSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uQ2xpY2tSb3dEZXR0YWlsQWxsQXJyb3dPcGVuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wZW5Sb3dEZXRhaWxzSWQuc2l6ZSAhPSB0aGlzLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlblJvd0RldGFpbHNJZCA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlblJvd0RldGFpbHNJZC5hZGQoaXRlbS5fYXV0b0lkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlblJvd0RldGFpbHNJZCA9IG5ldyBTZXQoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZGVudGlmeShpbmRleCwgaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZGF0YVNob3dpbmdGbihjdXJyZW50UGFnZSwgaXRlbVBlclBhZ2UsIGxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuZGF0YVNob3dpbmcuc3RhcnQgPSBsZW5ndGggPT0gMCA/IDAgOiAoKGN1cnJlbnRQYWdlIC0gMSkgKiBpdGVtUGVyUGFnZSkgKyAxO1xyXG4gICAgICAgIHRoaXMuZGF0YVNob3dpbmcuZW5kID0gY3VycmVudFBhZ2UgKiBpdGVtUGVyUGFnZSA+IGxlbmd0aCA/IGxlbmd0aCA6IGN1cnJlbnRQYWdlICogaXRlbVBlclBhZ2U7XHJcbiAgICAgICAgdGhpcy5kYXRhU2hvd2luZy5sZW4gPSBsZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nKHZhbCkgeyBjb25zb2xlLmxvZyh2YWwpOyB9XHJcbn1cclxuIl19