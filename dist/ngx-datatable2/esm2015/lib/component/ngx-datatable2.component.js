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
            'rowPerPageMenu': [10, 20, 50, 100],
            'rowPerPage': 10,
            'loader': false,
            'checkboxes': false,
            'rowDetailTemplate': undefined,
            'searchPlaceholder': 'Search',
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
        //console.log(this.headerRef);
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
}
NgxDatatableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-datatable2',
                template: "<div color=\"darken\" class=\"jarviswidget\">\r\n    <!-- table caption -->\r\n    <header *ngIf=\"captionRef\">\r\n        <ng-content select=\"ngx-caption\"></ng-content>\r\n    </header>\r\n    <div class=\"dataTables_wrapper\">\r\n        <!-- search bar with page per item -->\r\n        <div class=\"row no-row-margin\" style=\"margin-top: 5px;\">\r\n            <div class=\"col-xs-6 col-sm-6 col-6 text-left\">\r\n                <label style=\"font-weight: 100;\">\r\n                    <input type=\"text\" [id]=\"'search_'+tableId\" [(ngModel)]=\"searchText\" (input)=\"onInputSearch()\"\r\n                        name=\"search\" [placeholder]=\"options.searchPlaceholder\" autocomplete=\"off\"\r\n                        style=\"border-radius: 0px;\" class=\"form-control input-md\" />\r\n                </label>\r\n            </div>\r\n            <div class=\"col-sm-6 col-xs-6 col-6 text-right\">\r\n                <label style=\"font-weight: 100;\">\r\n                    <select (change)=\"onChangeItemPerPage()\" style=\"border-radius: 0px;\"\r\n                        [(ngModel)]=\"options.rowPerPage\" name=\"rowPerPage\" class=\"form-control\"\r\n                        [id]=\"'itemPerPage_'+tableId\">\r\n                        <option *ngFor=\"let item of options.rowPerPageMenu\" [ngValue]=\"item\">{{item}}</option>\r\n                    </select>\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"zui-wrapper\">\r\n            <div class=\"zui-scroller\" [style.margin-left]=\"styleParams.pinnedScollerMarginLeft+'px'\">\r\n                <table [id]=\"tableId\" class=\" zui-table dataTable  {{tableClass}}\" role=\"grid\"\r\n                    aria-describedby=\"DataTables_Table_0_info\" width=\"100%\">\r\n                    <!-- table head code -->\r\n                    <thead _ngcontent-qqc-c0=\"\">\r\n                        <tr role=\"row\">\r\n                            <th *ngIf=\"options.rowDetailTemplate\" style=\" text-align: center; vertical-align: middle;\">\r\n                                <div (click)=\"onClickRowDettailAllArrowOpen()\"\r\n                                    [class.triangle-right]=\"this.openRowDetailsId.size != this.data.length || this.data.length == 0 \"\r\n                                    [class.triangle-down]=\"this.openRowDetailsId.size == this.data.length && this.data.length != 0\">\r\n                                </div>\r\n                            </th>\r\n                            <!-- [style.min-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                [style.max-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                [class.zui-sticky-col]=\"options.checkboxAsPin && styleParams['pinnedFlag']\" -->\r\n                            <th *ngIf=\"options.checkboxes\" style=\"text-align: center; vertical-align: middle;\">\r\n                                <input class=\"ngx-form-checkbox-head\" type=\"checkbox\" id=\"checkbox-all\"\r\n                                    [checked]=\"this.selectedCheckboxes.size == this.data.length && this.data.length != 0\"\r\n                                    (change)=\"onCheckboxSelectAll($event.target.checked)\" />\r\n                            </th>\r\n                            <th *ngFor=\"let column of columns; let i = index; trackBy: identify\"\r\n                                (click)=\"onClickOrderBy(column, i)\" [style.min-width]=\"column.width+'px'\"\r\n                                [style.max-width]=\"column.width+'px'\"\r\n                                [style.vertical-align]=\"column.vAlign && column.vAlign.head\"\r\n                                [style.text-align]=\"column.align && column.align.head\"\r\n                                [class.zui-sticky-col]=\"column.pinned\"\r\n                                [style.margin-left]=\"column.pinnedMarginLeft+'px'\" yy>\r\n                                <span [innerHTML]=\"column.title\" [class.wrap]=\"column.noWrap && column.noWrap.head\"\r\n                                    [class.sort-by]=\"column.sorting && column.sortingOrder==''\"\r\n                                    [class.sort-by-asc]=\"column.sorting && column.sortingOrder=='asc'\"\r\n                                    [class.sort-by-desc]=\"column.sorting && column.sortingOrder=='desc'\"></span>\r\n                                <!-- [ngClass]=\"{sort-by:column.sorting==true, sort-by-asc:column.sorting==true&&column.sortingOrder=='asc', sort-by-desc:column.sorting==true&&column.sortingOrder=='desc'}\"  -->\r\n                                <!-- <div class=\"sorting\"style=\"display: inline;\"><span>&#8593;</span> <span>&#8595;</span></div>\t -->\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <ng-container *ngFor=\"let row of data \r\n                            | search:searchText \r\n                            | sort:orderBy \r\n                            | paginate: { id: 'pagination_'+tableId, itemsPerPage: options.rowPerPage, currentPage:currentPage }; \r\n                            trackBy: identify; let i = index;\">\r\n                            <tr [ngClass]=\"{ 'cus-cursor-pointer':options.rowClickEvent}\" (click)=\"onRowClick(row)\">\r\n                                <!-- row Detail code -->\r\n                                <td *ngIf=\"options.rowDetailTemplate\"\r\n                                    style=\" text-align: center; vertical-align: middle;\">\r\n                                    <div (click)=\"onClickRowDettailArrowOpen(row)\"\r\n                                        [class.triangle-right]=\"!openRowDetailsId.has(row._autoId)\"\r\n                                        [class.triangle-down]=\"openRowDetailsId.has(row._autoId)\">\r\n                                    </div>\r\n                                </td>\r\n                                <!-- checck box code -->\r\n                                <!-- [style.min-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                    [style.max-width]=\"options.checkboxAsPin && styleParams.pinnedFlag ? '13px' : 'auto'\"\r\n                                    [class.zui-sticky-col]=\"options.checkboxAsPin && styleParams['pinnedFlag']\" -->\r\n                                <td *ngIf=\"options.checkboxes\" style=\"text-align: center; vertical-align: middle;\">\r\n                                    <input class=\"ngx-form-checkbox\" type=\"checkbox\" id=\"checkbox-{{row._autoId}}\"\r\n                                        [checked]=\"selectedCheckboxes.has(row._autoId)\"\r\n                                        (change)=\"onCheckboxSelect(row)\" />\r\n                                </td>\r\n                                <!-- dynamacally generated column -->\r\n                                <td *ngFor=\"let column of columns;let j=index;\" [style.min-width]=\"column.width+'px'\"\r\n                                    [style.max-width]=\"column.width+'px'\"\r\n                                    [class.wrap]=\"column.noWrap && column.noWrap.body\"\r\n                                    [style.vertical-align]=\"column.vAlign && column.vAlign.body\"\r\n                                    [style.text-align]=\"column.align && column.align.body\"\r\n                                    [class.zui-sticky-col]=\"column.pinned\"\r\n                                    [style.margin-left]=\"column.pinnedMarginLeft+'px'\">\r\n                                    <ng-container *ngIf=\"!column.cellTemplate\">{{row[column.key]}}</ng-container>\r\n                                    <ng-container *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\"\r\n                                        [ngTemplateOutletContext]=\"{\r\n                                            $implicit: row,\r\n                                            rowIndex: row._autoId,\r\n                                            columnValue: row[column.key]\r\n                                        }\">\r\n                                    </ng-container>\r\n\r\n                                </td>\r\n                            </tr>\r\n                            <!-- row detail desccription code -->\r\n                            <tr *ngIf=\"options.rowDetailTemplate && openRowDetailsId.has(row._autoId) \">\r\n                                <td\r\n                                    [attr.colspan]=\"columns.length+(options.checkboxes?1:0)+(options.rowDetailTemplate?1:0)\">\r\n                                    <ng-container [ngTemplateOutlet]=\"options.rowDetailTemplate\"\r\n                                        [ngTemplateOutletContext]=\"{\r\n                                            $implicit: row,\r\n                                            rowIndex: row._autoId\r\n                                        }\">\r\n                                    </ng-container>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n\r\n                        <tr class=\"odd\" *ngIf=\"!data.length && options.loader == false\">\r\n                            <td valign=\"top\"\r\n                                [attr.colspan]=\"columns.length+(options.checkboxes?1:0)+(options.rowDetailTemplate?1:0)\"\r\n                                class=\"dataTables_empty\">\r\n                                {{options.emptyDataMessage}}\r\n                            </td>\r\n                        </tr>\r\n                        <tr class=\"odd\" *ngIf=\"options.loader == true\">\r\n                            <td valign=\"top\"\r\n                                [attr.colspan]=\"columns.length+(options.checkboxes?1:0)+(options.rowDetailTemplate?1:0)\"\r\n                                class=\"dataTables_empty\">\r\n                                Loading...\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"row no-row-margin\" style=\"margin-top: 5px;\">\r\n            <div class=\"col-sm-6 col-xs-12 col-12 custom-data-entries-align\">\r\n                <div> {{options.paginationLabels.showing}} {{dataShowing.start}} {{options.paginationLabels.to}}\r\n                    {{dataShowing.end}} {{options.paginationLabels.of}} {{dataShowing.len}}\r\n                    {{options.paginationLabels.entries}}</div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6 col-12 custom-pagination-align\">\r\n                <pagination-controls [id]=\"'pagination_'+tableId\" (pageChange)=\"onPageChange($event)\"\r\n                    [previousLabel]=\"options.paginationLabels.previousLabel\" [nextLabel]=\"options.paginationLabels.nextLabel\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZTIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1hdGhldXNqb2xpdmVpcmEvbmd4LWRhdGF0YWJsZTIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L25neC1kYXRhdGFibGUyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sRUFBaUIsWUFBWSxFQUFFLFlBQVksRUFBaUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbE0sT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQVUvRCxNQUFNLE9BQU8scUJBQXFCOzs7OztJQWtFOUIsWUFDWSxrQkFBc0MsRUFDdEMsR0FBc0I7UUFEdEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQW5FMUIsa0JBQWEsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNuRCxrQkFBYSxHQUFHO1lBQ3BCLGtCQUFrQixFQUFFLDRCQUE0QjtZQUNoRCxlQUFlLEVBQUUsS0FBSztZQUN0QixnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQztZQUNuQyxZQUFZLEVBQUUsRUFBRTtZQUNoQixRQUFRLEVBQUUsS0FBSztZQUNmLFlBQVksRUFBRSxLQUFLO1lBQ25CLG1CQUFtQixFQUFFLFNBQVM7WUFDOUIsbUJBQW1CLEVBQUUsUUFBUTtZQUM3QixrQkFBa0IsRUFDbEI7Z0JBQ0ksU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxJQUFJO2dC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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBJbnB1dCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZCwgQWZ0ZXJDb250ZW50SW5pdCwgVGVtcGxhdGVSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IERhdGFTaG93aW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2RhdGEtc2hvd2luZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FwdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY2FwdGlvbi9jYXB0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmd4LWRhdGF0YWJsZTInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL25neC1kYXRhdGFibGUyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL25neC1kYXRhdGFibGUyLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgcHJvdmlkZXJzOiBbRGF0YVNob3dpbmdTZXJ2aWNlXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neERhdGF0YWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuICAgIHByaXZhdGUgbmdVbnN1YnNjcmliZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgICBwcml2YXRlIGN1c3RvbU9wdGlvbnMgPSB7XHJcbiAgICAgICAgJ2VtcHR5RGF0YU1lc3NhZ2UnOiAnTm8gZGF0YSBhdmFpbGFibGUgaW4gdGFibGUnLFxyXG4gICAgICAgICdyb3dDbGlja0V2ZW50JzogZmFsc2UsXHJcbiAgICAgICAgJ3Jvd1BlclBhZ2VNZW51JzogWzEwLCAyMCwgNTAsIDEwMF0sXHJcbiAgICAgICAgJ3Jvd1BlclBhZ2UnOiAxMCxcclxuICAgICAgICAnbG9hZGVyJzogZmFsc2UsXHJcbiAgICAgICAgJ2NoZWNrYm94ZXMnOiBmYWxzZSxcclxuICAgICAgICAncm93RGV0YWlsVGVtcGxhdGUnOiB1bmRlZmluZWQsXHJcbiAgICAgICAgJ3NlYXJjaFBsYWNlaG9sZGVyJzogJ1NlYXJjaCcsXHJcbiAgICAgICAgJ3BhZ2luYXRpb25MYWJlbHMnOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3Nob3dpbmcnOiAnU2hvd2luZycsXHJcbiAgICAgICAgICAgICd0byc6ICd0bycsXHJcbiAgICAgICAgICAgICdvZic6ICdvZicsXHJcbiAgICAgICAgICAgICdlbnRyaWVzJzogJ2VudHJpZXMnLFxyXG4gICAgICAgICAgICAncHJldmlvdXNMYWJlbCc6ICdQcmV2aW91cycsXHJcbiAgICAgICAgICAgICduZXh0TGFiZWwnOiAnTmV4dCcsXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgX29wdGlvbnM6IGFueSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfZGF0YTogYW55W10gPSBbXTtcclxuXHJcblxyXG4gICAgQElucHV0KCkgdGFibGVJZCA9ICduZ3hEYXRhVGFibGVJZCc7XHJcbiAgICBASW5wdXQoKSBjb2x1bW5zOiBhbnlbXSA9IFtdO1xyXG4gICAgQElucHV0KCkgc2V0IGRhdGEoYXJyOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBbXTtcclxuICAgICAgICBhcnIuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICAgICAgICAnX2F1dG9JZCc6IGluZGV4XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGdldCBkYXRhKCk6IGFueVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgb3B0aW9ucyhvYmo6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuY3VzdG9tT3B0aW9ucyxcclxuICAgICAgICAgICAgLi4udGhpcy5fb3B0aW9ucyxcclxuICAgICAgICAgICAgLi4ub2JqXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdldCBvcHRpb25zKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBASW5wdXQoKSB0YWJsZUNsYXNzOiBhbnk7XHJcbiAgICBAT3V0cHV0KCkgcm93Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgY2hlY2tib3hDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBDb250ZW50Q2hpbGQoQ2FwdGlvbkNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIGNhcHRpb25SZWY6IENhcHRpb25Db21wb25lbnRcclxuXHJcbiAgICBzZWFyY2hUZXh0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgb3JkZXJCeTogeyBvcmRlcjogc3RyaW5nLCBrZXk6IHN0cmluZyB9ID0geyBvcmRlcjogJycsIGtleTogJycgfTtcclxuICAgIGRhdGFTaG93aW5nOiB7IHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBsZW46IG51bWJlciB9ID0geyBzdGFydDogMCwgZW5kOiAwLCBsZW46IDAgfVxyXG4gICAgc3R5bGVQYXJhbXM6IGFueSA9IHsgcGlubmVkU2NvbGxlck1hcmdpbkxlZnQ6IDAsIHBpbm5lZEZsYWc6IGZhbHNlIH07XHJcblxyXG4gICAgc2VsZWN0ZWRDaGVja2JveGVzID0gbmV3IFNldCgpO1xyXG4gICAgc2VsZWN0ZWRDaGVja0xpc3Q6IGFueVtdID0gW107XHJcblxyXG4gICAgb3BlblJvd0RldGFpbHNJZCA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGRhdGFTaG93aW5nU2VydmljZTogRGF0YVNob3dpbmdTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtWydzb3J0aW5nJ10gPSBpdGVtLmhhc093blByb3BlcnR5KCdzb3J0aW5nJykgPyBpdGVtWydzb3J0aW5nJ10gOiB0cnVlO1xyXG4gICAgICAgICAgICBpdGVtWydoZWFkQWxpZ24nXSA9IGl0ZW0uaGFzT3duUHJvcGVydHkoJ2hlYWRBbGlnbicpID8gaXRlbVsnaGVhZEFsaWduJ10udG9Mb3dlckNhc2UoKSA6ICdsZWZ0JztcclxuICAgICAgICAgICAgaXRlbVsnc29ydGluZ09yZGVyJ10gPSAnJztcclxuXHJcbiAgICAgICAgICAgIGlmICgoaXRlbS5oYXNPd25Qcm9wZXJ0eSgncGlubmVkJykgJiYgaXRlbVsncGlubmVkJ10gPT0gdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgIC8qKiB3b3JraW5nIGZvciBwaW4gdGhlIGNoZWNrYm94IGNvbHVtbiAqL1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdHlsZVBhcmFtc1sncGlubmVkRmxhZyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGlmICggdGhpcy5vcHRpb25zLmNoZWNrYm94ZXMgPT0gdHJ1ZSAmJiB0aGlzLnN0eWxlUGFyYW1zWydwaW5uZWRGbGFnJ10gJiYgaSA9PTApIHsgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zdHlsZVBhcmFtcy5waW5uZWRTY29sbGVyTWFyZ2luTGVmdCA9IDMzO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW1bJ3dpZHRoJ10gPSBpdGVtLmhhc093blByb3BlcnR5KCd3aWR0aCcpID8gaXRlbVsnd2lkdGgnXSA6IDEwMDtcclxuICAgICAgICAgICAgICAgIGl0ZW1bJ3Bpbm5lZE1hcmdpbkxlZnQnXSA9IHRoaXMuc3R5bGVQYXJhbXMucGlubmVkU2NvbGxlck1hcmdpbkxlZnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlUGFyYW1zLnBpbm5lZFNjb2xsZXJNYXJnaW5MZWZ0ICs9IHBhcnNlSW50KGl0ZW1bJ3dpZHRoJ10pICsgMjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmRhdGFTaG93aW5nRm4odGhpcy5jdXJyZW50UGFnZSwgdGhpcy5vcHRpb25zLnJvd1BlclBhZ2UsIHRoaXMuZGF0YS5sZW5ndGgpXHJcblxyXG4gICAgICAgIC8qKiBzdWJzY3JpcHRpb24gbGlzdCAqL1xyXG4gICAgICAgIHRoaXMuZGF0YVNob3dpbmdTZXJ2aWNlLmRhdGFTaG93aW5nU3ViamVjdC5zdWJzY3JpYmUoc3ViRGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHN1YkRhdGFbJ2l0ZW1QZXJQYWdlJ10gPSBzdWJEYXRhLmhhc093blByb3BlcnR5KCdpdGVtUGVyUGFnZScpID8gc3ViRGF0YS5pdGVtUGVyUGFnZSA6IHRoaXMub3B0aW9ucy5yb3dQZXJQYWdlO1xyXG4gICAgICAgICAgICBzdWJEYXRhWydjdXJyZW50UGFnZSddID0gc3ViRGF0YS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudFBhZ2UnKSA/IHN1YkRhdGEuY3VycmVudFBhZ2UgOiB0aGlzLmN1cnJlbnRQYWdlO1xyXG4gICAgICAgICAgICBzdWJEYXRhWydsZW4nXSA9IHN1YkRhdGEuaGFzT3duUHJvcGVydHkoJ2xlbicpID8gc3ViRGF0YS5sZW4gOiB0aGlzLmRhdGFTaG93aW5nLmxlbjtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU2hvd2luZ0ZuKHN1YkRhdGEuY3VycmVudFBhZ2UsIHN1YkRhdGEuaXRlbVBlclBhZ2UsIHN1YkRhdGEubGVuKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuaGVhZGVyUmVmKTtcclxuICAgIH1cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGNoYW5nZXMpO1xyXG4gICAgfVxyXG4gICAgb25JbnB1dFNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlSXRlbVBlclBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgICAgdGhpcy5kYXRhU2hvd2luZ1NlcnZpY2Uuc2V0U2F0YVNob3dpbmdTdWJqZWN0KHsgJ2N1cnJlbnRQYWdlJzogdGhpcy5jdXJyZW50UGFnZSwgJ2l0ZW1QZXJQYWdlJzogdGhpcy5vcHRpb25zLnJvd1BlclBhZ2UgfSk7XHJcbiAgICB9XHJcbiAgICBvblBhZ2VDaGFuZ2UoY3VycmVudFBhZ2UpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gY3VycmVudFBhZ2U7XHJcbiAgICAgICAgdGhpcy5kYXRhU2hvd2luZ1NlcnZpY2Uuc2V0U2F0YVNob3dpbmdTdWJqZWN0KHsgJ2N1cnJlbnRQYWdlJzogY3VycmVudFBhZ2UgfSk7XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrT3JkZXJCeShjb2xJdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoY29sSXRlbS5zb3J0aW5nID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLm1hcCgoaXRlbSkgPT4geyBpdGVtLnNvcnRpbmdPcmRlciA9ICcnIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm9yZGVyQnkgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLm9yZGVyQnksXHJcbiAgICAgICAgICAgICAgICAnb3JkZXInOiB0aGlzLm9yZGVyQnkub3JkZXIgPT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJyxcclxuICAgICAgICAgICAgICAgICdrZXknOiBjb2xJdGVtLmtleVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnNbaW5kZXhdWydzb3J0aW5nT3JkZXInXSA9IHRoaXMub3JkZXJCeS5vcmRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblJvd0NsaWNrKGl0ZW06IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucm93Q2xpY2tFdmVudClcclxuICAgICAgICAgICAgdGhpcy5yb3dDbGljay5lbWl0KGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hlY2tib3hTZWxlY3Qocm93T2JqOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENoZWNrYm94ZXMuaGFzKHJvd09iai5fYXV0b0lkKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hlY2tib3hlcy5kZWxldGUocm93T2JqLl9hdXRvSWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hlY2tMaXN0ID0gdGhpcy5zZWxlY3RlZENoZWNrTGlzdC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5fYXV0b0lkICE9IHJvd09iai5fYXV0b0lkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGVja2JveGVzLmFkZChyb3dPYmouX2F1dG9JZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGVja0xpc3QucHVzaChyb3dPYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2xpY2suZW1pdCh0aGlzLnNlbGVjdGVkQ2hlY2tMaXN0KTtcclxuICAgIH1cclxuICAgIG9uQ2hlY2tib3hTZWxlY3RBbGwoY2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGVja2JveGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGVja0xpc3QgPSBbXTtcclxuICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hlY2tMaXN0ID0gdGhpcy5kYXRhLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGVja2JveGVzLmFkZChpdGVtLl9hdXRvSWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoZWNrYm94Q2xpY2suZW1pdCh0aGlzLnNlbGVjdGVkQ2hlY2tMaXN0KTtcclxuICAgIH1cclxuICAgIG9uQ2xpY2tSb3dEZXR0YWlsQXJyb3dPcGVuKHJvd09iajogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3BlblJvd0RldGFpbHNJZC5oYXMocm93T2JqLl9hdXRvSWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlblJvd0RldGFpbHNJZC5kZWxldGUocm93T2JqLl9hdXRvSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuUm93RGV0YWlsc0lkLmFkZChyb3dPYmouX2F1dG9JZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25DbGlja1Jvd0RldHRhaWxBbGxBcnJvd09wZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3BlblJvd0RldGFpbHNJZC5zaXplICE9IHRoaXMuZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuUm93RGV0YWlsc0lkID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuUm93RGV0YWlsc0lkLmFkZChpdGVtLl9hdXRvSWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuUm93RGV0YWlsc0lkID0gbmV3IFNldCgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlkZW50aWZ5KGluZGV4LCBpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkYXRhU2hvd2luZ0ZuKGN1cnJlbnRQYWdlLCBpdGVtUGVyUGFnZSwgbGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU2hvd2luZy5zdGFydCA9IGxlbmd0aCA9PSAwID8gMCA6ICgoY3VycmVudFBhZ2UgLSAxKSAqIGl0ZW1QZXJQYWdlKSArIDE7XHJcbiAgICAgICAgdGhpcy5kYXRhU2hvd2luZy5lbmQgPSBjdXJyZW50UGFnZSAqIGl0ZW1QZXJQYWdlID4gbGVuZ3RoID8gbGVuZ3RoIDogY3VycmVudFBhZ2UgKiBpdGVtUGVyUGFnZTtcclxuICAgICAgICB0aGlzLmRhdGFTaG93aW5nLmxlbiA9IGxlbmd0aDtcclxuICAgIH1cclxufVxyXG4iXX0=