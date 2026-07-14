
// (() => {
//   'use strict';

//   const forms = document.querySelectorAll('.needs-validation');

//   Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event => {

//       console.log("Submit button clicked");
//       console.log(form.checkValidity());

//       if (!form.checkValidity()) {
//         console.log("Form is invalid");
//         event.preventDefault();
//         event.stopPropagation();
//       }

//       form.classList.add('was-validated');
//     }, false);
//   });
// })();

// alert("script.js is loaded");

// alert("Script loaded");

// (() => {
//   // 'use strict';

//   // const forms = document.querySelectorAll('.needs-validation');

//   // alert("Forms found: " + forms.length);

//   // Array.from(forms).forEach(form => {
//   //   form.addEventListener('submit', event => {

//   //     alert("Submit clicked");

//   //     if (!form.checkValidity()) {
//   //       alert("Form is invalid");
//   //       event.preventDefault();
//   //       event.stopPropagation();
//   //     }

//   //     form.classList.add('was-validated');
//   //   });
//   });
// })();

(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {

      console.log("Submit clicked");
      console.log("checkValidity:", form.checkValidity());

      const comment = document.getElementById("comment");
      console.log("Comment value:", `"${comment.value}"`);
      console.log("Comment valid:", comment.checkValidity());

      if (!form.checkValidity()) {
        console.log("Form is invalid");
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    });
  });
})();