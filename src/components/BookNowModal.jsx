"use client";

import { authClient } from "@/lib/auth-client";
// import { refreshData } from "@/lib/action";
// import { Envelope } from "@gravity-ui/icons";
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
  toast,
} from "@heroui/react";
// import { refresh } from "next/cache";
import { MdBookmarkAdd } from "react-icons/md";

export function BookNowModal({ appointment }) {
  const { name } = appointment;

  const userData = authClient.useSession();
  const user = userData?.data?.user;
  // console.log(user);

  const onSubmit = async (e) => {
    
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const booking = Object.fromEntries(formData.entries());

    const bookingData = {
      userEmail: user?.email,
      doctorName: name, ...booking
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    
    // revalidatePath(`/destinations/${_id}`);
    // refreshData(`/destinations/${_id}`); 
    console.log(data);

    if (data?.acknowledged) {
      toast.success("Appointment booked successfully");
    } else {
      toast.error("Failed to book appointment");
    }
  };
  return (
    <Modal>

        <Button variant="ghost" className={'mt-4 text-[#0D7674] border border-[#0D7674]'}><MdBookmarkAdd /> Book Appointment</Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Fill Up to Book Appointment</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="p-10 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="md:col-span-2">
                      <TextField
                        value={user?.email}
                        name="userEmail"
                        isRequired
                      >
                        <Label>User Email</Label>
                        <Input
                          placeholder="User Email"
                        disabled
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>
                    <div className="md:col-span-2">
                      <TextField
                        value={name}
                        name="doctorName"
                        isRequired
                      >
                        <Label>Doctor Name</Label>
                        <Input
                          placeholder="Doctor Name"
                        disabled
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>
                    
                    <div className="md:col-span-2">
                      <TextField
                        name="patientName"
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


                    {/* Category - Updated Select Component */}
                    <div>
                      <Select
                        name="gender"
                        isRequired
                        className="w-full"
                        placeholder="Select gender"
                      >
                        <Label>Gender</Label>
                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>

                          <ListBox>
                            <ListBox.Item id="Male" textValue="Male">
                              Male
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Female" textValue="Female">
                              Female
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>

                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Price */}
                    <TextField
                      name="phone"
                      isRequired
                    >
                      <Label>Phone Number</Label>
                      <Input
                        placeholder="+8801XXXXXXXXX"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Appointment Date */}
                    <div className="md:col-span-2">
                      <TextField
                        name="appointmentDate"
                        type="date"
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
                      >
                        <Label>Appointment Time</Label>
                        <Input type="time" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    
                  </div>

                  {/* Buttons */}
                  <Modal.Footer>
                    <Button type="submit" slot="close">
                      Confirm Booking
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
}