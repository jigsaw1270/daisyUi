import React, { useState } from 'react';
import VanillaCalendar from 'vanilla-calendar-pro';
import 'vanilla-calendar-pro/build/vanilla-calendar.min.css';

const CalendarModal = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  

  const openCalendar = () => {
    setShowCalendar(true);
    

    const calendarElement = document.querySelector("#myCalendar");
    if (calendarElement) {
      const calendar = new VanillaCalendar(calendarElement, {
        input: true,
        type: 'multiple',
        months: 2,
        jumpMonths: 1,
        settings: {
          selection: {
            day: 'multiple-ranged',
          },
        },
        actions: {
          clickDay(event, self) {
            setSelectedDates(self.selectedDates);
            console.log(self.selectedDates);
          },
        },
      });
      calendar.init();
    }
   };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <button className="btn" onClick={() => setShowCalendar(true)}>Open Modal</button>
      {showCalendar && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <input
              type="text"
              placeholder="Select dates"
              onClick={openCalendar}
              className="border p-2 mt-2 caret-transparent" />
            <div id="myCalendar" className="mt-4"></div>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn" onClick={() => setShowCalendar(false)}>Close</button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default CalendarModal;

