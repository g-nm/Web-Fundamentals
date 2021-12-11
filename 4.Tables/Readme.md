## Introduction to tables

The table element is used to display tabular data. THis is data which is normally displayed in a spreadsheet in the form of rows and columns.
The below is an example of a simple interview

```html
<table>
	<tr>
		<th colspan="2">Name</th>
		<th>ID</th>
		<th>Height</th>
	</tr>

	<tr>
		<td>George</td>
		<td>1</td>
		<td>200</td>
	</tr>
	<tr>
		<td>John</td>
		<td>2</td>
		<td>100</td>
	</tr>
	<tr>
		<td>Mary</td>
		<td>4</td>
		<td>250</td>
	</tr>
</table>
```

We can also add semantic tags to the header and footer to improve the semantics of the table.
_When you use a ,thead there must be no tr as a direct child of the table_

```html
<table>
	<thead>
		<tr>
			<th colspan="2">Name</th>
			<th>ID</th>
			<th>Height</th>
		</tr>
	</thead>
	<tfoot>
		<tr>
			<th colspan="2">Name</th>
			<th>ID</th>
			<th>Height</th>
		</tr>
	</tfoot>
	<tbody>
		<tr>
			<td>George</td>
			<td>1</td>
			<td>200</td>
		</tr>
		<tr>
			<td>John</td>
			<td>2</td>
			<td>100</td>
		</tr>
		<tr>
			<td>Mary</td>
			<td>4</td>
			<td>250</td>
		</tr>
	</tbody>
</table>
```
