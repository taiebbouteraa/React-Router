import React, { useState } from 'react'
import Modal from 'react-modal';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const AddMovie = ({ handleAdd }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    const [mov, setMov] = useState({
        title: '',
        description: '',
        posterURL: '',
        rating: '',
        trailer: '',
    })

    const handleChange = (e) => setMov({ ...mov, [e.target.name]: e.target.value })

    return (
        <div className='add-movies'>
            <Button onClick={openModal} className='add-movies-btn'>Open Modal</Button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <form onSubmit={(e) => {
                    e.preventDefault()
                    let newMovie = {
                        ...mov, id: Math.random(),
                    };
                    handleAdd(newMovie)
                    closeModal()
                }}>
                    <h1 style={{ borderBottom: '1px solid black' }}>Add Movie Here</h1>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Movie name"
                            type='text'
                            value={mov.title}
                            required
                            name='title'
                            onChange={handleChange}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Movie poster URL"
                            type='url'
                            value={mov.posterURL}
                            required
                            name='posterURL'
                            onChange={handleChange}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Movie rating"
                            type='number'
                            value={mov.rating}
                            required
                            name='rating'
                            onChange={handleChange}
                            min="1"
                            max="5"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="description"
                            type='text'
                            value={mov.description}
                            required
                            name='description'
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Youtube URL of the video"
                            type='URL'
                            value={mov.trailer}
                            required
                            name='trailer'
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <div id='add-cancel'>
                        <Button variant="success" type='submit'>Add</Button>
                        <Button variant="danger" onClick={closeModal}>Cancel</Button>
                    </div>
                </form>
            </Modal>
        </div >
    )
}

export default AddMovie
