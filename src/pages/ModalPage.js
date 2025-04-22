import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button primary onClick={handleClose}>
                I Accept
            </Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>This is a modal descriptions for you!</p>
        </Modal>
    );

    return (
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum condimentum eu quam vitae condimentum. Maecenas elit
                tortor, facilisis nec tincidunt nec, venenatis a erat. Mauris
                convallis nisi erat, et molestie mi bibendum eget. Duis mollis
                vestibulum vehicula. Vestibulum eget vulputate lorem, in
                scelerisque libero. Pellentesque a rhoncus sapien. Donec laoreet
                mattis eros et dapibus. Nunc vitae nunc auctor, ultricies sapien
                in, scelerisque tellus. Vestibulum in odio eget neque
                consectetur interdum non vitae nibh. Aenean condimentum leo nec
                consectetur finibus. Donec vulputate dapibus purus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum condimentum eu quam vitae condimentum. Maecenas elit
                tortor, facilisis nec tincidunt nec, venenatis a erat. Mauris
                convallis nisi erat, et molestie mi bibendum eget. Duis mollis
                vestibulum vehicula. Vestibulum eget vulputate lorem, in
                scelerisque libero. Pellentesque a rhoncus sapien. Donec laoreet
                mattis eros et dapibus. Nunc vitae nunc auctor, ultricies sapien
                in, scelerisque tellus. Vestibulum in odio eget neque
                consectetur interdum non vitae nibh. Aenean condimentum leo nec
                consectetur finibus. Donec vulputate dapibus purus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum condimentum eu quam vitae condimentum. Maecenas elit
                tortor, facilisis nec tincidunt nec, venenatis a erat. Mauris
                convallis nisi erat, et molestie mi bibendum eget. Duis mollis
                vestibulum vehicula. Vestibulum eget vulputate lorem, in
                scelerisque libero. Pellentesque a rhoncus sapien. Donec laoreet
                mattis eros et dapibus. Nunc vitae nunc auctor, ultricies sapien
                in, scelerisque tellus. Vestibulum in odio eget neque
                consectetur interdum non vitae nibh. Aenean condimentum leo nec
                consectetur finibus. Donec vulputate dapibus purus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum condimentum eu quam vitae condimentum. Maecenas elit
                tortor, facilisis nec tincidunt nec, venenatis a erat. Mauris
                convallis nisi erat, et molestie mi bibendum eget. Duis mollis
                vestibulum vehicula. Vestibulum eget vulputate lorem, in
                scelerisque libero. Pellentesque a rhoncus sapien. Donec laoreet
                mattis eros et dapibus. Nunc vitae nunc auctor, ultricies sapien
                in, scelerisque tellus. Vestibulum in odio eget neque
                consectetur interdum non vitae nibh. Aenean condimentum leo nec
                consectetur finibus. Donec vulputate dapibus purus.
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum condimentum eu quam vitae condimentum. Maecenas
                    elit tortor, facilisis nec tincidunt nec, venenatis a erat.
                    Mauris convallis nisi erat, et molestie mi bibendum eget.
                    Duis mollis vestibulum vehicula. Vestibulum eget vulputate
                    lorem, in scelerisque libero. Pellentesque a rhoncus sapien.
                    Donec laoreet mattis eros et dapibus. Nunc vitae nunc
                    auctor, ultricies sapien in, scelerisque tellus. Vestibulum
                    in odio eget neque consectetur interdum non vitae nibh.
                    Aenean condimentum leo nec consectetur finibus. Donec
                    vulputate dapibus purus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum condimentum eu quam vitae condimentum. Maecenas
                    elit tortor, facilisis nec tincidunt nec, venenatis a erat.
                    Mauris convallis nisi erat, et molestie mi bibendum eget.
                    Duis mollis vestibulum vehicula. Vestibulum eget vulputate
                    lorem, in scelerisque libero. Pellentesque a rhoncus sapien.
                    Donec laoreet mattis eros et dapibus. Nunc vitae nunc
                    auctor, ultricies sapien in, scelerisque tellus. Vestibulum
                    in odio eget neque consectetur interdum non vitae nibh.
                    Aenean condimentum leo nec consectetur finibus. Donec
                    vulputate dapibus purus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum condimentum eu quam vitae condimentum. Maecenas
                    elit tortor, facilisis nec tincidunt nec, venenatis a erat.
                    Mauris convallis nisi erat, et molestie mi bibendum eget.
                    Duis mollis vestibulum vehicula. Vestibulum eget vulputate
                    lorem, in scelerisque libero. Pellentesque a rhoncus sapien.
                    Donec laoreet mattis eros et dapibus. Nunc vitae nunc
                    auctor, ultricies sapien in, scelerisque tellus. Vestibulum
                    in odio eget neque consectetur interdum non vitae nibh.
                    Aenean condimentum leo nec consectetur finibus. Donec
                    vulputate dapibus purus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum condimentum eu quam vitae condimentum. Maecenas
                    elit tortor, facilisis nec tincidunt nec, venenatis a erat.
                    Mauris convallis nisi erat, et molestie mi bibendum eget.
                    Duis mollis vestibulum vehicula. Vestibulum eget vulputate
                    lorem, in scelerisque libero. Pellentesque a rhoncus sapien.
                    Donec laoreet mattis eros et dapibus. Nunc vitae nunc
                    auctor, ultricies sapien in, scelerisque tellus. Vestibulum
                    in odio eget neque consectetur interdum non vitae nibh.
                    Aenean condimentum leo nec consectetur finibus. Donec
                    vulputate dapibus purus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum condimentum eu quam vitae condimentum. Maecenas
                    elit tortor, facilisis nec tincidunt nec, venenatis a erat.
                    Mauris convallis nisi erat, et molestie mi bibendum eget.
                    Duis mollis vestibulum vehicula. Vestibulum eget vulputate
                    lorem, in scelerisque libero. Pellentesque a rhoncus sapien.
                    Donec laoreet mattis eros et dapibus. Nunc vitae nunc
                    auctor, ultricies sapien in, scelerisque tellus. Vestibulum
                    in odio eget neque consectetur interdum non vitae nibh.
                    Aenean condimentum leo nec consectetur finibus. Donec
                    vulputate dapibus purus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum condimentum eu quam vitae condimentum. Maecenas
                    elit tortor, facilisis nec tincidunt nec, venenatis a erat.
                    Mauris convallis nisi erat, et molestie mi bibendum eget.
                    Duis mollis vestibulum vehicula. Vestibulum eget vulputate
                    lorem, in scelerisque libero. Pellentesque a rhoncus sapien.
                    Donec laoreet mattis eros et dapibus. Nunc vitae nunc
                    auctor, ultricies sapien in, scelerisque tellus. Vestibulum
                    in odio eget neque consectetur interdum non vitae nibh.
                    Aenean condimentum leo nec consectetur finibus. Donec
                    vulputate dapibus purus.
                </p>
            </p>
        </div>
    );
}

export default ModalPage;
