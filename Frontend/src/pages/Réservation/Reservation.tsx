import React, { useState } from 'react';
import reservation from '../../assets/reservation.png'

interface ReservationFormData {
  lastName: string;
  firstName: string;
  email: string;
  numberOfPeople: number;
  date: string;
}

const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    lastName: '',
    firstName: '',
    email: '',
    numberOfPeople: 1,
    date: '',
  });
  const [reservationSuccess, setReservationSuccess] = useState<boolean | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setReservationSuccess(true);
        console.log('La réservation a été soumise avec succès !');
      } else {
        setReservationSuccess(false);
        console.error('Une erreur s\'est produite lors de la soumission de la réservation.');
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la soumission de la réservation :', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
	<div className='min-h-screen p-36 pt-48 flex justify-between'>
    <div>
    <h2 className='text-6xl pl-20'>Réservez</h2>
		<form onSubmit={handleSubmit} className='flex flex-col gap-10 mt-20 border-2 p-20 rounded-xl shadow-2xl text-xl border-neutral-400'>
      <div>
        <label>Nom :</label>
        <input className='bg-slate-200 bg-opacity-50' type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div>
        <label>Prénom :</label>
        <input className='bg-slate-200 bg-opacity-50' type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <div>
        <label>Email :</label>
        <input className='bg-slate-200 bg-opacity-50' type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Nombre de personnes :</label>
        <input className='bg-slate-200 bg-opacity-50' type="number" name="numberOfPeople" value={formData.numberOfPeople} onChange={handleChange} min="1" max="6" required />
      </div>
      <div>
        <label>Date :</label>
        <input className='bg-slate-200 bg-opacity-50' type="date" name="date" value={formData.date} onChange={handleChange} required />
      </div>
      <button className=' border-2 rounded-xl p-10' type="submit">Soumettre la réservation</button>
      {reservationSuccess === true && (
        <div className="text-center">
          La réservation a été soumise avec succès !
        </div>
      )}

      {reservationSuccess === false && (
        <div className="text-center">
          Une erreur s'est produite lors de la soumission de la réservation.
        </div>
      )}
    </form>
    </div>

    <div className='w/1/2 flex justify-center items-end'>
      <img className='w-full h-full object-cover max-w-lg' src={reservation}/>
    </div>
	</div>
    
  );
};

export default ReservationForm;
