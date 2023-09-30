import React, { useState } from 'react'
import search from "../assets/search.png"
export default function Modal() {
    const [showModal, setShowModal] = useState(false)
    const [handle, setHandle] = useState("")
    const handleForm = (e) => {
        setHandle(e.target.value)
    }
    const enter = (event) => {
        if (event.key === "Enter") {
            setShowModal(false)
            if (event.target.value === "home" || event.target.value === "Home") {
                window.location.href = "/"
            }
            else if (event.target.value === "projects" || event.target.value === "Projects" || event.target.value === "project" || event.target.value === "Project") {
                window.location.href = "../Projects"
            } else if (event.target.value === "contact" || event.target.value === "Contact") {
                window.location.href = "../Contact"
            } else if (event.target.value === "about" || event.target.value === "About") {
                window.location.href = "./About"
            } else if (event.target.value === "services" || event.target.value === "Services") {
                window.location.href = "./Services"
            } else {
                setShowModal(true)
                document.getElementById('search1').style.display = "none"
                document.getElementById('noResult').innerHTML = `0 Result For ${event.target.value}`
            }

        }
    }

    const MyModal = () => {
        return (
            <>
                <div id="modal">
                    <div className="modal-header">
                       
                        <input
                            type="text"
                            placeholder='Type your Search and hit Enter'
                            id='search1'
                            autoFocus="autofocus"
                            onKeyUp={enter}
                            value={handle}
                            onChange={handleForm}
                        />
                        <p id='noResult'></p>
                        <span className="close-btn"
                            onClick={() => {
                                setHandle('')
                                setShowModal(false)
                            }}
                        >&times;</span>
                    </div>
                    
                </div>

            </>
        )
    }
    return (
        <>
            <img src={search} alt="" id='search'
                onClick={() => {
                    setShowModal(true)
                }
                }
            />
            {
                showModal && <MyModal />
            }
        </>

    )
}
