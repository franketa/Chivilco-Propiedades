<html>
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
  <link rel="stylesheet" href="submit.css">
</head>

<<body> 
  <div class="wraper">
<div class="mainform">


Gracias <?php echo $_POST["tnombre"]; ?>!<br>
<br>
Tu mensaje a sido enviado y recibiras una respuesta en:
<br>
 <?php echo $_POST["temail"]; ?>
 <br>
<br>

Tambien puede que se contacten contigo en:

<br>
<?php echo $_POST["ttelefono"]; ?>
<br>
<br>
<button class="btn btn-warning btn-lg" type="button" onclick="myFunction()" >Volver al Inicio</button> 

</div>

</div>

<script>
  function myFunction() {
    location.href = "index.html";
  }
</script>











</body>
</html>

