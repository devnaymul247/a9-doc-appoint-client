import AppointmentCard from "@/components/AppointmentCard";

const DoctorAppointmentsPage =  async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctor-appointments`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    const appointments = await res.json()
    console.log(appointments);

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold my-8 text-center">All Appointments</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {appointments.map(appointment => <AppointmentCard key={appointment._id} appointment={appointment} />)}
            </div>
        </div>
    );
};

export default DoctorAppointmentsPage;