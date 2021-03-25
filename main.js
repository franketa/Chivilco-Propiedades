



/*GSAP*/

gsap.set('#h1Chivilco', {
   x: -1000,
});


gsap.to('#h1Chivilco', {
   duration: 3,
   x: 0,
   opacity: 1,
   ease: 'power1'
});

gsap.set('#h1busqueda', {
   y: 150,
});
gsap.to('#h1busqueda', {
   duration: 1,
   y: 0,
   opacity: 1,
   ease: 'power1',
   delay: 3
});

gsap.set('#fields_contact', {
   opacity: 0,
});
gsap.to('#fields_contact', {
   opacity: 1,
});


/**/
let propiedadGlobalHTMLBefore;
let propiedadGlobalParent;
let propiedadGlobal;

let propiedades = document.querySelector('#propiedades-wraper');
propiedades.onclick = (event) => {
   let $propiedadseleccionada = event.target;
   if ($propiedadseleccionada.classList.contains('btn')) {
      modalHandler($propiedadseleccionada)
      console.log(event.currentTarget)
   }


}

function modalHandler(target) {
   let elementoAModal = target;
   propiedadGlobal = target;
   let modalContent = document.querySelector('.modal-body');
   propiedadGlobalHTMLBefore = elementoAModal.parentNode.parentNode.innerHTML;
   elementoAModal.classList.add('oculto')
   modalContent.innerHTML = elementoAModal.parentNode.parentNode.innerHTML;
   propiedadGlobalParent = elementoAModal.parentNode.parentNode
   elementoAModal.parentNode.parentNode.innerHTML = "''";


}
function modalReverse() {
   if (propiedadGlobal.classList.contains('oculto')) {
      propiedadGlobal.classList.remove('oculto')
   }
   propiedadGlobalParent.innerHTML = propiedadGlobalHTMLBefore;
}

/**SCROLL TO TOP */
const $btnToTop = document.querySelector('.fa-arrow-circle-up');

$btnToTop.addEventListener('click', function () {

   window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth"
   })
})


/*fetchea todos los forms a validar por bootstrap */



const forms = document.querySelectorAll('.needs-validation');

// Loop over them and prevent submission
Array.prototype.slice.call(forms).forEach((form) => {
   form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
         event.preventDefault();
         event.stopPropagation();
      }
      form.classList.add('was-validated');
   }, false);
});
;

/*form saver 

let guardarinfocform= () =>{
   // Get the data from each element on the form.
   const name = document.querySelector('#contact-name');
   const age = document.querySelector('#contact-cellphone');
   const email = document.querySelector('txtEmail');
   const country = document.querySelector('selCountry');
   const msg = document.querySelector('msg');
   
   // This variable stores all the data.
   let data = 
       '\r Name: ' + name.value + ' \r\n ' + 
       'Age: ' +age.value + ' \r\n ' + 
       'Email: ' + email.value + ' \r\n ' + 
       'Country: ' + country.value + ' \r\n ' + 
       'Message: ' + msg.value;
   
   // Convert the text to BLOB.
   const textToBLOB = new Blob([data], { type: 'text/plain' });
   const sFileName = 'formData.txt';	   // The file to save the data.

   let newLink = document.createElement("a");
   newLink.download = sFileName;

   if (window.webkitURL != null) {
       newLink.href = window.webkitURL.createObjectURL(textToBLOB);
   }
   else {
       newLink.href = window.URL.createObjectURL(textToBLOB);
       newLink.style.display = "none";
       document.body.appendChild(newLink);
   }

   newLink.click(); 
}
*/