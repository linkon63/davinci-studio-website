    'use client';

    import { useState } from 'react';
    import Image from 'next/image';
    import { FaClock, FaGlobeAmericas, FaChevronDown, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

    const timeSlots = ['5:15 PM', '5:45 PM', '6:15 PM', '6:45 PM', '7:15 PM', '8:15 PM', '9:15 PM' ];
    const calendarDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    export default function BookSection() {
      const [currentDate, setCurrentDate] = useState(new Date(2026, 6, 17));
      const [selectedTime, setSelectedTime] = useState<string | null>('5:15 PM');
      const [duration, setDuration] = useState<'15m' | '30m'>('15m');

      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const selectedDay = currentDate.getDate();

      const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const startDay = new Date(year, month, 1).getDay();
      const displayDay = currentDate.toLocaleString('default', { weekday: 'short' });

      const handlePrevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
      };

      const handleNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
      };

      const handleDateClick = (day: number) => {
        setCurrentDate(new Date(year, month, day));
      };

      const getCalendarCells = () => {
        const cells: { day: number; muted: boolean; active: boolean }[] = [];
        const prevMonthDays = new Date(year, month, 0).getDate();
        for (let i = startDay - 1; i >= 0; i--) {
          cells.push({ day: prevMonthDays - i, muted: true, active: false });
        }
        for (let d = 1; d <= daysInMonth; d++) {
          cells.push({ day: d, muted: false, active: d === selectedDay });
        }
        const remaining = 42 - cells.length;
        for (let i = 1; i <= remaining; i++) {
          cells.push({ day: i, muted: true, active: false });
        }
        return cells;
      };

      const calendarCells = getCalendarCells();

      return (
        <section className="bg-white-color py-16 md:py-24 xl:py-36">
          <div className="container px-4 md:px-6 lg:px-10">
            <div className="flex flex-col items-center">
              {/* Header */}
              <h1 className="text-primary-color text-[28px] md:text-[36px] xl:text-[46px] font-semibold font-proxima text-center mb-8 md:mb-12">
                Want to Achieve Your Goals?<br className="hidden md:block" />{' '}
                Book Your Call Now!
              </h1>

              {/* Booking Card */}
              <div className="w-full max-w-[1292px] bg-white-color shadow-[0_4px_30px_rgba(0,0,0,0.08)] rounded-2xl md:rounded-4xl p-5 md:p-10 xl:p-16 grid grid-cols-1 xl:grid-cols-[342px_1fr_220px] gap-8 xl:gap-6">

                {/* LEFT COLUMN */}
                <div className="space-y-6 md:space-y-8">
                  {/* Logo + Agency Name */}
                  <div className="flex flex-col items-start justify-start w-full text-left">
                    <div className="block">
                      <Image
                        src="/logo-white.png"
                        alt="Da Vinci Media"
                        width={186}
                        height={45}
                        className="w-[100px] h-[80px] md:w-[186px] md:h-[120px] object-contain"
                      />
                    </div>
                    <h3 className="text-primary-color text-[18px] md:text-[32px] font-proxima font-semibold">
                      Digital Agency
                    </h3>
                  </div>

                  {/* Divider */}
                  <div className="border-b border-border-color pb-5">
                    <h2 className="text-primary-color text-[18px] md:text-[24px] xl:text-[28px] font-proxima font-semibold leading-snug">
                      Book a Consultation <br className="hidden xl:block" /> for free with Da Vinci Media
                    </h2>
                  </div>

                  {/* Google Meet + Timezone */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/assets/aboutpage/meet.svg"
                        alt="Google Meet"
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain"
                      />
                      <p className="text-primary-color text-[18px] md:text-[20px] xl:text-[24px] font-proxima font-medium">
                        Google Meet
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaGlobeAmericas className="text-primary-color text-xl" />
                      <p className="text-primary-color text-[18px] md:text-[20px] xl:text-[24px] font-proxima font-medium">
                        Asia/Dhaka
                      </p>
                      <FaChevronDown className="text-primary-color text-sm" />
                    </div>
                  </div>
                </div>

                {/* CENTER COLUMN — Calendar */}
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-[400px]">
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-primary-color text-xl font-proxima font-bold">{monthName}</h3>
                      <div className="flex gap-2">
                        <button
                          onClick={handlePrevMonth}
                          className="p-1 hover:bg-primary-color/10 rounded transition-colors"
                        >
                          <FaChevronLeft className="text-primary-color text-sm" />
                        </button>
                        <button
                          onClick={handleNextMonth}
                          className="p-1 hover:bg-primary-color/10 rounded transition-colors"
                        >
                          <FaChevronRight className="text-primary-color text-sm" />
                        </button>
                      </div>
                    </div>

                    {/* Day Names */}
                    <div className="grid grid-cols-7 text-center text-xs font-semibold text-body-color mb-4">
                      {calendarDays.map((day) => (
                        <div key={day} className="uppercase font-proxima">{day}</div>
                      ))}
                    </div>

                    {/* Date Grid — Border Grid */}
                    <div className="grid grid-cols-7 gap-0.5">
                      {calendarCells.map((item, index) => (
                        <div
                          key={index}
                          onClick={() => !item.muted && handleDateClick(item.day)}
                          className={`h-14 flex items-center justify-center text-sm font-proxima transition-colors
                            ${item.active
                              ? 'bg-recording-red text-white-color font-bold'
                              : item.muted
                                ? 'text-body-color bg-white'
                                : 'text-primary-color cursor-pointer bg-white hover:bg-primary-color/5'
                            }`}
                        >
                          {item.day}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN — Time Selection */}
                <div className="flex flex-col gap-3 items-center xl:items-stretch">
                  {/* Date + Duration */}
                  <div className="flex items-center gap-4 mb-1">
                    <h3 className="text-primary-color font-proxima font-semibold text-lg">{displayDay} {selectedDay}</h3>
                    <div className="flex items-center gap-1 text-xs font-semibold rounded-full border border-border-color px-3 h-8">
                      <FaClock className="text-primary-color text-xs" />
                      <span
                        onClick={() => setDuration('15m')}
                        className={`px-2 cursor-pointer rounded-full transition-colors ${duration === '15m' ? 'bg-primary-color/10 text-primary-color' : 'text-body-color'
                          }`}
                      >
                        15m
                      </span>
                      <span
                        onClick={() => setDuration('30m')}
                        className={`px-2 cursor-pointer rounded-full transition-colors ${duration === '30m' ? 'bg-primary-color/10 text-primary-color' : 'text-body-color'
                          }`}
                      >
                        30m
                      </span>
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="flex flex-col gap-2 w-full">
                    {timeSlots.map((slot) => (
                      <div
                        key={slot}
                        onClick={() => setSelectedTime(selectedTime === slot ? null : slot)}
                        className={`w-full py-2 px-4 rounded-full border text-center text-sm font-proxima font-medium cursor-pointer transition-colors
                          ${selectedTime === slot
                            ? 'bg-recording-red text-white-color border-recording-red'
                            : 'border-border-color text-primary-color hover:bg-primary-color/5'
                          }`}
                      >
                        {slot}
                      </div>
                    ))}
                  </div>

                  {/* Appointment Button */}
                  <button
                    className="mt-3 w-full py-3 rounded-full flex justify-center items-center gap-2 bg-recording-red text-white-color font-proxima font-semibold text-sm cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    Appointment
                    <FaWhatsapp className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
