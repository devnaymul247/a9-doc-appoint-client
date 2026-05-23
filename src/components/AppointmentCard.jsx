import { Button, Calendar } from "@heroui/react";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { FaBangladeshiTakaSign, FaClock, FaNotesMedical, FaRegCalendar } from "react-icons/fa6";
import Link from "next/link";

const AppointmentCard = ({ appointment }) => {
    const { _id, image, fee, name, availability, location, hospital, description, experience, specialty } = appointment;

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <div className="relative w-full aspect-square">
        <Image
        className="object-cover"
        alt={name}
        src={image}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      </div>

      <div className="p-2 space-y-2 mb-3.5">
        <div className="flex items-center gap-1">
          <LuMapPin /> <span>{location}</span>
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <h2 className="text-xl font-bold">{name}</h2>
            </div>
            <div className="flex gap-1 items-center">
              <FaNotesMedical /> Specialty: {specialty}
            </div>
            <div className="flex gap-1 items-center">
              <FaClock /> {availability}
            </div>
          </div>

          
        </div>
        <div>
            <h3 className="text-2xl font-bold flex gap-1 items-center">Fees: <FaBangladeshiTakaSign />{fee}</h3>
          </div>
        <Link href={`/all-appointments/${_id}`}><Button variant="ghost" className={'mt-1 text-[#0D7674] border border-[#0D7674]'}> <FiExternalLink/> See Details</Button></Link>
      </div>
    </div>
  );
};

export default AppointmentCard;