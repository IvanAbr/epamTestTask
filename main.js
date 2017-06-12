function edit_items(no) {
  	var title = document.getElementById("title"+no).innerHTML;
  	var author = document.getElementById("author"+no).innerHTML;
  	var year = document.getElementById("year"+no).innerHTML;
  	var image = document.getElementById("img"+no).innerHTML;

  	input_title = document.getElementById("book_title");
  	input_title.value = title;
  	var input_author = document.getElementById("author_book");
  	author_book.value = author;
  	var input_year = document.getElementById("year_book");
  	year_book.value = year;
  	var input_image = document.getElementById("image_book");
  	input_image.value = image;
}

function delete_items(no) {
 document.getElementById("items"+no+"").outerHTML="";
}

function save_items(no) {
	var title_val = document.getElementById("book_title").value;
	var author_val = document.getElementById("author_book").value;
	var year_val = document.getElementById("year_book").value;
	

	document.getElementById("title"+no).innerHTML=title_val;
 	document.getElementById("author"+no).innerHTML=author_val;
 	document.getElementById("year"+no).innerHTML=year_val;
}

function add_items() {
	var new_title = document.getElementById("book_title").value;
	var new_author = document.getElementById("author_book").value;
	var new_year = document.getElementById("year_book").value;
	var new_image = document.getElementById("image_book").value;

	var table_len=document.getElementById("listofitems").childNodes.length-3;
 	console.log(table_len);

	var new_items = document.createElement('div');
	new_items.className = 'items';
	new_items.id = 'items'+table_len;
	new_items.innerHTML = "<div class='img img"+table_len+"'><img src='"+ new_image +"' alt='' class='cover'/></div><div class='items-info'><h3 class='book-title' id='title"+table_len+"'>"+new_title+"</h3><p class='book-author' id='author"+table_len+"'>"+new_author+"</p> <p class='book-year' id='year"+table_len+"'>"+new_year+"г.</p></div><div class='changes'><a href='#addBooks'><input type='button' id='edit_button"+table_len+"' value='Редактировать' class='edit' onclick='edit_items("+table_len+")'></a><input type='button' value='Удалить' class='delete' onclick='delete_items("+table_len+")'></div>";
	listofitems.appendChild(new_items);

}

initialState = [{},{}]