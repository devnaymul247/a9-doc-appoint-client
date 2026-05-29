
import { DeleteAlert } from '@/components/DeleteAlert';
import UpdateBookingModal from '@/components/UpdateBookingModal';
import { auth } from '@/lib/auth';
import { Avatar, Tabs } from '@heroui/react';
import React from 'react';
import { FaClock, FaRegCalendar } from 'react-icons/fa6';
import UpdateProfileModal from '@/components/UpdateProfileModal';
import { headers } from 'next/headers';

// SEO - meta data
export const metadata = {
  title: "Dashboard - DocAppoint",
  description: "Manage your doctor appointments and profile on DocAppoint",
};

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
    // console.log(appointments);

    

        // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/profile`, {
        //     method: "PATCH",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify(profileData),
        // });

        // const data = await res.json();
        // console.log(data);

    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold my-8">Dashboard</h1>
            </div>

            <Tabs className="w-full max-w-md">
                <Tabs.ListContainer>
                    <Tabs.List  className='shadow-md' aria-label="Options">
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
                    {appointments.length === 0 ? (
                        <div className='border border-muted rounded-2xl flex items-center justify-center py-10'>
                            <p>Your haven not made any bookings yet.</p>
                        </div>
                    ) : (
                        <div>
                            {appointments.map(appointment => <div key={appointment._id}>
                                <div className='border-2 border-[#0D7674] rounded-2xl p-6 mb-4 shadow-md'>
                                    <h2 className="text-xl font-bold text-[#0D7674]">{appointment.doctorName}</h2>
                                    <p><b>Patient:</b> {appointment.patientName}</p>
                                    <p><b>Phone:</b> {appointment.phone}</p>
                                    <p className='flex items-center gap-2'><FaRegCalendar /> {appointment.appointmentDate}</p>
                                    <div>
                                        <p className='flex items-center gap-2'><FaClock />{appointment.appointmentTime}</p>
                                    </div>
                                    <div className='mt-4 flex items-center gap-4'>
                                        <UpdateBookingModal appointment={appointment}></UpdateBookingModal>

                                        <DeleteAlert appointment={appointment}></DeleteAlert>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    )}
                </Tabs.Panel>

                <Tabs.Panel className="pt-4" id="my-profile">
                <div className='border border-[#0D7674] rounded-2xl shadow-lg p-6'>
                    <div className='flex items-center gap-3'>
                        <div className="flex gap-3">
                            <Avatar size="lg">
                                <Avatar.Image
                                    alt={user?.name}
                                    src={user?.image}
                                    referrerPolicy="no-referrer"
                                />
                                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>
                        </div>

                        <div>
                            <p className='text-[#0D7674] font-bold'>{user?.name}</p>
                            <p>{user?.email}</p>
                        </div>
                    </div>
                    <UpdateProfileModal user={user}></UpdateProfileModal>
                </div>
                </Tabs.Panel>
            </Tabs>
        </div>
    );
};

export default dashboardPage;