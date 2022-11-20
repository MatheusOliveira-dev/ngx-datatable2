/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableComponent } from './ngx-datatable2.component';
import { CaptionComponent } from './caption/caption.component';
import { SearchPipe } from '../pipe/search.pipe';
import { SortPipe } from '../pipe/sort.pipe';
export class NgxDatatable2Module {
}
NgxDatatable2Module.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxDatatableComponent, SearchPipe, SortPipe, CaptionComponent],
                imports: [
                    FormsModule,
                    CommonModule,
                    NgxPaginationModule
                ],
                providers: [],
                exports: [NgxDatatableComponent, CaptionComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZTIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1hdGhldXNqb2xpdmVpcmEvbmd4LWRhdGF0YWJsZTIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L25neC1kYXRhdGFibGUyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSS9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFjN0MsTUFBTSxPQUFPLG1CQUFtQjs7O1lBVi9CLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDO2dCQUM3RSxPQUFPLEVBQUU7b0JBQ0gsV0FBVztvQkFDWCxZQUFZO29CQUNaLG1CQUFtQjtpQkFDdEI7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLENBQUM7YUFDckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmd4UGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ25neC1wYWdpbmF0aW9uJztcclxuXHJcbmltcG9ydCB7IE5neERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWRhdGF0YWJsZTIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FwdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY2FwdGlvbi9jYXB0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IFNlYXJjaFBpcGUgfSBmcm9tICcuLi9waXBlL3NlYXJjaC5waXBlJztcclxuaW1wb3J0IHsgU29ydFBpcGUgfSBmcm9tICcuLi9waXBlL3NvcnQucGlwZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRhU2hvd2luZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kYXRhLXNob3dpbmcuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW05neERhdGF0YWJsZUNvbXBvbmVudCwgU2VhcmNoUGlwZSwgU29ydFBpcGUsIENhcHRpb25Db21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTmd4UGFnaW5hdGlvbk1vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBleHBvcnRzOiBbTmd4RGF0YXRhYmxlQ29tcG9uZW50LCBDYXB0aW9uQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RGF0YXRhYmxlMk1vZHVsZSB7IH1cclxuIl19