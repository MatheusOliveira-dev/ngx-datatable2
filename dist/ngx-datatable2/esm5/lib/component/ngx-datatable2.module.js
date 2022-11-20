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
var NgxDatatableModule = /** @class */ (function () {
    function NgxDatatableModule() {
    }
    NgxDatatableModule.decorators = [
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
    return NgxDatatableModule;
}());
export { NgxDatatableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZTIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1hdGhldXNqb2xpdmVpcmEvbmd4LWRhdGF0YWJsZTIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L25neC1kYXRhdGFibGUyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSS9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJN0M7SUFBQTtJQVVrQyxDQUFDOztnQkFWbEMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHFCQUFxQixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLENBQUM7b0JBQzdFLE9BQU8sRUFBRTt3QkFDSCxXQUFXO3dCQUNYLFlBQVk7d0JBQ1osbUJBQW1CO3FCQUN0QjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsQ0FBQztpQkFDckQ7O0lBQ2lDLHlCQUFDO0NBQUEsQUFWbkMsSUFVbUM7U0FBdEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE5neFBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tICduZ3gtcGFnaW5hdGlvbic7XHJcblxyXG5pbXBvcnQgeyBOZ3hEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tICcuL25neC1kYXRhdGFibGUyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NhcHRpb24vY2FwdGlvbi5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBTZWFyY2hQaXBlIH0gZnJvbSAnLi4vcGlwZS9zZWFyY2gucGlwZSc7XHJcbmltcG9ydCB7IFNvcnRQaXBlIH0gZnJvbSAnLi4vcGlwZS9zb3J0LnBpcGUnO1xyXG5cclxuaW1wb3J0IHsgRGF0YVNob3dpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGF0YS1zaG93aW5nLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtOZ3hEYXRhdGFibGVDb21wb25lbnQsIFNlYXJjaFBpcGUsIFNvcnRQaXBlLCBDYXB0aW9uQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5neFBhZ2luYXRpb25Nb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZXhwb3J0czogW05neERhdGF0YWJsZUNvbXBvbmVudCwgQ2FwdGlvbkNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neERhdGF0YWJsZU1vZHVsZSB7IH1cclxuIl19