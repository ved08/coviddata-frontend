import { useState } from "react";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const OtpModal = props => {
    const { isOpen, toggle, className } = props
    return(
        <Modal isOpen={isOpen} backdrop={"static"}>
            <ModalHeader>Enter your OTP</ModalHeader>
            <ModalBody style={{
                display: "flex"
            }}>
                <input type="number" style={{width: "50%"}} onChange={e => props.setOtp(e)}/>
                <Button onClick={() => {
                    toggle()
                    props.closed()
                }} style={{
                    backgroundColor: '#3C7EC8',
                    width: "50%"
                }} className="Btn">Verify</Button>
            </ModalBody>
        </Modal>
    );
}
export default OtpModal