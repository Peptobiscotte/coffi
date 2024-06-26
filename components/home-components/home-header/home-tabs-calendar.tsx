import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import calendarSvg from '../../../public/calendar.svg'
import Image from "next/image";
import {Calendar} from "@nextui-org/react";

export default function HomeTabCalendar() {
    return (
        <Popover placement="bottom-end" backdrop="opaque">
          <PopoverTrigger>
            <Button className="bg-white dark:bg-slate-200  rounded-2xl">
                <Image src={calendarSvg} alt="calendarSvg" className="dark:stroke-slate-800"/>
                <p className="font-geo text-slate-500 dark:text-slate-800">Select dates</p>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
              <Calendar aria-label="Date (No Selection)" className="p-0"/>
              {/* <div className="text-small font-bold">Calendar</div>
              <div className="text-tiny">Insert calendar here</div> */}
          </PopoverContent>
        </Popover>
      );
}