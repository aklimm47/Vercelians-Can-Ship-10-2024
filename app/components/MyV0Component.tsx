import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function WorkoutSchedule() {
  const schedule = [
    { day: "Monday", workout: "Chest and Triceps", exercises: "Bench Press, Incline Dumbbell Press, Tricep Dips, Rope Pushdowns", cardio: "20 min HIIT" },
    { day: "Tuesday", workout: "Back and Biceps", exercises: "Deadlifts, Pull-ups, Barbell Rows, Hammer Curls", cardio: "30 min Steady State" },
    { day: "Wednesday", workout: "Legs and Core", exercises: "Squats, Lunges, Leg Press, Planks, Russian Twists", cardio: "15 min Jump Rope" },
    { day: "Thursday", workout: "Shoulders and Arms", exercises: "Military Press, Lateral Raises, Bicep Curls, Skull Crushers", cardio: "25 min Cycling" },
    { day: "Friday", workout: "Full Body and Core", exercises: "Clean and Press, Burpees, Mountain Climbers, Ab Rollouts", cardio: "20 min Swimming" },
  ]

  return (
    <div className="container mx-auto py-10">
      <Table>
        <TableCaption>Weekly Workout Schedule</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Day</TableHead>
            <TableHead>Workout Focus</TableHead>
            <TableHead>Exercises</TableHead>
            <TableHead className="text-right">Cardio</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedule.map((day) => (
            <TableRow key={day.day}>
              <TableCell className="font-medium">{day.day}</TableCell>
              <TableCell>{day.workout}</TableCell>
              <TableCell>{day.exercises}</TableCell>
              <TableCell className="text-right">{day.cardio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
