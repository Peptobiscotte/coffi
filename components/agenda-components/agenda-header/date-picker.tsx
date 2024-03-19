import {Button, Calendar, CalendarCell, CalendarGrid, DateInput, DatePicker, DateSegment, Dialog, Group, Heading, Label, Popover} from 'react-aria-components';
import {I18nProvider} from 'react-aria';

export default function DatePickerComponent() {
    return (
        <div>
            <I18nProvider locale="en-GB">
            <DatePicker className="group flex flex-col gap-1 w-[200px]" defaultOpen>
                <Label>Date</Label>
                <Group className="flex rounded-lg bg-white/90 focus-within:bg-white group-open:bg-white transition pl-3 shadow-md text-gray-700 focus-visible:ring-2 ring-black">
                    <DateInput className="flex flex-1 py-2" >
                        {(segment) => <DateSegment segment={segment} className="px-0.5 tabular-nums outline-none rounded-sm focus:bg-violet-700 focus:text-white caret-transparent placeholder-shown:italic"/>}
                    </DateInput>
                    <Button className="outline-none px-3 flex items-center text-gray-700 transition border-0 border-solid border-l border-l-purple-200 bg-transparent rounded-r-lg pressed:bg-purple-100 focus-visible:ring-2 ring-black">▼</Button>
                </Group>
                <Popover>
                    <Dialog className="p-6 text-gray-600">
                        <Calendar className='font-geo'>
                            <header className="flex items-center gap-1 pb-4 px-1  w-full">
                                <Button slot="previous">◀</Button>
                                    <Heading className="flex-1 font-semibold text-2xl ml-2"/>
                                <Button slot="next">▶</Button>
                            </header>
                            <CalendarGrid className="border-spacing-1 border-separate">
                                {(date) => <CalendarCell date={date} className="w-9 h-9 outline-none cursor-default rounded-full flex items-center justify-center outside-month:text-gray-300 hover:bg-gray-100 pressed:bg-gray-200 selected:bg-violet-700 selected:text-white focus-visible:ring ring-violet-600/70 ring-offset-2"/>}
                            </CalendarGrid>
                        </Calendar>
                    </Dialog>
                </Popover>
            </DatePicker>   
            </I18nProvider>
            
        </div>
    )
}

