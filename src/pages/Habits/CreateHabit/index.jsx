import React, { useState } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

import {
  Form,
  Container,
  Input,
  Footer,
  CloseButton,
  SaveButton,
} from './style';
import { Days, StyledDay } from '../style';
import useAuth from '../../../hooks/useAuth';
import api from '../../../services/api';
import weekDays from '../../../utils/weekDays';

function CreateHabitForm({ isOpen, closeForm, loadHabits }) {
  const { auth } = useAuth();
  const [name, setName] = useState('');
  const [days, setDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleCreateHabit(e) {
    e.preventDefault();

    if (days.length === 0) {
      alert("Pelo menos um dia precisa ser selecionado");
      return;
    }

    setIsLoading(true);

    const promise = api.createHabit({ name, days }, auth.token);
    promise.then(() => {
      setIsLoading(false);
      setName('');
      setDays([]);
      closeForm();
      loadHabits();
    });
    promise.catch((error) => {
      setIsLoading(false);
      console.log(error.response);
    });
  }

  function handleSelectDay(id) {
    const isDaySelected = days.includes(id);

    if (isDaySelected) {
      const newDays = days.filter(day => day !== id);
      setDays(newDays);
      return;
    }

    setDays([...days, id]);
  }

  return (
    <Form onSubmit={handleCreateHabit} isOpen={isOpen}>
      <Container>
        <Input
          placeholder="nome do hábito"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          disabled={isLoading}
        />
        <Days disabled={isLoading}>
          {weekDays.map((weekDay) => (
            <Day
              key={weekDay.id}
              {...weekDay}
              isSelected={days.includes(weekDay.id)}
              handleSelectDay={handleSelectDay}
            />
          ))}
        </Days>
      </Container>

      <Footer>
        <CloseButton
          type="button"
          disabled={isLoading}
          onClick={closeForm}
        >
          Cancelar
        </CloseButton>
        <SaveButton type="submit" disabled={isLoading}>
          {
            isLoading
              ? <Loader type="ThreeDots" color="#FFFFFF" height={50} width={50} />
              : "Salvar"
          }
        </SaveButton>
      </Footer>
    </Form>
  );
}

function Day({ day, id, isSelected, handleSelectDay }) {
  return (
    <StyledDay
      onClick={() => handleSelectDay(id)}
      isSelected={isSelected}
    >
      {day}
    </StyledDay>
  );
}

export default CreateHabitForm;