// import { auth } from '@/lib/auth';
import Image from "next/image";
import { FaBangladeshiTakaSign, FaRegCalendar } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
// import AppointmentCard from "@/components/AppointmentCard";
// import { Button } from "@heroui/react";
// import { FiExternalLink } from "react-icons/fi";
import { BookNowModal } from "@/components/BookNowModal";

const dorctorAppointmentDetailsPage = async ({ params }) => {
    const { id } = await params;

    // const {token} = await auth.api.getToken({
    //     headers: await headers(),
    // });
    // console.log(token);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctor-appointments/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            // 'authorization': `Bearer ${token}`
        }
    });

    const appointment = await res.json()
    // console.log(appointment);
    const { image, fee, name, availability, location, hospital, description, experience, specialty } =
    appointment;

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex  items-center gap-3 justify-end mt-5 mb-3">
                {/* <EditModal appointment={appointment} />
                <DeleteAlert appointment={appointment} /> */}
            </div>
            <div className="flex  items-center gap-3 justify-start mt-5 mb-3">
                <Image
                className="w-full max-h-[600px] max-w-[500px] object-cover"
                alt={name}
                src={image}
                height={500}
                width={400}
            />

            <div className="flex justify-between gap-10">
                <div className="p-2">
                    <div className="flex items-center gap-1">
                        <LuMapPin /> <span>{location}</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <div>
                                <h2 className="text-xl font-bold">{name}</h2>
                            </div>
                            <div className="flex gap-1 items-center">
                                <FaRegCalendar /> {availability}
                            </div>
                            <div className="flex gap-1 items-center">
                                Specialty: {specialty}
                            </div>
                            <div className="flex gap-1 items-center">
                                Experience: {experience}
                            </div>
                            <div className="flex gap-1 items-center">
                                {hospital}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold flex items-center gap-2"><FaBangladeshiTakaSign /> {fee}</h3>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        
                        <BookNowModal appointment={appointment}></BookNowModal>
                    </div>

                    <h1 className="mt-10 text-2xl font-bold">Overview</h1>

                    <p className="max-w-6xl">{description}</p>
                </div>


                {/* <AppointmentCard appointment={appointment} /> */}
            </div>
            </div>


        </div>
    );
};

export default dorctorAppointmentDetailsPage;