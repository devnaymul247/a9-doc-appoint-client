'use client'
import { refreshData } from '@/lib/action';
import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Input, Label, Modal, Surface, TextField, toast } from '@heroui/react';
import React from 'react';
import { BiEdit } from 'react-icons/bi';

const UpdateProfileModal = ({ user }) => {

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        // const email = e.target.email.value;

        // console.log({ name, image });

        const result = await authClient.updateUser({
            name,
            image,
            // email, // email is not updatable in supabase auth, so we are not sending it to the server.
        });

        if (result?.data) {
            toast.success("Profile updated successfully");
            // console.log("Profile updated successfully");
        } else if (result?.error) {
            toast.error("Error updating profile:");
            // console.error("Error updating profile:", result.error);
        }


        refreshData(`/dashboard/${user}`); 
    };

    return (

        <div className='mt-6'>
            <Modal>

                <Button variant="outline" className={"rounded-2xl"}>
                    <BiEdit /> Update
                </Button>

                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-xl">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading>Edit Profile</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={handleUpdateProfile} className="p-10 space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                            <div className="md:col-span-2">
                                                <TextField
                                                    name="name"
                                                    defaultValue={user?.name}
                                                    isRequired
                                                >
                                                    <Label>Your Name</Label>
                                                    <Input
                                                        placeholder="John Rahman"
                                                        className="rounded-2xl"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>
                                            <div className='md:col-span-2'>
                                                <TextField name="image" type="url" 
                                                defaultValue={user?.image}
                                                >
                                                    <Label>Photo URL</Label>
                                                    <Input placeholder="Photo url" />
                                                    <FieldError />
                                                </TextField>
                                            </div>
                                            <div className="md:col-span-2">
                                                <TextField
                                                    defaultValue={user?.email}
                                                    name="email"
                                                    isRequired
                                                    isDisabled
                                                >
                                                    <Label>Your Email</Label>
                                                    <Input
                                                        placeholder="Your Email"
                                                        className="rounded-2xl"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                        </div>

                                        {/* Buttons */}
                                        <Modal.Footer>
                                            <Button type="button" slot="close" variant="light">
                                                Cancel
                                            </Button>
                                            <Button
                                                type="submit"
                                                className="bg-[#0D7674] text-white hover:bg-[#0A5F5D]"
                                                slot="close"
                                            >
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
        </div>
    );
};

export default UpdateProfileModal;