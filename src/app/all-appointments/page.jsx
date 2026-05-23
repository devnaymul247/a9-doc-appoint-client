import AppointmentCard from "@/components/AppointmentCard";

const DoctorAppointmentsPage =  async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctor-appointments`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    const appointments = await res.json()
    // console.log(appointments);

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mt-8 mb-4 text-center">All Appointments</h1>
            <p className="text-center text-muted-foreground mb-8">
                Find the right doctor for you and book your appointment today!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {appointments.map(appointment => <AppointmentCard key={appointment._id} appointment={appointment} />)}
            </div>
        </div>
    );
};

export default DoctorAppointmentsPage;