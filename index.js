let selected = null;

// on submit function
function onFormSubmit() {
event.preventDefault();

var formData = getFormData();
if(selected === null) {
    insertNewRecord(formData)
} else {
    updateData(formData);
}
resetForm();

console.log(formData)
}

// getting data
function getFormData() {
    var formData = {}
    formData["productId"] = document.getElementById("productId").value
    formData["product"] = document.getElementById("product").value
    formData["qty"] = document.getElementById("qty").value
    formData["price"] = document.getElementById("price").value
    return formData;
}

// 
function insertNewRecord(data){
    var table = document.getElementById("productlist").getElementsByTagName('tbody')[0];
    var newR = table.insertRow(table.length);
    var cell1 = newR.insertCell(0);
    cell1.innerHTML = data.productId;
    var cell2 = newR.insertCell(1);
    cell2.innerHTML = data.product;
    var cell3 = newR.insertCell(2);
    cell3.innerHTML = data.qty;
    var cell4 = newR.insertCell(3);
    cell4.innerHTML = data.price;
    var cell5 = newR.insertCell(4);
    cell5.innerHTML = `
    <button id="edit" onClick='onEdit(this)'>Edit</button> <button id="delete" onClick="onDelete(this)">Delete</button>`
}

// edit
function onEdit(td) {
    selected = td.parentElement.parentElement;
    document.getElementById('productId').value = selected.cells[0].innerHTML;
    document.getElementById('product').value = selected.cells[1].innerHTML;
    document.getElementById('qty').value = selected.cells[2].innerHTML;
    document.getElementById('price').value = selected.cells[3].innerHTML;
}

// update data 
function updateData(formData) {
    selected.cells[0].innerHTML = formData.productId;
    selected.cells[1].innerHTML = formData.product;
    selected.cells[2].innerHTML = formData.qty;
    selected.cells[3].innerHTML = formData.price;
}

// on delete
function onDelete(td) {
    if(confirm('Do you want to delete this data?')) {
        row = td.parentElement.parentElement;
        document.getElementById('productlist').deleteRow(row.rowIndex)
    }
    resetForm()
}

// reset data
function resetForm() {
    document.getElementById('productId').value = '';
    document.getElementById('product').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('price').value = '';
}