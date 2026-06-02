'use client';
import {
    Button,
    FieldError,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
    toast,
} from "@heroui/react";
import { FcRating } from "react-icons/fc";

const SubmitReviewModal = ({ appointment, token }) => {
    // console.log(appointment.doctorID);
    const onSubmit = async (e) => {
    
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const ratingData = Object.fromEntries(formData.entries());
    
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctor-appointments/${appointment.doctorID}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify(ratingData),
            });
    
            const data = await res.json();
            // console.log(data);
    
            if (data?.acknowledged) {
                  toast.success("Rating submitted successfully");
                } else {
                  toast.error("Failed to submit rating");
                }
        };

    return (
        <Modal>
        
                    <Button variant="outline" className={"rounded-2xl"}>
                        <FcRating /> Submit Rating
                    </Button>
        
                    <Modal.Backdrop>
                        <Modal.Container placement="auto">
                            <Modal.Dialog className="sm:max-w-xl">
                                <Modal.CloseTrigger />
                                <Modal.Header>
                                    <Modal.Heading>Input Your Rating for this doctor</Modal.Heading>
                                </Modal.Header>
                                <Modal.Body className="p-6">
                                    <Surface variant="default">
                                        <form onSubmit={onSubmit} className="p-10 space-y-8">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
                                                <div className="md:col-span-2">
                                                    <TextField
                                                        name="rating"
                                                        isRequired
                                                    >
                                                        <Label>Rating</Label>
                                                        <Input
                                                            placeholder="5"
                                                            className="rounded-2xl"
                                                            
                                                        />
                                                        <FieldError />
                                                    </TextField>
                                                </div>
                                                
                                            </div>
        
                                            {/* Buttons */}
                                            <Modal.Footer>
                                                <Button type="submit" slot="close">
                                                    Confirm & Submit
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

export default SubmitReviewModal;