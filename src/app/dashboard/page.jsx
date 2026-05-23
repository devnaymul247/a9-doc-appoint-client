
import UpdateBookingModal from '@/components/UpdateBookingModal';
import { auth } from '@/lib/auth';
import { Tabs } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';
import { FaClock, FaRegCalendar } from 'react-icons/fa6';

const dashboardPage = async () => {
    // it's for server component.
    const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

//   const { token } = await auth.api.getToken({
//     headers: await headers(),
//   });

  
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.email}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    const appointments = await res.json()
    console.log(appointments);

    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold my-8">Dashboard</h1>
            </div>

            <Tabs className="w-full max-w-md">
                <Tabs.ListContainer>
                    <Tabs.List aria-label="Options">
                        <Tabs.Tab id="my-bookings">
                            My Bookings
                            <Tabs.Indicator />
                        </Tabs.Tab>
                        <Tabs.Tab id="my-profile">
                            My Profile
                            <Tabs.Indicator />
                        </Tabs.Tab>
                    </Tabs.List>
                </Tabs.ListContainer>
                <Tabs.Panel className="pt-4" id="my-bookings">
                    { appointments.length === 0 ? (
                        <div className='border border-muted rounded-2xl flex items-center justify-center py-10'>
                        <p>Your haven not made any bookings yet.</p>
                    </div>
                    ) : (
                        <div>
                        { appointments.map(appointment => <div key={appointment._id}>
                            <div className='border-2 border-[#0D7674] rounded-2xl p-6 mb-4'>
                                <h2 className="text-xl font-bold text-[#0D7674]">{appointment.doctorName}</h2>
                                <p><b>Patient:</b> {appointment.patientName}</p>
                                <p><b>Phone:</b> {appointment.phone}</p>
                                <p className='flex items-center gap-2'><FaRegCalendar /> {appointment.appointmentDate}</p>
                                <div>
                                    <p className='flex items-center gap-2'><FaClock />{appointment.appointmentTime}</p>
                                </div>
                                <div className='mt-4'>
                                    <UpdateBookingModal appointment={appointment}></UpdateBookingModal>
                                </div>
                            </div>
                        </div> )}
                    </div>
                    )}
                    

                    
                </Tabs.Panel>
                
                <Tabs.Panel className="pt-4" id="my-profile">
                    <p>Manage your profile information and settings.</p>
                </Tabs.Panel>
            </Tabs>


            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {appointments.map(appointment => <AppointmentCard key={appointment._id} appointment={appointment} />)}
            </div> */}
        </div>
    );
};

export default dashboardPage;