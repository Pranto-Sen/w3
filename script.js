document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar-list');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close');

    // Open modal when clicking navbar items
    ['anywhere', 'anyweek', 'addguests'].forEach(id => {
        navbar.querySelector(`#${id}`).onclick = function() {
            openModal(`modal-${id}`);
        };
    });

    // Handle section switching within modals
    modals.forEach(modal => {
        const modalSections = modal.querySelectorAll('.modal-header h3');
        modalSections.forEach((section, index) => {
            section.onclick = function() {
                showSection(modal, index);
            };
        });
    });

    // Close button functionality
    closeBtns.forEach(btn => {
        btn.onclick = function() {
            closeAllModals();
        };
    });

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            closeAllModals();
        }
    };
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    
    // Show the appropriate section based on which navbar item was clicked
    if (modalId === 'modal-anywhere') showSection(modal, 0);
    if (modalId === 'modal-anyweek') showSection(modal, 1);
    if (modalId === 'modal-addguests') showSection(modal, 2);
}

function showSection(modal, index) {
    const sections = modal.querySelectorAll('.modal-body .section');
    sections.forEach((section, i) => {
        section.style.display = i === index ? 'block' : 'none';
    });
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// calender

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  
  const monthYearElement = document.getElementById('month-year');
  const calendarGrid = document.getElementById('calendar-grid');
  
  function generateCalendar() {
      // Clear previous calendar
      calendarGrid.innerHTML = '';
  
      // Set the month and year in the header
      monthYearElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
  
      // Get the number of days in the current month
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
      // Get the first day of the month (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
      const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
      // Generate the calendar grid
      for (let i = 0; i < daysInMonth + firstDayOfMonth; i++) {
          const day = document.createElement('div');
          if (i >= firstDayOfMonth) {
              day.textContent = i - firstDayOfMonth + 1;
              day.classList.add('calendar-day');
          }
          calendarGrid.appendChild(day);
      }
  }
  
  // Initial generation of the calendar
  generateCalendar();
  
  // Event listeners for changing the month
  document.getElementById('prev-month').addEventListener('click', () => {
      currentMonth--;
      if (currentMonth < 0) {
          currentMonth = 11;
          currentYear--;
      }
      generateCalendar();
  });
  
  document.getElementById('next-month').addEventListener('click', () => {
      currentMonth++;
      if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
      }
      generateCalendar();
  });
  
// document.addEventListener('DOMContentLoaded', function() {
//     const navbar = document.getElementById('navbar-list');
//     const modalAnywhere = document.getElementById('modal-anywhere');
//     const modalSections = modalAnywhere.querySelectorAll('h2');
//     const closeBtns = document.querySelectorAll('.close');

//     // Open modal when clicking "Anywhere" in navbar
//     navbar.querySelector('#anywhere').onclick = function() {
//         openModal('anywhere');
//     };

//     // Open specific section when clicking inside the modal
//     modalSections.forEach((section, index) => {
//         section.onclick = function() {
//             showSection(index);
//         };
//     });

//     // Close button functionality
//     closeBtns.forEach(btn => {
//         btn.onclick = function() {
//             closeAllModals();
//         };
//     });

//     // Close modal when clicking outside
//     window.onclick = function(event) {
//         if (event.target.classList.contains('modal')) {
//             closeAllModals();
//         }
//     };
// });

// function openModal(modalId) {
//     document.getElementById('modal-' + modalId).style.display = 'block';
// }

// function showSection(index) {
//     const modalContent = document.querySelector('.modal-content');
//     const sections = modalContent.querySelectorAll('.section');
//     sections.forEach((section, i) => {
//         section.style.display = i === index ? 'block' : 'none';
//     });
// }

// function closeAllModals() {
//     const modals = document.querySelectorAll('.modal');
//     modals.forEach(modal => {
//         modal.style.display = 'none';
//     });
// }
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('anywhere').onclick = function() {
//         openModal('anywhere');
//     };

//     document.getElementById('anyweek').onclick = function() {
//         openModal('anyweek');
//     };

//     document.getElementById('addguests').onclick = function() {
//         openModal('addguests');
//     };
// });

// function openModal(modalId) {
//     document.getElementById('modal-' + modalId).style.display = 'block';
// }

// function closeModal(modalId) {
//     document.getElementById('modal-' + modalId).style.display = 'none';
// }

// // Close the modal when the user clicks anywhere outside of it
// window.onclick = function(event) {
//     const modals = document.querySelectorAll('.modal');
//     modals.forEach(modal => {
//         if (event.target == modal) {
//             modal.style.display = 'none';
//         }
//     });
// }

        // document.addEventListener('DOMContentLoaded', function() {
        //     const modalTriggers = ['anywhere', 'anyweek', 'addguests'];
            
        //     modalTriggers.forEach(trigger => {
        //         const element = document.getElementById(trigger);
        //         const modal = document.getElementById(`modal-${trigger}`);
        //         const closeBtn = modal.querySelector('.close');

        //         element.onclick = () => modal.style.display = 'block';
        //         closeBtn.onclick = () => modal.style.display = 'none';
        //     });

        //     window.onclick = function(event) {
        //         if (event.target.classList.contains('modal')) {
        //             event.target.style.display = 'none';
        //         }
        //     };
        // });
