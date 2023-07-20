function hitung() {
  document.getElementById("hasil").style.display = "none";
  
  var jk;
  var bb = document.getElementById("bb").value;
  var tb = document.getElementById("tb").value;
  var u = document.getElementById("umur").value;
  var ket;
  var desk;

  if (document.getElementById("pria").checked) {
    jk = "pria";
  } else if (document.getElementById("wanita").checked) {
    jk = "wanita";
  } else {
    jk = "null";
  }

  if (bb == 0 || tb == 0 || u == 0 || jk == "null") {
    return window.alert("Mohon isi semua data pada form !");
  }

  if (u < 18){
    return window.alert("Mohon maaf, kalkulator ini hanya untuk orang dewasa");
  }

  var hasil = bb / ((tb / 100) ^ 2);
  hasil = Math.round(hasil * 10)/10;

  if(jk == "pria"){
    if (hasil >= 30) {
      ket = "Anda kegemukan (Obesitas) !";
      desk = "<h5>Beberapa penyakit yang berasal dari kegemukan: </h5> <p> Diabetes <br> Hipertensi <br> Sakit Jantung <br> Osteoartritis </p>";
    } else if (hasil >= 25) {
      ket = "Anda kelebihan berat badan !";
      desk = "<h5>Beberapa cara menurunkan berat badan: </h5> <p> Olahraga <br> Puasa </p>";
  
    } else if (hasil >= 18.5) {
      ket = "Berat badan anda Ideal !";
      desk = "<h5>Bagus, Anda sudah memiliki berat badan yang ideal</h5> ";
    } else {
      ket = "Anda kekurangan berat badan !";
      desk = "<h5>Beberapa cara menaikan berat badan: </h5> <p> Menjaga pola makan <br> Mengkonsumsi makanan yang kaya dengan nutrisi </p>";
    }
  }else if (jk == "wanita"){
    if (hasil >= 30) {
      ket = "Kamu kegemukan nih ! (Obesitas)";
      desk = "<h5>Beberapa penyakit yang berasal dari kegemukan: </h5> <p> Diabetes <br> Hipertensi <br> Sakit Jantung <br> Osteoartritis </p>";
    } else if (hasil >= 25) {
      ket = "Berat badan kamu kelebihan nih !";
      desk = "<h5>Beberapa cara menurunkan berat badan: </h5> <p> Olahraga <br> Puasa </p>";
  
    } else if (hasil >= 18.5) {
      ket = "Yeay, berat badan kamu sudah ideal !";
      desk = "<h5>Bagus, Anda sudah memiliki berat badan yang ideal</h5> ";
    } else {
      ket = "Kamu kekurangan berat badan !";
      desk = "<h5>Beberapa cara menaikan berat badan: </h5> <p> Menjaga pola makan <br> Mengkonsumsi makanan yang kaya dengan nutrisi </p>";
    }
  }

  document.getElementById("ket").innerHTML = "<h4>" + ket + "</h4>";
  document.getElementById("nilai").innerHTML = "<h3>" + hasil + "</h3>";
  document.getElementById("desk").innerHTML = desk;

  document.getElementById("hasil").style.display = "block";
}

function reset() {
  document.querySelector('input[name="jk"]:checked').checked = false;
  document.getElementById("bb").value = "";
  document.getElementById("umur").value = "";
  document.getElementById("tb").value = "";
  document.getElementById("hasil").style.display = "none";
}
