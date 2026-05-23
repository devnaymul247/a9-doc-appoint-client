"use client";

import { refreshData } from "@/lib/action";
import {
    Button,
    FieldError,
    Input,
    Label,
    ListBox,
    Modal,
    Surface,
    TextArea,
    TextField,
    Select,
} from "@heroui/react";
// import { refresh } from "next/cache";
import { BiEdit } from "react-icons/bi";

const UpdateBookingModal = ({ appointment }) => {
    const { _id, patientName, phone, appointmentDate, appointmentTime } = appointment;

    const onSubmit = async (e) => {

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const appointmentData = Object.fromEntries(formData.entries());

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(appointmentData),
        });
        // revalidatePath(`/destinations/${_id}`);

        const data = await res.json();

        refreshData(`/dashboard/${_id}`); 
        // console.log(data);
    };

    return (
        <Modal>

            <Button variant="outline" className={"rounded-2xl"}>
                <BiEdit /> Update
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Edit Appointment</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="p-10 space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                        <div className="md:col-span-2">
                                            <TextField
                                                name="patientName"
                                                defaultValue={patientName}
                                                isRequired
                                            >
                                                <Label>Patient Name</Label>
                                                <Input
                                                    placeholder="John Rahman"
                                                    className="rounded-2xl"
                                                    
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Price */}
                                        <div className="md:col-span-2">
                                            <TextField
                                            name="phone"
                                            defaultValue={phone}
                                            isRequired
                                        >
                                            <Label>Phone Number</Label>
                                            <Input
                                                placeholder="+8801XXXXXXXXX"
                                                className="rounded-2xl"
                                                
                                            />
                                            <FieldError />
                                        </TextField>
                                        </div>

                                        {/* Appointment Date */}
                                        <div className="md:col-span-2">
                                            <TextField
                                                name="appointmentDate"
                                                type="date"
                                                defaultValue={appointmentDate}
                                                isRequired
                                            >
                                                <Label>Appointment Date</Label>
                                                <Input type="date" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        <div className="md:col-span-2">
                                            <TextField
                                                name="appointmentTime"
                                                type="time"
                                                isRequired
                                                defaultValue={appointmentTime}
                                            >
                                                <Label>Appointment Time</Label>
                                                <Input type="time" className="rounded-2xl"  />
                                                <FieldError />
                                            </TextField>
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <Modal.Footer>
                                        <Button type="submit" slot="close">
                                            Confirm Update
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateBookingModal;