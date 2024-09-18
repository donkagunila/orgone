import AdminLayout from "@/components/layouts/AdminLayout";
import React from "react";

import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";

import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

function Main() {
  return (
    <AdminLayout title="Calendar">
      <div className="box container mx-auto w-[90%] mt-8" id="calendar">
        <div className="border-b border-slate-200 px-4 py-5 flex justify-between items-center">
          <div className="text-slate-500 font-semibold">Calendar</div>
          <div>
            <button>Add Event</button>
          </div>
        </div>
        <div className="p-4">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              interactionPlugin,
              timeGridPlugin,
              listPlugin
            ]}
            initialView="dayGridMonth"
            weekends={true}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            themeSystem="standard"
          />
        </div>
      </div>
    </AdminLayout>
  );
}

export default Main;
