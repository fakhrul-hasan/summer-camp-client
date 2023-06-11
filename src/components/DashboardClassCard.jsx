import { useState } from "react";


const DashboardClassCard = ({cls, handleStatus}) => {
  const {className, image, instructorName, instructorEmail, availableSeats, price, status} = cls;
  const [modalOpen, setModalOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const handleTextareaChange = (event) => {
    setFeedbackText(event.target.value);
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p><span className="font-semibold">Instructor Name: </span>{instructorName}</p>
        <p><span className="font-semibold">Instructor Email: </span>{instructorEmail}</p>
        <p><span className="font-semibold">Seats: </span>{availableSeats}</p>
        <p><span className="font-semibold">Price: </span>${price}</p>
        <p><span className="font-semibold">Status: </span>{status ? status : 'Pending'}</p>
        <div className="card-actions justify-between">
          <button onClick={()=>handleStatus(cls, 'Approve')} className="btn btn-success" disabled={cls?.status ? true:false}>Approve</button>
          <button onClick={()=>handleStatus(cls, 'Deny')} className="btn btn-error" disabled={cls?.status ? true:false}>Deny</button>
          <button onClick={()=>setModalOpen(true)} className="btn btn-info">Feedback</button>
        </div>
      </div>
      <dialog open={modalOpen} id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box flex flex-col gap-2">
          <h3 className="font-bold text-lg">Feedback</h3>
          <textarea className="textarea textarea-accent" value={feedbackText}
          onChange={handleTextareaChange} placeholder="Provide your feedback"></textarea>
          <input onClick={()=>handleStatus(cls, feedbackText)} className="btn btn-accent" type="submit" value="Submit" />
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
        {/* <div className="absolute bottom-48">
        <button onClick={()=>handleStatus(cls, )} className="btn">Submit</button>
        </div> */}
      </dialog>
    </div>
  );
};

export default DashboardClassCard;
