function edit_items(no) {
  	var title = document.getElementById("title"+no).innerHTML;
  	var author = document.getElementById("author"+no).innerHTML;
  	var year = document.getElementById("year"+no).innerHTML;
  	var image = document.getElementById("img"+no);
  	var img_attr = image.getAttribute("src");
  	showForm();

  	input_title = document.getElementById("book_title");
  	input_title.value = title;
  	var input_author = document.getElementById("author_book");
  	input_author.value = author;
  	var input_year = document.getElementById("year_book");
  	input_year.value = year;
  	var input_img = document.getElementById("image_book");
  	input_img.value = img_attr;
}

function delete_items(no) {
	var question = confirm("Вы уверены?") 
	if (question === true) {
		document.getElementById("items"+no+"").outerHTML="";
	} 
}

function save_items(no) {
	var title_val = document.getElementById("book_title").value;
	var author_val = document.getElementById("author_book").value;
	var year_val = document.getElementById("year_book").value;
	

	document.getElementById("title"+no).innerHTML=title_val;
 	document.getElementById("author"+no).innerHTML=author_val;
 	document.getElementById("year"+no).innerHTML=year_val;
 	hideForm();
}

function add_items() {
	var new_title = document.getElementById("book_title").value;
	var new_author = document.getElementById("author_book").value;
	var new_year = document.getElementById("year_book").value;
	var new_image = document.getElementById("image_book").value;
	var table_len=document.getElementById("listofitems").childNodes.length-3;

	var new_items = document.createElement('div');
	new_items.className = 'items';
	new_items.id = 'items'+table_len;
	new_items.innerHTML = "<div class='img img"+table_len+"'><img src='"+new_image+"' alt='' class='cover'/></div><div class='items-info'><h3 class='book-title' id='title"+table_len+"'>"+new_title+"</h3><p class='book-author' id='author"+table_len+"'>"+new_author+"</p> <p class='book-year' id='year"+table_len+"'>"+new_year+"г.</p></div><div class='changes'><a href='#addBooks'><input type='button' id='edit_button"+table_len+"' value='Редактировать' class='button_action' onclick='edit_items("+table_len+")'></a><input type='button' value='Удалить' class='button_action' onclick='delete_items("+table_len+")'></div>";
	listofitems.appendChild(new_items);
}
function showForm() {
	var form = document.getElementsByClassName("edit-list")[0];
	form.classList.add("edit-list--active");
}
function hideForm(e) {
	var form = document.getElementsByClassName("edit-list")[0];
	form.classList.remove("edit-list--active");
	document.getElementById("book_title").value = "";
	document.getElementById("author_book").value = "";
	document.getElementById("year_book").value = "";
	document.getElementById("image_book").value = "";
}
