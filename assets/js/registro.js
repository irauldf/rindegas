function registrar() {
   let txtNombre = document.getElementById('txtNombre');
   let cboGasPara = document.getElementById('cboGasPara');
   let txtCorreo = document.getElementById('txtCorreo');
   let chkRecibirOferta = document.getElementById('chkRecibirOferta');

   let nombre = txtNombre.value
   let correo = txtCorreo.value

   if (nombre.length == 0 || correo.length == 0) {
      alert('Ingrese todos los datos para continuar.');
      return;
   }

   var formData = new FormData();
   formData.append('nombre', nombre);
   formData.append('gasPara', cboGasPara.value);
   formData.append('correo', correo);
   formData.append('recibirOfertas', chkRecibirOferta.checked ? 'SI' : 'NO');

   var xhr = new XMLHttpRequest();
   // xhr.responseType = 'json';

   xhr.onreadystatechange = function () {
      console.log(xhr.response);
      if (xhr.readyState == 4) {
         var json = JSON.parse(xhr.response);
         if (json.exito) {
            alert("Datos guardados");

            txtNombre.value = '';
            cboGasPara.value = 'Hogar'
            txtCorreo.value = '';
            chkRecibirOferta.checked = false;
         } else {
            alert("Ocurrió un error.");
         }
      }
   };

   xhr.open("POST", "registrar.php", true);
   xhr.send(formData);
}