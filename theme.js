		var dcol = ["white","black"];
		function changeBCol() {
			var bodo=document.getElementById('bod');
			bodo.style.backgroundColor = dcol[1];
			bodo.style.color = dcol[0];
		}
		function white() {
			var bodo=document.getElementById('bod');
			bodo.style.backgroundColor = dcol[0];
			bodo.style.color = dcol[1];
		}