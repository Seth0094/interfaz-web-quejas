import { useState, useEffect } from 'react';
import { getSentResponses } from '../../../services/seService';
import SEnavbar from '../../../components/authcomponent/navbar/SEnavbar/SEnavbar.jsx';
import ResponsesList from '../../../components/secomponent/list/responseslist/responselist.jsx'; // Import the new component
import ModalResponses from '../../../components/secomponent/modal/modalresponses/modalresponses.jsx';
import './view-sent-responses.css';

const ViewSentResponses = () => {
  const [responses, setResponses] = useState([]);
  const [selectedResponse, setSelectedResponse] = useState(null);

  useEffect(() => {
    fetchSentResponses();
  }, []);

  const fetchSentResponses = async () => {
    try {
      const data = await getSentResponses();
      setResponses(data);
    } catch (error) {
      console.error('Error fetching sent responses:', error);
    }
  };

  const openModal = (response) => {
    setSelectedResponse(response);
  };

  const closeModal = () => {
    setSelectedResponse(null);
  };

  return (
    <>
      <SEnavbar />
      <ResponsesList responses={responses} openModal={openModal} />
      {selectedResponse && (
        <ModalResponses
          response={selectedResponse}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default ViewSentResponses;
