import { useState } from 'react'
import { CalendarStep } from './CalendarStep'
import { ConfirmStep } from './ConfirmStep'

export const ScheduleForm = () => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>()

  const handleClearSelectedDate = () => {
    setSelectedDateTime(null)
  }
  if (selectedDateTime) {
    return (
      <ConfirmStep
        schedulingDate={selectedDateTime}
        onCancelConfirmation={handleClearSelectedDate}
      />
    )
  }
  return <CalendarStep onSelectedDateTime={setSelectedDateTime} />
}
