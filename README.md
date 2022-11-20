# Ngx Data Table 2

**Ngx Data Table 2** is an angular library for presenting data in table. This library is easy to integrate in your angular component. This library supports search, pagination features, cell template, sorting, alignment, warping. You can also customize this library as your requirements.

Building this library is inspired by jQuery Datatable, ngx-easy-table, @swimlane/ngx-datatable and @tusharghoshbd/ngx-datatable.


## Demo
![](https://media2.giphy.com/media/U6eXMuh4OSAiuSsmiF/200.gif)


## Installation

As a prerequisite, you need [boostrap](https://getbootstrap.com/) library.

```ts
npm i @matheusjoliveira/ngx-datatable2
```



## Usage

#### Html file
```html
<ngx-datatable2
   tableClass = "table table-striped table-bordered table-hover"
   [data]="data"
   [options]="options" 
   [columns]="columns"
 >
 </ngx-datatable2 >
```

#### Ts file
```ts
options:any={};
data:any[] = [];
columns: any = {};

ngOnInit(): void {

   this.columns = [
        { key: 'id', title: "ID" },
        { key: 'name', title: 'Name' },
        { key: 'phone', title: 'Phone' },
        { key: 'company', title: 'Company'}
   ]
  
   this.data = [
        {
           "id": "1",
           "name": "Warren",
           "phone": "1-412-485-9725",
           "company": "Etiam Institute"
        },
        {
            "id": "2",
            "name": "Brendan",
            "phone": "1-724-406-2487",
            "company": "Enim Commodo Limited"
        }
    ]
}
```

#### Module file
```ts
import { NgxDatatable2Module } from '@matheusjoliveira/ngx-datatable2';

@NgModule({
   imports:[ 
             ... 
             NgxDatatable2Module
          ]
})
```


#### Default table options/configurations
```ts
{
   'emptyDataMessage': 'No data available in table',
   'rowClickEvent': false,
   'enableChangeRowPerPageMenu': true,
   'rowPerPageMenu': [10, 20, 50, 100],
   'rowPerPage': 10,
   'showLoader': false,
   'loaderText': 'Loading...',
   'checkboxes':false,
   'rowDetailTemplate': null,
   'enableSearch': true,
   'searchPlaceholder': 'Search',
   'showOnlyTotalRowsPerPage': false,
   'paginationLabels': {
        'showing': 'Showing',
        'to': 'to',
        'of': 'of',
        'entries': 'entries',
        'previousLabel': 'Previous',
        'nextLabel': 'Next'
    }
}
```
#### Default/mandatory column fields
```ts
{
   'key': '...',   // column key name | mandatory field 
   'title': '...', // Table column title | mandatory field
   'width': 'auto',  // default pin column width 100px 
   'sorting': true  // default true
   'pinned': false  // default true
   'align': { head: 'left', body: 'left' }, //default | left, right, center  
   'vAlign': { head: 'bottom', body: 'bottom' }, //default | middle, top, bottom
   'noWrap': { head: false, body: false} //default
   'cellTemplate':'...'  // For custom cell template
}
```

## Features
* Responsive
* Filtering
* Pagination
* Sorting
* Pinned column
* Checkbox features in table
* Row detail features
* Cell template customization
* Beautiful Table caption
* Beautify the Table header
* Cell text warping features
* Cell text alignment features
* Capable to modify the row per page
* Row click event
* Auto scrolling
* Easy to integrate and less CSS work


## Upcoming features
* Column wise search
* Row grouping features
* No-data template features
* loading template features


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
